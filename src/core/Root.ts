import { $ } from 'src/utils/domUtils'
import { Variables } from './Variables'
import { data } from '../constants/mock'
export default class Root {
  screenWidth: number
  screenHeight: number
  isTouch: boolean
  heightStatusBar: number
  heightPagination: number
  heightDocks: number
  variables: Variables
  isEdit: boolean
  isSelect: boolean
  currentPage: number
  pages: Dapp[][]
  constructor(heightStatusBar: number, heightPagination: number, heightDocks: number) {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.isTouch = 'ontouchstart' in window
    this.heightStatusBar = heightStatusBar
    this.heightPagination = heightPagination
    this.heightDocks = heightDocks
    this.variables = new Variables()
    this.isEdit = this.variables.get('isEdit') || false
    this.isSelect = this.variables.get('isSelect') || false
    this.currentPage = this.variables.get('currentPage') || 0
    this.pages = data
  }

  async init() {
    console.log('Root init', this)
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
    if (!elementLoading) throw Error('id #loading is not defined')
    elementLoading.style.display = value ? 'flex' : 'none'
  }
}
