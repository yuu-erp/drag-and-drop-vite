import { Dapp } from 'src/components/dapp/Dapp'

export class DappManager {
  private dapps: Dapp[]

  constructor() {
    this.dapps = []
  }

  addDapp(dapp: Dapp): void {
    this.dapps.push(dapp)
  }

  removeDapp(id: string): void {
    this.dapps = this.dapps.filter((dapp) => dapp.id !== id)
  }

  getDappById(id: string): Dapp | undefined {
    return this.dapps.find((dapp) => dapp.id === id)
  }

  getDappsByPage(pageIndex: number): Dapp[] {
    return this.dapps.filter((dapp) => dapp.pageIndex === pageIndex && !dapp.inDock)
  }

  getDockDapps(): Dapp[] {
    return this.dapps.filter((dapp) => dapp.inDock)
  }
}
