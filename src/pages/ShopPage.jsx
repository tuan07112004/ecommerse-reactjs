import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { formatPrice, products, searchProducts } from '../data/products'

export default function ShopPage() {
  const [params] = useSearchParams()
  const query = params.get('q') || ''

  const list = useMemo(() => {
    if (query.trim()) return searchProducts(query, 50)
    return products
  }, [query])

  return (
    <div className="shop-page">
      <h1>Cửa hàng</h1>
      {query && (
        <p className="shop-search-hint">
          Kết quả tìm &quot;{query}&quot; — {list.length} sản phẩm
        </p>
      )}
      {list.length === 0 ? (
        <p>Không có sản phẩm phù hợp.</p>
      ) : (
        <ul>
          {list.map((p) => (
            <li key={p.id}>
              {p.name} — {formatPrice(p.price)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
