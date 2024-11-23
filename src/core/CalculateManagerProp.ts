import { sharedVariables } from './Variables'

export type CalculateManagerProp = {
  heightStatusBar: number
  heightPagination: number
  column: number
  iconWidth: number
}
export default class CalculateManager {
  private variables = sharedVariables
  private screenWidth: number
  private screenHeight: number

  private heightStatusBar: number
  private heightPagination: number
  private heightDocks: number
  private heightMain: number

  private columnNumber: number
  private iconWidth: number
  private gridWidth: number

  constructor({ heightStatusBar, heightPagination, column, iconWidth }: CalculateManagerProp) {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight

    this.heightStatusBar = heightStatusBar
    this.heightPagination = heightPagination
    this.heightDocks = 0
    this.heightMain = 0

    this.columnNumber = column
    this.iconWidth = iconWidth
    this.gridWidth = 0

    this.init()
  }

  private init() {
    this.gridWidth = this.calculateGridWidth()
    this.heightDocks = this.iconWidth
    this.heightMain = this.calculateHeightMain()

    this.variables.set('screenWidth', this.screenWidth)
    this.variables.set('screenHeight', this.screenHeight)

    this.variables.set('heightMain', this.heightMain)
    this.variables.set('heightStatusBar', this.heightStatusBar)
    this.variables.set('heightPagination', this.heightPagination)
    this.variables.set('heightDocks', this.heightDocks)

    this.variables.set('gridWidth', this.gridWidth)
    console.log(this)
  }

  private calculateHeightMain() {
    return this.screenHeight - (this.heightStatusBar + this.heightPagination + this.heightDocks)
  }

  private calculateGridWidth() {
    return this.screenWidth / this.columnNumber
  }
}
