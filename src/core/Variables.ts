import { APP_VARIABLE_LOCAL } from '../constants'

export class Variables<T = any> {
  private variables: Map<string, { value: T; persistent: boolean }>

  constructor() {
    this.variables = new Map()
    this._loadFromStorage()
  }

  set(key: string, value: T, persistent: boolean = false): void {
    this.variables.set(key, { value, persistent })
    if (persistent) {
      this._saveToStorage()
    }
  }

  get(key: string): T | null {
    return this.variables.get(key)?.value ?? null
  }

  remove(key: string): void {
    if (this.variables.has(key)) {
      const isPersistent = this.variables.get(key)?.persistent || false
      this.variables.delete(key)

      if (isPersistent) {
        this._saveToStorage()
      }
    }
  }

  clear(): void {
    this.variables.clear()
    this._clearStorage()
  }

  getAll(): Record<string, T> {
    const result: Record<string, T> = {}
    this.variables.forEach((data, key) => {
      result[key] = data.value
    })
    return result
  }

  getPersistentVariables(): Record<string, T> {
    const result: Record<string, T> = {}
    this.variables.forEach((data, key) => {
      if (data.persistent) {
        result[key] = data.value
      }
    })
    return result
  }

  private _saveToStorage(): void {
    const persistentData: Record<string, T> = {}
    this.variables.forEach((data, key) => {
      if (data.persistent) {
        persistentData[key] = data.value
      }
    })
    localStorage.setItem(APP_VARIABLE_LOCAL, JSON.stringify(persistentData))
  }

  private _loadFromStorage(): void {
    const savedData = localStorage.getItem(APP_VARIABLE_LOCAL)
    if (savedData) {
      const parsedData = JSON.parse(savedData) as Record<string, T>
      Object.keys(parsedData).forEach((key) => {
        this.variables.set(key, { value: parsedData[key], persistent: true })
      })
    }
  }

  private _clearStorage(): void {
    localStorage.removeItem(APP_VARIABLE_LOCAL)
  }
}

export const sharedVariables = new Variables()
