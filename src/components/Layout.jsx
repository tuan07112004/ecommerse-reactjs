
// link: bấm chuyển trang nhưng không reload web
// outlet: để hiển thị các component con

import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
   <div className="layout">
 <Header />

      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}