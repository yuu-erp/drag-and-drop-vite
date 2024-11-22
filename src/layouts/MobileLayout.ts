import { HEIGHT_DOCK_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_STATUS_BAR_MOBILE } from 'src/constants/index'
import Layout from 'src/core/Layout'
import { html, TemplateResult } from 'lit-html'

export default class MobileLayout extends Layout {
  constructor(rootElement: HTMLElement) {
    super(rootElement, HEIGHT_STATUS_BAR_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_DOCK_MOBILE)
  }

  renderHtmlStatusBar(): TemplateResult<1> {
    return html` <div id="status-bar" style="height: ${HEIGHT_STATUS_BAR_MOBILE}px">renderHtmlStatusBar</div> `
  }

  renderHtmlPagination(): TemplateResult<1> {
    return html` <div id="pageNavigationBar">renderHtmlPagination</div> `
  }

  renderHtmlDock(): TemplateResult<1> {
    return html` <div id="footer">renderHtmlDock</div> `
  }
}
