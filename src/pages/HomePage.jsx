import Button from '../components/Button/Button'
import Info from '../components/Info/Info'
import ProductShowcase from '../components/ProductShowcase/ProductShowcase'
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

      <Info />

      <ProductShowcase />
    </div>
  )
}
