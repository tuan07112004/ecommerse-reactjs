import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { formatPrice, searchProducts } from '../data/products'
import './Header.css'

const navItems = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/cua-hang', label: 'Cửa hàng' },
  { to: '/gio-hang', label: 'Giỏ hàng' },
]

export default function Header() {
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const searchRef = useRef(null)
  const navigate = useNavigate()
  const results = searchProducts(query, 6)

  useEffect(() => {
    const onDocClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/cua-hang?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setMenuOpen(false)
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src="/svgs/logo.png" alt="Casio Shop" className="logo-img" />
        </Link>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions" ref={searchRef}>
          <form className="header-search-form" onSubmit={onSearchSubmit}>
            <span className="search-icon" aria-hidden />
            <input
              type="search"
              className="header-search-input"
              placeholder="Tìm máy Casio, phụ kiện..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setSearchOpen(true)
              }}
              onFocus={() => setSearchOpen(true)}
              aria-label="Tìm kiếm sản phẩm"
            />
            <button type="submit" className="header-search-btn">
              Tìm
            </button>

            {searchOpen && query.trim() && (
              <div className="search-dropdown">
                <p className="search-dropdown-title">
                  Kết quả cho &quot;{query}&quot;
                </p>
                {results.length === 0 ? (
                  <p className="search-empty">Không tìm thấy sản phẩm.</p>
                ) : (
                  <ul className="search-results">
                    {results.map((p) => (
                      <li key={p.id}>
                        <Link
                          to={`/cua-hang?q=${encodeURIComponent(p.name)}`}
                          className="search-result-item"
                          onClick={() => {
                            setSearchOpen(false)
                            setQuery('')
                          }}
                        >
                          <span className="search-result-name">{p.name}</span>
                          <span className="search-result-price">
                            {formatPrice(p.price)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  to={`/cua-hang?q=${encodeURIComponent(query)}`}
                  className="search-see-more"
                  onClick={() => {
                    setSearchOpen(false)
                    setMenuOpen(false)
                  }}
                >
                  Xem thêm sản phẩm &quot;{query}&quot;
                </Link>
              </div>
            )}
          </form>

          <Link to="/gio-hang" className="cart-link" aria-label="Giỏ hàng">
            <img src="/svgs/cartIcon.svg" alt="" width={24} height={24} />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Mở menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
