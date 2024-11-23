import { sharedVariables } from './Variables'

export default class FetchData {
  private variables = sharedVariables
  private pages: Dapp[][]
  constructor() {
    this.pages = []
    this.init()
  }

  private async init() {
    this.pages = [[], [], []]
    this.variables.set('pages', this.pages, true)
  }
}
