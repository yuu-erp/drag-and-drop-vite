import { HEIGHT_DOCK_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_STATUS_BAR_MOBILE } from 'src/constants/index'
import Layout from 'src/core/Layout'
import { html, TemplateResult } from 'lit-html'
export default class MobileLayout extends Layout {
  constructor(rootElement: HTMLElement) {
    super(rootElement, HEIGHT_STATUS_BAR_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_DOCK_MOBILE)
  }

  renderHtmlStatusBar(): TemplateResult<1> {
    return html` <div id="renderHtmlStatusBar" style="height: ${HEIGHT_STATUS_BAR_MOBILE}px">renderHtmlStatusBar</div> `
  }

  renderHtmlDappMain(): TemplateResult<1> {
    return html`
      <div id="renderHtmlDappMain" style="width: ${this.screenWidth}px" class="mobile">renderHtmlDappMain</div>
    `
  }

  renderHtmlPagination(): TemplateResult<1> {
    return html` <div id="pageNavigationBar" style="height: ${HEIGHT_PAGINATION_MOBILE}px">renderHtmlPagination</div> `
  }

  renderHtmlDock(): TemplateResult<1> {
    return html` <div id="renderHtmlDock" style="height: ${HEIGHT_DOCK_MOBILE}px">renderHtmlDock</div> `
  }
}
