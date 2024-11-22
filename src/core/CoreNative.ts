import { SystemCore } from 'src/service/SystemCore'

export class CoreNative {
  core: SystemCore

  constructor() {
    this.core = new SystemCore()
  }

  async getAllDapp() {
    return await this.core.send('getDataDApp')
  }
}
