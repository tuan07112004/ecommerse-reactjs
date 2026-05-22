import { products, formatPrice } from '../data/products'

export default function ShopPage() {
  return (
    <div>
      <h1>Cửa hàng</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — {formatPrice(p.price)}
          </li>
        ))}
      </ul>
    </div>
  )
}