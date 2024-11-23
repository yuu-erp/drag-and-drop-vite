import { html, TemplateResult } from 'lit-html'
import { APP_COLUMN_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_STATUS_BAR_MOBILE, ICON_WIDTH } from 'src/constants'
import Layout from 'src/core/Layout'
import { sharedVariables } from 'src/core/Variables'

export default class MobileLayout extends Layout {
  private variables = sharedVariables
  constructor(rootElement: HTMLElement) {
    super(rootElement, HEIGHT_STATUS_BAR_MOBILE, HEIGHT_PAGINATION_MOBILE, APP_COLUMN_MOBILE, ICON_WIDTH)
  }

  renderHtmlStatusBar(): TemplateResult<1> {
    return html`
      <div id="status-bar" style="height: ${this.variables.get('heightStatusBar')}px">renderHtmlStatusBar</div>
    `
  }

  renderHtmlDappMain(): TemplateResult<1> {
    return html` <div id="main">renderHtmlDappMain</div> `
  }

  renderHtmlPagination(): TemplateResult<1> {
    return html`
      <div id="pagination" style="height: ${this.variables.get('heightPagination')}px">renderHtmlPagination</div>
    `
  }

  renderHtmlDock(): TemplateResult<1> {
    return html` <div id="dock" style="height: ${this.variables.get('heightDocks')}px"></div> `
  }
}
