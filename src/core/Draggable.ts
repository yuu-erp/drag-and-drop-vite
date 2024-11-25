import Pagination from 'src/components/Pagination'
import StatusBar from 'src/components/StatusBar'
import PageManager from './PageManager'
import { $ } from 'src/utils/domUtils'
import { sharedVariables } from './Variables'
import DappManager from './DappManager'

export default class Draggable {
  private static instance: Draggable | null = null

  private variables = sharedVariables

  private isTouch: boolean
  private isMoving: boolean = false
  private timeStart: number = 0
  private startX: number = 0
  private startY: number = 0
  private currentX: number = 0
  private currentY: number = 0

  private scrollLeft: number = 0
  private constructor(
    private rootElement: HTMLElement,
    private statusBar: StatusBar,
    private pageManager: PageManager,
    private pagination: Pagination,
    private dappManager: DappManager
  ) {
    this.isTouch = 'ontouchstart' in window
    this.initializeEventListeners()
  }

  // Singleton Instance Getter
  public static getInstance(
    rootElement: HTMLElement,
    statusBar: StatusBar,
    pageManager: PageManager,
    pagination: Pagination,
    dappManager: DappManager
  ): Draggable {
    if (!Draggable.instance) {
      Draggable.instance = new Draggable(rootElement, statusBar, pageManager, pagination, dappManager)
    }
    return Draggable.instance
  }

  // Initialize Event Listeners
  private initializeEventListeners(): void {
    const startEvent = this.isTouch ? 'touchstart' : 'mousedown'
    const moveEvent = this.isTouch ? 'touchmove' : 'mousemove'
    const endEvent = this.isTouch ? 'touchend' : 'mouseup'

    this.rootElement.addEventListener(startEvent, this.onStartDraggable)
    document.addEventListener(moveEvent, this.onMoveDraggable)
    document.addEventListener(endEvent, this.onEndDraggable)
  }

  // Remove Event Listeners (Cleanup)
  public destroy(): void {
    const startEvent = this.isTouch ? 'touchstart' : 'mousedown'
    const moveEvent = this.isTouch ? 'touchmove' : 'mousemove'
    const endEvent = this.isTouch ? 'touchend' : 'mouseup'

    this.rootElement.removeEventListener(startEvent, this.onStartDraggable)
    document.removeEventListener(moveEvent, this.onMoveDraggable)
    document.removeEventListener(endEvent, this.onEndDraggable)

    // Clear Singleton instance
    Draggable.instance = null
    console.log('Draggable.instance', Draggable.instance)
  }

  // Utility: Get Client Coordinates
  private getClientCoordinates(event: TouchEvent | MouseEvent): { clientX: number; clientY: number } {
    if (this.isTouch && event instanceof TouchEvent) {
      const touch = event.changedTouches[0]
      return { clientX: touch.clientX, clientY: touch.clientY }
    } else if (event instanceof MouseEvent) {
      return { clientX: event.clientX, clientY: event.clientY }
    }
    return { clientX: 0, clientY: 0 }
  }

  // Event Handler: Drag Start
  private onStartDraggable = (event: TouchEvent | MouseEvent): void => {
    this.timeStart = performance.now()
    this.isMoving = true
    const { clientX, clientY } = this.getClientCoordinates(event)
    this.startX = clientX
    this.startY = clientY
    this.scrollLeft = ($('#main')! as HTMLElement).scrollLeft
  }

  // Event Handler: Drag Move
  private onMoveDraggable = (event: TouchEvent | MouseEvent): void => {
    if (!this.isMoving) return

    const { clientX, clientY } = this.getClientCoordinates(event)
    this.currentX = clientX
    this.currentY = clientY
    const target = event.target as HTMLElement
    // Kiểm tra xem phần tử target có phải là một dapp và có thuộc tính data-type="dapp"
    const isDapp = target.getAttribute('data-type') === 'dapp'
    // Kiểm tra thời gian di chuyển đã vượt quá 3 giây
    const timeElapsed = performance.now() - this.timeStart
    const isMoveLongEnough = timeElapsed > 800 // 3 giây = 3000ms
    if (isDapp && isMoveLongEnough) {
      // Di chuyển dapp nếu là dapp và đã di chuyển hơn 3 giây
      console.log('Moving dapp...')
      // Thực hiện logic di chuyển dapp
    } else {
      // Di chuyển page nếu không phải dapp và đã di chuyển hơn 3 giây
      console.log('Moving page...')
      // Thực hiện logic di chuyển page
      const x = clientX - ($('#main')! as HTMLElement).offsetLeft
      const walk = x - this.startX // Khoảng cách kéo
      this.pageManager.moveScroll(this.scrollLeft - walk)
    }
  }

  // Event Handler: Drag End
  private onEndDraggable = (): void => {
    if (!this.isMoving) return

    this.isMoving = false

    // Tính toán velocity
    const deltaX = this.currentX - this.startX
    const deltaTime = performance.now() - this.timeStart
    const velocity = Math.abs(deltaX / deltaTime)
    // Ngưỡng tốc độ (tùy chỉnh theo yêu cầu)
    const VELOCITY_THRESHOLD = 0.3 // Tốc độ đủ để chuyển trang
    // Xác định trang mục tiêu
    if (velocity > VELOCITY_THRESHOLD) {
      // Dựa vào hướng kéo để xác định trang
      if (deltaX > 0) {
        this.pageManager.currentPage = Math.max(0, this.pageManager.currentPage - 1) // Trang trước
      } else {
        this.pageManager.currentPage = Math.min(this.pageManager.currentPage + 1) // Trang sau
      }
    }

    // Snap về trang hiện tại hoặc trang đã chọn
    this.pageManager.scrollTo(this.pageManager.currentPage)
    this.resetDragState()
  }
  // Reset Drag State
  private resetDragState(): void {
    this.startX = 0
    this.startY = 0
    this.currentX = 0
    this.currentY = 0
    this.timeStart = 0
  }
}
