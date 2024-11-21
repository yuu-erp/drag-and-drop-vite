import { HEIGHT_DOCK_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_STATUS_BAR_MOBILE } from '../constants'
import Layout from './Layout'

export default class MobileLayout extends Layout {
  constructor(rootElement: HTMLElement) {
    super(rootElement, HEIGHT_STATUS_BAR_MOBILE, HEIGHT_PAGINATION_MOBILE, HEIGHT_DOCK_MOBILE)
  }
}
