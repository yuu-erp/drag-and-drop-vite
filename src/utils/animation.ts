// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
export const requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    // @ts-ignore
    window.webkitRequestAnimationFrame ||
    // @ts-ignore
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()
export const runAnimation = (cb: Function, duration = 300) => {
  let startTime: number | null = null

  const animate = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const elapsed = currentTime - startTime

    const progress = Math.min(elapsed / duration, 1) // Calculate progress as a percentage (0 to 1)

    cb(progress)
    if (progress < 1) {
      requestAnimFrame(animate)
    }
  }
  requestAnimFrame(animate)
}

export const toNumber = (string: string) => +string.replace('px', '')
