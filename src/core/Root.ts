import { data } from 'src/constants/mock'
import { $ } from 'src/utils/domUtils'
import { CoreNative } from './CoreNative'
import { Variables } from './Variables'
import { TemplateResult } from 'lit-html'
import { GridManager } from './GridManager'
import { APP_RAITO, COLUMN } from 'src/constants'

export default abstract class Root {
  screenWidth: number
  screenHeight: number
  variables: Variables
  isEdit: boolean
  isSelect: boolean
  heightStatusBar: number
  heightPagination: number
  heightDocks: number
  coreNative: CoreNative
  gridManager: GridManager
  paddingWidth = 0
  appWidth = 0
  row = 0

  pages: Dapp[][] = data
  currentPage = 0
  constructor(heightStatusBar: number, heightPagination: number, heightDocks: number) {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.variables = new Variables()
    this.isEdit = this.variables.get('isEdit') || false
    this.isSelect = this.variables.get('isSelect') || false
    this.heightStatusBar = heightStatusBar
    this.heightPagination = heightPagination
    this.heightDocks = heightDocks
    this.coreNative = new CoreNative()
    this.gridManager = new GridManager()
  }

  async init() {
    const appRaito = APP_RAITO / (1 - APP_RAITO)
    this.paddingWidth = innerWidth / (COLUMN * (appRaito + 2) + 2)
    this.appWidth = this.paddingWidth * appRaito
    const lineHeight = 16
    const gridElement = $('#grid')
    const height = gridElement?.clientHeight || 0
    this.row = Math.floor(height / (this.appWidth + 2 * this.paddingWidth + lineHeight))

    const elementStatusBar = $('#status-bar')
    console.log('elementStatusBar root: ', elementStatusBar)

    // console.log('haha', await this.coreNative.getAllDapp())
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
}
