import { $ } from 'src/utils/domUtils'
import CalculateManager from './CalculateManagerProp'
import Draggable from './Draggable'
import StatusBar from 'src/components/StatusBar'
import PageManager from './PageManager'
import Pagination from 'src/components/Pagination'

export default class LayoutWithState extends CalculateManager {
  rootElement: HTMLElement
  statusBar: StatusBar
  pageManager: PageManager
  pagination: Pagination
  constructor(
    rootElement: HTMLElement,
    heightStatusBar: number,
    heightPagination: number,
    column: number,
    iconWidth: number
  ) {
    super({
      heightPagination,
      heightStatusBar,
      column,
      iconWidth
    })
    this.rootElement = rootElement
    this.statusBar = new StatusBar()
    this.pageManager = new PageManager()
    this.pagination = new Pagination()
    new Draggable(rootElement, this.statusBar, this.pageManager, this.pageManager)
  }

  /**
   * Cập nhật trạng thái hiển thị của phần tử có ID `#loading`.
   * Nếu phần tử không tồn tại trong DOM, hàm sẽ ném lỗi.
   *
   * @param {boolean} value - Trạng thái hiển thị của phần tử `#loading`. Nếu `true`, phần tử sẽ hiển thị với `display: flex`, nếu `false`, phần tử sẽ bị ẩn với `display: none`.
   * @throws {Error} - Nếu phần tử `#loading` không tìm thấy trong DOM, một lỗi sẽ được ném ra với thông báo `#loading is not defined`.
   */
  setLoading(value: boolean) {
    const elementLoading = $('#loading')
    if (!elementLoading) throw Error('#loading is not defined')
    elementLoading.style.display = value ? 'flex' : 'none'
  }
}
