import { DappManager } from '@core/managers/DappManager'
import { PageManager } from '@core/managers/PageManager'
export class DragDropManager {
  private dappManager: DappManager
  private pageManager: PageManager

  constructor(dappManager: DappManager, pageManager: PageManager) {
    this.dappManager = dappManager
    this.pageManager = pageManager
  }

  handleDrop(dappId: string, targetX: number, targetY: number): void {
    const currentGrid = this.pageManager.getCurrentGrid()
    const dapp = this.dappManager.getDappById(dappId)

    if (dapp && currentGrid.isValidPosition(targetX, targetY)) {
      currentGrid.setDapp(dapp, targetX, targetY)
      dapp.position = { x: targetX, y: targetY }
    }
  }
}
