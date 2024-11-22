import { $ } from '@utils/domUtils'
import { Variables } from './Variables'
import { TemplateResult } from 'lit-html'

export default abstract class Root {
  screenWidth: number
  screenHeight: number
  variables: Variables
  isEdit: boolean
  isSelect: boolean
  heightStatusBar: number
  heightPagination: number
  heightDocks: number
  constructor(heightStatusBar: number, heightPagination: number, heightDocks: number) {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.variables = new Variables()
    this.isEdit = this.variables.get('isEdit') || false
    this.isSelect = this.variables.get('isSelect') || false
    this.heightStatusBar = heightStatusBar
    this.heightPagination = heightPagination
    this.heightDocks = heightDocks
  }

  init() {
    console.log('this root: ', this)
    const elementStatusBar = $('#status-bar')
    console.log('elementStatusBar root: ', elementStatusBar)
  }

  onOpenSelect() {
    this.variables.set('isSelect', true, true)
  }
  onCloseSelect() {
    this.variables.set('isSelect', false, true)
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

  abstract renderHtmlLoading(): TemplateResult<1>
}
