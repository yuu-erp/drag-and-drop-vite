import { html } from 'lit-html'
import { Variables } from './Variables'

export default class PageManager {
  currenPage: number
  variables: Variables
  pages: Dapp[][]
  constructor(pages: Dapp[][]) {
    this.variables = new Variables()
    this.currenPage = this.variables.get('currenPage') || 0
    this.pages = pages
  }

  renderHtmlSlicePage() {
    console.log('renderHtmlSlicePage', this.pages)
    return html` <div class="pages">123</div> `
  }
}
