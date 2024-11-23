import PageManager from './PageManager'

export default class Draggable {
  private rootElement: HTMLElement
  private pageManager: PageManager
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement
    this.pageManager = new PageManager()
  }
}
