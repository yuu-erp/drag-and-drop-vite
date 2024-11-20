import { html, render } from 'lit-html'

export class AppRenderer {
  private rootElement: HTMLElement
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement
    this.initApp()
  }

  private initApp() {
    const renderApp = this.renderApp()
    render(renderApp, this.rootElement)
  }

  private renderApp() {
    return html` ${this.renderStatusBar()} ${this.renderMain()} ${this.renderPagination()} ${this.renderDock()} `
  }

  private renderStatusBar() {
    return html`<header class="text-red-500 font-bold">renderStatusBar</header>`
  }
  private renderMain() {
    return html`<div>renderMain</div>`
  }
  private renderPagination() {
    return html`<div>renderPagination</div>`
  }
  private renderDock() {
    return html`<div>renderDock</div>`
  }
}
