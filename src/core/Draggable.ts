import { $ } from 'src/utils/domUtils'
import Root from './Root'

export default class Draggable extends Root {
  constructor(heightStatusBar: number, heightPagination: number, heightDocks: number) {
    super(heightStatusBar, heightPagination, heightDocks)
  }

  initDraggable() {
    console.log('initDraggable', $('#main'))
    console.log('initDraggable', $('#renderHtmlStatusBar'))
  }
}
