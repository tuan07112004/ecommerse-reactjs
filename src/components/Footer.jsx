import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3 className="footer-title">Lytus</h3>
          <p>
            Chuyên máy tính Casio đã qua sử dụng — mô tả trung thực, kiểm tra kỹ trước
            khi giao. Giao hàng toàn quốc.
          </p>
        </div>

        <div className="footer-col">
          <h4>Danh mục</h4>
          <ul>
            <li>
              <Link to="/cua-hang">Cửa hàng</Link>
            </li>
            <li>
              <Link to="/cua-hang?category=calculator">Máy tính Casio cũ</Link>
            </li>
            <li>
              <Link to="/gio-hang">Giỏ hàng</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <a href="https://zalo.me/0988480655" target="_blank" rel="noreferrer">
                Zalo: 0988 480 655
              </a>
            </li>
            <li>Giờ làm việc: 8:00 – 22:00</li>
            <li>Giao hàng toàn quốc</li>
          </ul>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Lytus — Shop máy tính Casio cũ uy tín
      </p>
    </footer>
  )
}
