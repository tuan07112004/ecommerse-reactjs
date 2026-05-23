import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import ProductDetailPage from './pages/ProductDetailPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cua-hang" element={<ShopPage />} />
          <Route path="/gio-hang" element={<CartPage />} />
          <Route path="/san-pham/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App




// browser router: để định nghĩa các route cho app

