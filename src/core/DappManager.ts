import DappElement from 'src/components/dapp/DappElement'
export default class DappManager {
  dapp: DappElement
  constructor(dataDapp: Dapp) {
    this.dapp = new DappElement()
  }

  removeDapp() {}

  updateDapp() {}
}
