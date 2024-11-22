import { DeviceType } from 'src/layouts'

declare global {
  interface Window {
    deviceType: DeviceType
  }
  interface DappPosition {
    x: number
    y: number
    width: number
    height: number
  }
  interface Dapp {
    abiData: any[]
    author: string
    binData: string
    bundleId: string
    constructorData: string
    createTime: number
    groupId: number
    hash: string
    id: number
    isAutoScript: number
    isDefault: number
    isFavorite: number
    isFullScreen: number
    isHidden: number
    isLocked: number
    isUserApp: number
    lastTimeModified: number
    lastTimeOpen: number
    logo: string
    name: string
    orientation: string
    page: number
    parent: string
    pathStorage: string
    position: DappPosition
    profileId: number
    scriptStr: string
    sign: string
    size: number
    statusBar: string
    type: number
    url: string
    urlPack: string
    urlScript: string
    version: string
    isTaskbar: number
  }
}

export {}
