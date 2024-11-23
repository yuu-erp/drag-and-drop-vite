import { $ } from 'src/utils/domUtils'
import PageManager from './PageManager'

export default class LayoutWithState {
  pageManager: PageManager
  constructor() {
    this.pageManager = new PageManager()
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
