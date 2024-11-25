import { $ } from 'src/utils/domUtils'
import Draggable from './Draggable'
import StatusBar from 'src/components/StatusBar'
import Pagination from 'src/components/Pagination'
import CalculateManager from './CalculateManager'
import PageManager from './PageManager'
import DappManager from './DappManager'

export default class LayoutWithState extends CalculateManager {
  rootElement: HTMLElement
  statusBar: StatusBar
  pageManager: PageManager
  pagination: Pagination
  dappManager: DappManager

  constructor(
    rootElement: HTMLElement,
    heightStatusBar: number,
    heightPagination: number,
    column: number,
    iconWidth: number,
    sitePadding: number
  ) {
    super({
      heightPagination,
      heightStatusBar,
      column,
      iconWidth,
      sitePadding
    })
    this.rootElement = rootElement
    this.statusBar = new StatusBar()
    this.pageManager = new PageManager()
    this.pagination = new Pagination()
    this.dappManager = new DappManager()

    // Initialize Draggable
    Draggable.getInstance(rootElement, this.statusBar, this.pageManager, this.pagination, this.dappManager)
  }

  /**
   * Set loading state for #loading element.
   */
  setLoading(value: boolean) {
    const elementLoading = $('#loading')
    if (!elementLoading) {
      console.warn('#loading element not found in DOM')
      return
    }
    elementLoading.style.display = value ? 'flex' : 'none'
  }

  /**
   * Cleanup resources when LayoutWithState is no longer needed.
   */
  destroy() {
    Draggable.getInstance(
      this.rootElement,
      this.statusBar,
      this.pageManager,
      this.pagination,
      this.dappManager
    ).destroy()
    console.log('LayoutWithState destroyed')
  }
}
