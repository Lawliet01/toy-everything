function enableGesture(e) {
  let context = {};

  e.addEventListener("touchstart", (event) => {
    event.stopPropagation()
    console.log('a');

    
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", end);

    context = {};

    if (event.changedTouches.length > 1) return;

    Object.assign(context, {
      startX: event.changedTouches[0].clientX,
      startY: event.changedTouches[0].clientY,
      isTap: true,
      timeoutHandler: setTimeout(() => {
        if (context.isTap && !context.isPan) {
          context.isTap = false;
          context.isPress = true;
          newEventDispatch("pressstart", {
              startX: event.changedTouches[0].clientX,
              startY: event.changedTouches[0].clientY
          })
        }
      }, 500),
    });

    console.log(context);
    

    // console.log(event);
  });

  const move = throttle((event) => {
    console.log('b');
    
    // console.log(Date.now());
      
    if (event.changedTouches.length > 1) {
      console.log("resize");
      return;
    }

    const { clientX, clientY } = event.changedTouches[0]

    if ((clientX - context.startX) ** 2 + (clientY - context.startY) ** 2 >
      100) {
      context.isPan = true;
      newEventDispatch("pan", {
        startX: context.startX,
        startY: context.startY,
        clientX,
        clientY,
      });
    }
  }, 16);

  const end = (event) => {
    if (context.isResize) console.log('resizeend');

    const { clientX, clientY } = event.changedTouches[0];
    

    if (context.isTap) newEventDispatch("tap");
    if (context.isPan) newEventDispatch("panend", {
      startX: context.startX,
      startY: context.startY,
      clientX,
      clientY,
    });
    if (context.isPress) newEventDispatch("pressend");
    
    // if (context.isResize)
    clearTimeout(context.timeoutHandler);
    window.removeEventListener("touchmove", move);
    window.removeEventListener("touchend", end);
  };

  function newEventDispatch(name, config) {
    const event = document.createEvent("CustomEvent");
    event.initCustomEvent(name, false, false, config);
    e.dispatchEvent(event);
  }
}


function debounce(func, duration) {
    let timeout = null 
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(this, args)
        }, duration)
    }
}

function throttle(func, duration) {
    let enable = true
    return function(...args) {
        if (enable) {
            enable = false
            func.apply(this, args)
            setTimeout(()=>{
                enable = true
            }, duration)
        }
    }
}