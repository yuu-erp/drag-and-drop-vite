import { SystemCore } from 'src/service/SystemCore'

export class CoreNative {
  core: SystemCore

  constructor() {
    this.core = new SystemCore()
  }

  async getAllDapp() {
    const res = await this.core.send('getDataDApp')
    console.log('all', res)
  }
}
