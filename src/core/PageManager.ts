import { sharedVariables } from './Variables'

export default class PageManager {
  private variables = sharedVariables
  pages: Dapp[][]
  constructor() {
    this.pages = this.variables.get('pages') ?? []
  }

  scrollPage() {}
}
