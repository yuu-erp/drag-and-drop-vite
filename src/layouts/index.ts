import { html, render as renderLitHTML, TemplateResult } from 'lit-html'
import { APP_COLUMN_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_STATUS_BAR_MOBILE, ICON_WIDTH } from 'src/constants'
import FetchData from 'src/core/FetchData'
import LayoutWithState from 'src/core/LayoutWithState'
import { $ } from 'src/utils/domUtils'

export default class Layout extends LayoutWithState {
  fetchData: FetchData
  constructor(rootElement: HTMLElement) {
    super(rootElement, HEIGHT_STATUS_BAR_MOBILE, HEIGHT_PAGINATION_MOBILE, APP_COLUMN_MOBILE, ICON_WIDTH)
    this.fetchData = new FetchData()
  }

  async render() {
    const body = $('body')!
    renderLitHTML(this.renderHtmlLoading(), body)
    try {
      await this.fetchData.init()
      renderLitHTML(this.renderApp(), this.rootElement)
    } catch (error) {
      console.error(error)
    } finally {
      this.setLoading(false)
    }
  }

  private renderApp() {
    const sections = [
      this.renderHtmlStatusBar(),
      this.renderHtmlDappMain(),
      this.renderHtmlPagination(),
      this.renderHtmlDock()
    ]
    return html`${sections}`
  }

  private renderHtmlLoading(): TemplateResult<1> {
    return html` <div id="loading">Loading...</div> `
  }

  private renderHtmlStatusBar(): TemplateResult<1> {
    return html`
      <div
        id="status-bar"
        @click="${() => console.log('123')}"
        style="height: ${this.variables.get('heightStatusBar')}px"
      >
        ${this.statusBar.render()}
      </div>
    `
  }

  private renderHtmlDappMain(): TemplateResult<1> {
    return html`
      <div id="main" style="width: ${this.variables.get('screenWidth')}px">${this.pageManager.render()}</div>
    `
  }

  private renderHtmlPagination(): TemplateResult<1> {
    return html`
      <div id="pagination" style="height: ${this.variables.get('heightPagination')}px">${this.pagination.render()}</div>
    `
  }

  private renderHtmlDock(): TemplateResult<1> {
    return html` <div id="dock" style="height: ${this.variables.get('heightDocks')}px">renderHtmlDock</div> `
  }
}
