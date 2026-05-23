import { Link } from 'react-router-dom'
import {
  formatPrice,
  getDiscountPercent,
  getProductsByCategory,
} from '../../data/products'
import './ProductShowcase.css'

function SectionHeading({ subtitle, title, isFirst }) {
  return (
    <div className={`product-section-heading ${isFirst ? 'first' : ''}`}>
      {subtitle && <div className="product-section-subtitle">{subtitle}</div>}
      <div className="product-section-title">{title}</div>
    </div>
  )
}

function ProductListCard({ product }) {
  const discount = getDiscountPercent(product)

  return (
    <Link to={`/san-pham/${product.id}`} className="product-list-item">
      <div className="product-list-image-wrap">
        <img
          className="product-list-image"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="product-price-box">
        <div className="product-price-header">Giá dành riêng bạn mới</div>
        <div className="product-price-body">
          <div className="product-new-price">{formatPrice(product.price)}</div>
          {product.originalPrice > product.price && (
            <>
              <div className="product-old-price">
                {formatPrice(product.originalPrice)}
              </div>
              {discount > 0 && (
                <div className="product-discount">-{discount}%</div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="product-stock">Còn {product.stock} sản phẩm</div>
      <div className="product-caption">{product.name}</div>
    </Link>
  )
}

function ProductGrid({ items }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <ProductListCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default function ProductShowcase() {
  const calculators = getProductsByCategory('calculator')
  const accessories = getProductsByCategory('accessory')
  const bags = getProductsByCategory('bag')

  return (
    <div className="product-showcase">
      <SectionHeading
        subtitle="SẢN PHẨM NỔI BẬT"
        title="MÁY TÍNH BÁN CHẠY"
        isFirst
      />
      <ProductGrid items={calculators} />

      <SectionHeading title="PHỤ KIỆN MÁY TÍNH" />
      <ProductGrid items={accessories} />

      <SectionHeading title="BALO HỌC SINH" />
      <ProductGrid items={bags} />
    </div>
  )
}
