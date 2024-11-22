import { $ } from '@utils/domUtils'
import { Variables } from './Variables'

export default class Root {
  screenWidth: number
  screenHeight: number
  variables: Variables
  isEdit: boolean
  heightStatusBar: number
  heightPagination: number
  heightDocks: number
  constructor(heightStatusBar: number, heightPagination: number, heightDocks: number) {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.variables = new Variables()
    this.isEdit = this.variables.get('isEdit') || false
    this.heightStatusBar = heightStatusBar
    this.heightPagination = heightPagination
    this.heightDocks = heightDocks
  }

  init() {
    console.log('this root: ', this)
    const elementStatusBar = $('#status-bar')
    console.log('elementStatusBar root: ', elementStatusBar)
  }
}
