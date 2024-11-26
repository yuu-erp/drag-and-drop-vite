import { html } from 'lit-html'
import { sharedVariables } from 'src/core/Variables'
import { runAnimation, toNumber } from 'src/utils'

type PostionProps = [number, number]
export class DApp {
  private variables = sharedVariables
  private gridWidth = 0
  private padding = 0
  private row = 0
  private prePadding = 0
  containerHeight = 0

  private iconWidth = this.variables.get('iconWidth')
  private columnNumber = this.variables.get('columnNumber')
  private raito = this.variables.get('raito')

  constructor() {
    this.gridWidth = this.iconWidth / this.raito
    this.padding = (this.gridWidth * (1 - this.raito)) / 2
    this.prePadding = (innerWidth - this.gridWidth * this.columnNumber) / 2
  }

  private getPosition(page: number, position: PostionProps) {
    const [x, y] = position
    const left = page * innerWidth + x * this.gridWidth + this.padding + this.prePadding
    const top = y * this.gridWidth + this.padding
    return [left, top]
  }

  findClosest(currentX: number, currentY: number): PostionProps {
    currentX = (currentX % innerWidth) - this.prePadding
    return [Math.round(currentX / this.gridWidth), Math.round(currentY / this.gridWidth)]
  }

  snapToXY(target: HTMLElement, page: number, position: PostionProps) {
    const [toX, toY] = this.getPosition(page, position)
    this.snapToPosition(target, toX, toY)
  }

  snapToPosition(target: HTMLElement, toX: number, toY: number) {
    const style = target.style
    const left = toNumber(style.left)
    const top = toNumber(style.top)

    runAnimation((progress: number) => {
      target.style.left = `${left + (toX - left) * progress}px`
      target.style.top = `${top + (toY - top) * progress}px`
    }, 100)
  }

  htmlDApp(page: number, position: PostionProps, id: string) {
    const [left, top] = this.getPosition(page, position)
    return html`<div
      id="${id}"
      class="dapp"
      data-type="dapp"
      style="top:${top}px; left:${left}px; width:${this.iconWidth}px; height:${this.iconWidth}px"
    ></div>`
  }
}
