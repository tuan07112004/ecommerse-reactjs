// NavLink: dùng để chuyển trang và tự thêm class active khi trang đó đang được chọn
// Link: dùng để chuyển trang bình thường, không reload lại website
import { Link, NavLink } from 'react-router-dom'

// Import file CSS để trang trí Header
import './Header.css'

// Mảng chứa danh sách menu trong Header
const navItems = [
  // to: đường dẫn
  // label: tên hiển thị trên menu
  // end: true giúp trang chủ chỉ active khi đúng đường dẫn "/"
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/cua-hang', label: 'Cửa hàng' },
  { to: '/gio-hang', label: 'Giỏ hàng' },
]

// Tạo component Header
export default function Header() {
  return (
    // Thẻ header bao toàn bộ phần đầu trang
    <header className="site-header">
      <div className="header-inner">

        {/* Logo, bấm vào sẽ quay về trang chủ */}
        <Link to="/" className="logo">
          <span className="logo-mark">C</span>
          <span>
            <strong>Casio Shop</strong>
          </span>
        </Link>

        {/* Menu điều hướng */}
        <nav className="header-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}

              // Nếu link đang được chọn thì thêm class active
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

     
        <div className="header-actions">

          {/* Ô tìm kiếm, hiện tại đang khóa */}
          <input
            type="search"
            placeholder="Tìm kiếm sản phẩm"
            disabled
            title="Bước sau mới bật tìm kiếm"
            className="header-input"
          />

          {/* Icon giỏ hàng, bấm vào chuyển đến trang giỏ hàng */}
          <Link to="/gio-hang" className="cart-link" aria-label="Giỏ hàng">
            🛒
          </Link>
        </div>
      </div>
    </header>
  )
}