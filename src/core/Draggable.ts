import StatusBar from 'src/components/StatusBar'
import PageManager from './PageManager'
import Pagination from 'src/components/Pagination'
import { $ } from 'src/utils/domUtils'

export default class Draggable {
  private isTouch: boolean
  private isMoving: boolean = false
  private startX: number = 0
  private startY: number = 0
  private currentX: number = 0
  private currentY: number = 0

  constructor(
    private rootElement: HTMLElement,
    private statusBar: StatusBar,
    private pageManager: PageManager,
    private pagination: Pagination
  ) {
    this.isTouch = 'ontouchstart' in window
    this.initializeEventListeners()
  }

  private initializeEventListeners(): void {
    const startEvent = this.isTouch ? 'touchstart' : 'mousedown'
    const moveEvent = this.isTouch ? 'touchmove' : 'mousemove'
    const endEvent = this.isTouch ? 'touchend' : 'mouseup'

    this.rootElement.addEventListener(startEvent, this.onStartDraggable)
    // document.addEventListener(moveEvent, this.onMoveDraggable)
    // document.addEventListener(endEvent, this.onEndDraggable)
  }

  private getClientCoordinates(event: TouchEvent | MouseEvent): { clientX: number; clientY: number } {
    if (this.isTouch && event instanceof TouchEvent) {
      const touch = event.changedTouches[0]
      return { clientX: touch.clientX, clientY: touch.clientY }
    } else if (event instanceof MouseEvent) {
      return { clientX: event.clientX, clientY: event.clientY }
    }
    return { clientX: 0, clientY: 0 }
  }

  private onStartDraggable = (event: TouchEvent | MouseEvent): void => {
    this.isMoving = true
    const { clientX, clientY } = this.getClientCoordinates(event)
    this.startX = clientX
    this.startY = clientY
    console.log('Drag started', { startX: this.startX, startY: this.startY })
  }

  private onMoveDraggable = (event: TouchEvent | MouseEvent): void => {
    if (!this.isMoving) return

    const { clientX, clientY } = this.getClientCoordinates(event)
    this.currentX = clientX
    this.currentY = clientY

    const deltaX = this.startX - this.currentX
    const deltaY = this.currentY - this.startY

    console.log('Dragging', { currentX: this.currentX, currentY: this.currentY, deltaX, deltaY })
    // @ts-ignore
    const mainEle = $('#main')!
    console.log('mainEle: ', mainEle)
    mainEle.scrollLeft = deltaX
  }

  private onEndDraggable = (): void => {
    if (!this.isMoving) return
    this.isMoving = false
    console.log('Drag ended', { finalX: this.currentX, finalY: this.currentY })
    this.resetDragState()
  }

  private resetDragState(): void {
    this.startX = 0
    this.startY = 0
    this.currentX = 0
    this.currentY = 0
  }
}
