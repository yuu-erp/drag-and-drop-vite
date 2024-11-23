import { html, render as renderLitHTML, TemplateResult } from 'lit-html'
import CalculateManagerProp from './CalculateManagerProp'
import LayoutWithState from './LayoutWithState'
import { $ } from 'src/utils/domUtils'
import FetchData from './FetchData'
import Draggable from './Draggable'
import { sharedVariables } from './Variables'

export default abstract class Layout {
  private rootElement: HTMLElement
  private fetchData: FetchData
  variables = sharedVariables
  layoutWithState: LayoutWithState
  constructor(
    rootElement: HTMLElement,
    heightStatusBar: number,
    heightPagination: number,
    column: number,
    iconWidth: number
  ) {
    new CalculateManagerProp({
      heightStatusBar,
      heightPagination,
      column,
      iconWidth
    })
    new Draggable(rootElement)
    this.rootElement = rootElement
    this.fetchData = new FetchData()
    this.layoutWithState = new LayoutWithState()
  }

  async render() {
    const body = $('body')!
    renderLitHTML(this.renderHtmlLoading(), body)
    try {
      await this.fetchData.fetch()
      renderLitHTML(this.renderAppRoot(), this.rootElement)
      this.layoutWithState.init()
    } catch (error) {
      console.log(error)
    } finally {
      this.layoutWithState.setLoading(false)
    }
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
    return html` <div id="loading">Loading...</div> `
  }

  abstract renderHtmlStatusBar(): TemplateResult<1>
  abstract renderHtmlDappMain(): TemplateResult<1>
  abstract renderHtmlPagination(): TemplateResult<1>
  abstract renderHtmlDock(): TemplateResult<1>
}
