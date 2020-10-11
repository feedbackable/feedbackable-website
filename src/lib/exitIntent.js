export default function ExitIntent({
  id,
  initDelay = 3000,
  onExitIntent = null,
} = {}) {
  const hasInteracted = () =>
    window.localStorage.getItem("exit-intent__interacted--" + id)

  const startTime = new Date().getTime()

  let lastTime = new Date().getTime()
  const lastMousePos = { x: null, y: null }

  const mapIsNull = ({ x, y }) => {
    return x === null || y === null
  }

  const updateMousePos = ({ x, y }) => {
    lastMousePos.x = x
    lastMousePos.y = y
  }

  const getMousePos = e => {
    return { x: e.clientX, y: e.clientY }
  }

  // const getMouseDirection = ({ x, y }) => {
  //   const mouseDirection = { x: null, y: null }

  //   if (mapIsNull(lastMousePos)) {
  //     return mouseDirection
  //   }

  //   mouseDirection.x = x - lastMousePos.x
  //   mouseDirection.y = y - lastMousePos.y

  //   return mouseDirection
  // }

  const getMouseVelocity = ({ x, y }) => {
    const dT = new Date().getTime() - lastTime
    const dX = x - lastMousePos.x
    const dY = y - lastMousePos.y
    const v = {
      x: dX / dT,
      y: dY / dT,
    }
    v.total = Math.sqrt(v.x * v.x + v.y * v.y)
    return v
  }

  const checkShouldTrigger = ({ event = null }) => {
    return e => {
      if (hasInteracted()) return

      if (
        parseInt(initDelay) > 0 &&
        new Date().getTime() - startTime < initDelay
      )
        return
      const mousePos = getMousePos(e)
      // console.log(getMouseDirection(mousePos))
      const mouseV = getMouseVelocity(mousePos)

      if (e.clientY < 50 && mouseV.y < -0.25) {
        triggerExitIntent()
      }

      // Update stuff
      lastTime = new Date().getTime()
      updateMousePos(mousePos)
    }
  }

  const triggerExitIntent = e => {
    if (typeof onExitIntent === "function") {
      onExitIntent(e)
    }
    removeExitIntent()
  }

  const removeExitIntent = () => {
    document.removeEventListener(
      "mouseout",
      checkShouldTrigger({ event: "mouseout" })
    )
  }

  const setHasInteracted = value => {
    window.localStorage.setItem("exit-intent__interacted--" + id, value)
  }

  // Event listeners
  document.addEventListener(
    "mouseout",
    checkShouldTrigger({ event: "mouseout" })
  )

  return {
    remove: function () {
      removeExitIntent()
    },
    trigger: function () {
      triggerExitIntent()
    },
    setHasInteracted: function (value) {
      setHasInteracted(value)
    },
  }
}
