import {Link} from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
     <div>
<h3>Casio Shop</h3>
 <p>Chuyên máy tính casio đã qua sử dụng - đsung mô tả, giao hàng toàn quốc </p>
      </div>
      </div>


      <div>
        <h4>Danh mục</h4>
        <ul>
          <li><Link to="/cua-hang">Máy tính casio</Link></li>
          <li><Link to="/">Máy tính casio</Link></li>
        </ul>
      </div>

      <div>
          <h4>Liên hệ</h4>
          <ul>
            <li>Zalo: 0988480655</li>
            <li>Giờ làm việc: 8h – 22h</li>
          </ul>
        </div>
        
        <p className="footer-copy">© {new Date().getFullYear()} — Đồ án Casio Shop</p>
        </footer>

  )
}