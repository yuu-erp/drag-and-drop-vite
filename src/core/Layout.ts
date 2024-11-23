import { html, render as renderLitHTML, TemplateResult } from 'lit-html'
import CalculateManagerProp from './CalculateManagerProp'
import LayoutWithState from './LayoutWithState'
import { $ } from 'src/utils/domUtils'

export default abstract class Layout {
  private rootElement: HTMLElement
  layoutWithState: LayoutWithState
  constructor(
    rootElement: HTMLElement,
    heightStatusBar: number,
    heightPagination: number,
    column: number,
    iconWidth: number
  ) {
    this.rootElement = rootElement
    this.layoutWithState = new LayoutWithState()
    new CalculateManagerProp({
      heightStatusBar,
      heightPagination,
      column,
      iconWidth
    })
  }

  render() {
    const body = $('body')!
    renderLitHTML(this.renderHtmlLoading(), body)
    renderLitHTML(this.renderAppRoot(), this.rootElement)
  }

  private renderAppRoot() {
    const sections = [
      this.renderHtmlStatusBar(),
      this.renderHtmlDappMain(),
      this.renderHtmlPagination(),
      this.renderHtmlDock()
    ]
    return html`${sections}`
  }

  private renderHtmlLoading(): TemplateResult<1> {
    return html` <div id="loading" @click="${() => this.layoutWithState.setLoading(false)}">Loading...</div> `
  }

  abstract renderHtmlStatusBar(): TemplateResult<1>
  abstract renderHtmlDappMain(): TemplateResult<1>
  abstract renderHtmlPagination(): TemplateResult<1>
  abstract renderHtmlDock(): TemplateResult<1>
}
