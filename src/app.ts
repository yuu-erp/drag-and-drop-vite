import Layout from './layouts'
import { $ } from './utils/domUtils'

export function initApp() {
  const rootElement = $('#root')
  if (!rootElement) {
    console.error('#root element not found in DOM')
    return // Dừng khởi tạo nếu #root không tồn tại
  }

  const layout = new Layout(rootElement)
  layout.render()
  console.log('layoutRoot: ', layout.variables.getAll())

  // Cleanup khi người dùng rời trang hoặc tải lại trang
  window.addEventListener('beforeunload', (event) => {
    // Dừng lại tại đây và kiểm tra các giá trị trong DevTools
    // debugger // Xóa dòng này nếu bạn không muốn dừng mã

    console.log('beforeunload event triggered')

    // Thiết lập event.returnValue để hiển thị thông báo xác nhận trên một số trình duyệt
    event.preventDefault()
    event.returnValue = ''

    // Nếu destroy() thực hiện các thao tác đồng bộ, gọi trực tiếp.
    // Nếu không, hãy đảm bảo các thao tác destroy là đồng bộ hoặc có callback để xử lý trước khi thoát
    layout.destroy()
  })
}
