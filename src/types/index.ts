declare global {
  interface Window {}
  interface DappPosition {
    x: number
    y: number
    width: number
    height: number
  }
  interface Dapp {
    id: number
    logo: string
    name: string
    page: number
    position: DappPosition
  }
}

export {}
