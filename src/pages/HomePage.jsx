import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import { products, formatPrice } from '../data/products'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-actions">
            <Button content="Xem sản phẩm" to="/cua-hang" />
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Sản phẩm nổi bật</h2>
        <ul className="home-product-list">
          {products.slice(0, 3).map((p) => (
            <li key={p.id}>
              {p.name} — {formatPrice(p.price)}
            </li>
          ))}
        </ul>
        <Link to="/cua-hang" className="home-link-more">
          → Xem tất cả cửa hàng
        </Link>
      </section>
    </div>
  )
}
