export class Dapp {
  id: string
  name: string
  icon: string
  position: { x: number; y: number }
  pageIndex: number
  inDock: boolean

  constructor(
    id: string,
    name: string,
    icon: string,
    position: { x: number; y: number },
    pageIndex: number,
    inDock = false
  ) {
    this.id = id
    this.name = name
    this.icon = icon
    this.position = position
    this.pageIndex = pageIndex
    this.inDock = inDock
  }
}
