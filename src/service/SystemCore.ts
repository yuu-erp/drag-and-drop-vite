export class SystemCore {
  private receiveData: Record<string, Function> = {}
  private listenData: Record<string, Function[]> = {}
  private pendingCommands = new Set()

  constructor() {
    this.init()
  }

  removeEventListener = (command: string, fn: Function) => {
    if (this.listenData[command]) {
      this.listenData[command] = this.listenData[command].filter((f) => f !== fn)
    }
  }

  removeAllEventListeners = (command: string) => {
    delete this.listenData[command]
  }

  on = async (command: string, fn: Function) => {
    if (!this.listenData[command]) {
      this.listenData[command] = []
    }
    this.listenData[command].push(fn)
  }

  send = async (command: string, value = {}) => {
    if (this.pendingCommands.has(command)) return { data: `Command "${command}" is already pending.` }
    console.log('Send data: ', command, value)
    this.pendingCommands.add(command)
    //@ts-ignore
    window.webkit?.messageHandlers?.callbackHandler?.postMessage(
      JSON.stringify({
        command,
        value
      })
    )

    const response: any = await new Promise((resolve, reject) => {
      try {
        this.receiveData[command] = resolve
      } catch (error) {
        reject(error)
      } finally {
        this.pendingCommands.delete(command)
      }
    })
    if (!response?.success) throw response?.message || 'Native error!'
    return response.data
  }

  private init = () => {
    window.addEventListener('message', (e) => {
      console.log('duy receive ---> ', e.data)
      const { data, command, isSocket, type } = e.data

      if (type) return

      if (!isSocket) {
        const cb = this.receiveData[command]

        if (typeof cb === 'function') {
          //listen event have 1 level data nested
          cb(data)
          this.pendingCommands.delete(command)
          delete this.receiveData[command]
        }
        return
      }

      this.listenData[command]?.forEach((cb) => cb(data.data))
    })
  }
}
