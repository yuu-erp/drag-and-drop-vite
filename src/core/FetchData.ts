import { sharedVariables } from './Variables'

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export default class FetchData {
  private variables = sharedVariables
  private pages: Dapp[][]
  constructor() {
    this.pages = []
  }

  async fetch() {
    await wait(1000)
    this.pages = [[], [], []]
    this.variables.set('pages', this.pages, true)
  }

  private getAllDataDapp() {}
}
