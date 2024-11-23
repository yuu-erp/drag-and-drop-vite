var requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    //@ts-ignore
    window.webkitRequestAnimationFrame ||
    //@ts-ignore
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()
