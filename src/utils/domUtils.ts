export function $(selector: string): HTMLElement | null {
  return document.querySelector(selector)
}

export function addClass(el: HTMLElement, className: string): void {
  el.classList.add(className)
}
