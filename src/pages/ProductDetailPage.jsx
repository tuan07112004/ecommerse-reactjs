import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  formatCount,
  formatPrice,
  getDiscountPercent,
  getProductById,
} from '../data/products'
import './ProductDetailPage.css'

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const stars = '★'.repeat(full) + '☆'.repeat(5 - full)
  return <span className="product-detail-stars">{stars}</span>
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = getProductById(id)

  const images = product?.images?.length ? product.images : product ? [product.image] : []
  const [activeImage, setActiveImage] = useState(0)
  const [variantId, setVariantId] = useState(null)
  const [condition, setCondition] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (!product) return
    setActiveImage(0)
    setVariantId(product.variants?.[0]?.id ?? null)
    setCondition(product.conditions?.[0] ?? product.condition ?? '')
    setQuantity(1)
    setLiked(false)
  }, [id, product])

  if (!product) {
    return (
      <div className="product-detail-not-found">
        <p>Không tìm thấy sản phẩm.</p>
        <Link to="/">Về trang chủ</Link>
      </div>
    )
  }

  const discount = getDiscountPercent(product)
  const title = product.detailTitle || product.name
  const variants = product.variants || []
  const conditions = product.conditions || (product.condition ? [product.condition] : [])
  const vouchers = product.vouchers || []

  const decQty = () => setQuantity((q) => Math.max(1, q - 1))
  const incQty = () => setQuantity((q) => Math.min(product.stock, q + 1))

  return (
    <div className="product-detail">
      <div className="product-detail-grid">
        <aside className="product-detail-gallery">
          <img
            className="product-detail-main-image"
            src={images[activeImage]}
            alt={product.name}
          />
          <div className="product-detail-thumbs">
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                className={`product-detail-thumb ${i === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
          <div className="product-detail-share">
            <span>Chia sẻ:</span>
            <span>FB</span>
            <span>Messenger</span>
            <button
              type="button"
              className="product-detail-like"
              onClick={() => setLiked(!liked)}
            >
              {liked ? '♥' : '♡'} Đã thích (1,2k)
            </button>
          </div>
        </aside>

        <div className="product-detail-info">
          <h1 className="product-detail-title">
            <span className="product-detail-badge">Yêu thích</span>
            {title}
          </h1>

          <div className="product-detail-meta">
            <div className="product-detail-rating">
              <b>{product.rating}</b>
              <StarRating rating={product.rating} />
            </div>
            <a href="#reviews">{formatCount(product.reviews ?? 0)} Đánh Giá</a>
            <span>Đã Bán {formatCount(product.sold ?? 0)}+</span>
            <span className="product-detail-report">Tố cáo</span>
          </div>

          <div className="product-detail-price-block">
            <span className="product-detail-price-label">Giá dành riêng bạn mới</span>
            <span className="product-detail-price-current">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="product-detail-price-old">
                  {formatPrice(product.originalPrice)}
                </span>
                {discount > 0 && (
                  <span className="product-detail-price-discount">-{discount}%</span>
                )}
              </>
            )}
          </div>

          {vouchers.length > 0 && (
            <div className="product-detail-row">
              <span className="product-detail-row-label">Mã Giảm Giá Của Shop</span>
              <div className="product-detail-vouchers">
                {vouchers.map((v) => (
                  <span key={v} className="product-detail-voucher">
                    {v}
                  </span>
                ))}
                <span className="product-detail-voucher-more">Xem tất cả ▾</span>
              </div>
            </div>
          )}

          <div className="product-detail-row">
            <span className="product-detail-row-label">Vận Chuyển</span>
            <div className="product-detail-shipping">
              <img
                className="product-detail-shipping-icon"
                src="/svgs/truckIcon.svg"
                alt=""
              />
              <div>
                <strong>Nhận trong 4 Giờ</strong>
                <p>Mua trước 18:00 · Phí ship 0đ</p>
                <p>Trễ 1 ngày + 20.000đ Voucher</p>
              </div>
            </div>
          </div>

          {variants.length > 0 && (
            <div className="product-detail-row">
              <span className="product-detail-row-label">
                {product.category === 'bag' ? 'Loại Balo' : 'Loại Máy'}
              </span>
              <div className="product-detail-options">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    className={`product-detail-option ${variantId === v.id ? 'active' : ''}`}
                    onClick={() => setVariantId(v.id)}
                  >
                    {v.thumb && <img src={v.thumb} alt="" />}
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {conditions.length > 0 && product.category === 'calculator' && (
            <div className="product-detail-row">
              <span className="product-detail-row-label">Độ Mới</span>
              <div className="product-detail-options">
                {conditions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`product-detail-option product-detail-option--text ${condition === c ? 'active' : ''}`}
                    onClick={() => setCondition(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="product-detail-row">
            <span className="product-detail-row-label">Số Lượng</span>
            <div className="product-detail-quantity">
              <div className="product-detail-qty-control">
                <button
                  type="button"
                  className="product-detail-qty-btn"
                  onClick={decQty}
                  disabled={quantity <= 1}
                  aria-label="Giảm"
                >
                  −
                </button>
                <span className="product-detail-qty-value">{quantity}</span>
                <button
                  type="button"
                  className="product-detail-qty-btn"
                  onClick={incQty}
                  disabled={quantity >= product.stock}
                  aria-label="Tăng"
                >
                  +
                </button>
              </div>
              <span className="product-detail-stock-text">
                {product.stock > 0 ? 'CÒN HÀNG' : 'HẾT HÀNG'}
              </span>
            </div>
          </div>

          <div className="product-detail-actions">
            <button type="button" className="product-detail-btn product-detail-btn--cart">
              🛒 Thêm Vào Giỏ Hàng
            </button>
            <button type="button" className="product-detail-btn product-detail-btn--buy">
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
