import { html } from 'lit-html'
import './dapp.css'
export default class DappElement {
  constructor() {}

  excute(dapp: Dapp) {
    return html` <div>${dapp.name}</div> `
  }
}
