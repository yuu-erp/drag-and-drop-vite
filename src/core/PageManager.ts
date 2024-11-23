import { sharedVariables } from './Variables'

export default class PageManager {
  private variables = sharedVariables
  currentPage: number
  pages: Dapp[][]
  constructor() {
    this.currentPage = this.variables.get('currentPage') ?? 0
    this.pages = this.variables.get('pages') ?? []
  }

  scrollPage() {}

  deletePage() {}

  updatePage() {}
}
