import { GridManager } from '@core/managers/GridManager'

export class PageManager {
  private pages: GridManager[]
  private currentPageIndex: number

  constructor(numPages: number, rows: number, cols: number) {
    this.pages = Array.from({ length: numPages }, () => new GridManager(rows, cols))
    this.currentPageIndex = 0
  }

  // Chuyển sang trang kế tiếp
  nextPage(): void {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++
    }
  }

  // Quay về trang trước
  previousPage(): void {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--
    }
  }

  // Lấy lưới của trang hiện tại
  getCurrentGrid(): GridManager {
    return this.pages[this.currentPageIndex]
  }
}
