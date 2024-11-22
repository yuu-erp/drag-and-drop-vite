import { $ } from '@utils/domUtils'
import { Variables } from './Variables'

export default class Root {
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
}
