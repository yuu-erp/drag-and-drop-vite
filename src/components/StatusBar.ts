import { html } from 'lit-html'

export default class StatusBar {
  constructor() {}

  render() {
    return html`
      <span class="time">${new Date().toLocaleTimeString()}</span>
      <span class="network">📶</span>
      <span class="battery">🔋</span>
    `
  }
}
