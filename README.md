We can't handle any events when we render components from server side. Hence webpack client js is configured and created a public folder for it.
In current example, we have press me button on home page, where it consoles text on each click. But with server side rendering, events are not triggered. Hence we also run a build and create bundle.js at client side using webpack to maintain one more bundle for client side handling.