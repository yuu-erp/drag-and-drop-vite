import Root from './Root'

export default class Draggable extends Root {
  rootElement: HTMLElement
  isMoving: boolean
  offsetX: number
  offsetY: number
  currentX: number
  currentY: number
  constructor(rootElement: HTMLElement, heightStatusBar: number, heightPagination: number, heightDocks: number) {
    super(heightStatusBar, heightPagination, heightDocks)
    this.rootElement = rootElement
    this.isMoving = false
    this.offsetX = 0
    this.offsetY = 0
    this.currentX = 0
    this.currentY = 0
    this.startDraggable()
  }

  private startDraggable() {
    this.rootElement.addEventListener('mousedown', this.onMouseDown)
    this.rootElement.addEventListener('touchstart', this.onTouchStart)
  }

  private onMouseDown = (event: MouseEvent) => {
    this.isMoving = true

    // Tính offset dựa trên vị trí hiện tại
    this.offsetX = event.clientX - this.currentX
    this.offsetY = event.clientY - this.currentY

    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
  }

  private onTouchStart = (event: TouchEvent) => {
    this.isMoving = true
    const touch = event.touches[0]

    // Tính offset dựa trên vị trí hiện tại
    this.offsetX = touch.clientX - this.currentX
    this.offsetY = touch.clientY - this.currentY

    document.addEventListener('touchmove', this.onTouchMove)
    document.addEventListener('touchend', this.onTouchEnd)
  }

  private onMouseMove = (event: MouseEvent) => {
    if (!this.isMoving) return

    const newX = event.clientX - this.offsetX
    const newY = event.clientY - this.offsetY

    // @ts-ignore
    // this.updateElementPosition(event.target, newX, newY)
    // Lưu vị trí mới
    this.currentX = newX
    this.currentY = newY
  }

  private onTouchMove = (event: TouchEvent) => {
    if (!this.isMoving) return

    const touch = event.touches[0]
    const newX = touch.clientX - this.offsetX
    const newY = touch.clientY - this.offsetY
    // @ts-ignore
    // this.updateElementPosition(event.target, newX, newY)

    // Lưu vị trí mới
    this.currentX = newX
    this.currentY = newY
  }

  private onMouseUp = () => {
    this.stopMoving()
  }

  private onTouchEnd = () => {
    this.stopMoving()
  }

  private stopMoving() {
    this.isMoving = false
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('touchmove', this.onTouchMove)
    document.removeEventListener('touchend', this.onTouchEnd)
  }

  private updateElementPosition(element: HTMLElement, x: number, y: number) {
    if (!(element instanceof HTMLElement)) {
      console.error('Invalid element provided to updateElementPosition')
      return
    }

    // Cập nhật vị trí của phần tử
    element.style.position = 'absolute'
    element.style.left = `${x}px`
    element.style.top = `${y}px`
  }
}
