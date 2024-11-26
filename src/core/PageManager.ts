import { html, TemplateResult } from 'lit-html'
import { requestAnimFrame } from 'src/utils/animation'
import { $ } from 'src/utils/domUtils'
import { easeInOutQuad } from 'src/utils/mathUtils'
import { sharedVariables } from './Variables'

export default class PageManager {
  private variables = sharedVariables
  currentPage: number = this.variables.get('currentPage') ?? 0
  constructor() {}

  render(): TemplateResult<1> {
    const pages = this.variables.get('pages')
    return html`
      <div id="main-grid" class="main_grid" style="width: ${this.variables.get('screenWidth') * pages.length}px"></div>
    `
  }

  // Phương thức scrollTo
  scrollTo(targetPage?: number, duration = 350): void {
    const elementMain = $('#main')! as HTMLElement
    if (!elementMain) {
      console.warn('#main element not found in DOM')
      return
    }
    const pages = this.variables.get('pages')

    const slideWidth = this.variables.get('screenWidth')
    const currentPosition = elementMain.scrollLeft

    // Xác định trang mục tiêu
    let targetSlide: number
    if (targetPage !== undefined) {
      // Snap tới trang được chỉ định
      targetSlide = Math.min(Math.max(targetPage, 0), pages.length - 1)
    } else {
      // Snap dựa trên vị trí cuộn
      const nearestSlide = Math.round(currentPosition / slideWidth)
      if (currentPosition - nearestSlide * slideWidth > slideWidth / 2) {
        targetSlide = nearestSlide + 1
      } else {
        targetSlide = nearestSlide
      }
      targetSlide = Math.min(Math.max(targetSlide, 0), pages.length - 1)
    }

    this.currentPage = targetSlide

    // Thực hiện cuộn mượt
    let currentTime = 0
    const increment = 20

    const animateScroll = () => {
      currentTime += increment
      const val = easeInOutQuad(currentTime, currentPosition, targetSlide * slideWidth - currentPosition, duration)
      elementMain.scrollLeft = val
      if (currentTime < duration) {
        requestAnimFrame(animateScroll)
      }
    }
    animateScroll()
  }

  // Phương thức di chuyển page
  moveScroll(to: number): void {
    const elementMain = $('#main')! as HTMLElement
    if (!elementMain) {
      console.warn('#main element not found in DOM')
      return
    }
    console.log('moveScroll', to)
    elementMain.scrollLeft = to
  }
}
