import { Dapp } from 'src/components/dapp/Dapp'

export class GridManager {
  rows: number
  cols: number
  grid: (Dapp | null)[][]

  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols
    this.grid = Array.from({ length: rows }, () => Array(cols).fill(null))
  }

  isValidPosition(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.cols && y < this.rows
  }

  setDapp(dapp: Dapp, x: number, y: number): void {
    if (this.isValidPosition(x, y)) {
      this.grid[y][x] = dapp
    }
  }

  removeDapp(x: number, y: number): void {
    if (this.isValidPosition(x, y)) {
      this.grid[y][x] = null
    }
  }

  getFirstEmptyPosition(): { x: number; y: number } | null {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.grid[y][x] === null) {
          return { x, y }
        }
      }
    }
    return null
  }
}
