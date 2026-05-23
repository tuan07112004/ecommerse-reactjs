export const products = [
  {
    id: 'casio-580vnx',
    name: 'Máy tính Casio 580VNX',
    detailTitle:
      'Máy tính CASIO 580VNX, 880BTG cũ (độ mới 80–99%) CHÍNH HÃNG',
    category: 'calculator',
    price: 253333,
    originalPrice: 333333,
    stock: 12,
    condition: '70–99%',
    rating: 4.9,
    sold: 7000,
    reviews: 2200,
    image: '/images/580vnx.png',
    images: [
      '/images/580vnx.png',
      '/images/880btg.png',
      '/images/570vn.png',
      '/images/580vnx.png',
      '/images/banner.png',
    ],
    variants: [
      { id: '580-trang', label: 'Casio 580VNX Trắng', thumb: '/images/580vnx.png' },
      { id: '580-den', label: 'Casio 580VNX Đen', thumb: '/images/580vnx.png' },
      { id: '580-hong', label: 'Casio 580VNX Hồng', thumb: '/images/580vnx.png' },
      { id: '880-den', label: 'Casio 880BTG Đen', thumb: '/images/880btg.png' },
      { id: '880-trang', label: 'Casio 880BTG Trắng', thumb: '/images/880btg.png' },
      { id: '880-hong', label: 'Casio 880BTG Hồng', thumb: '/images/880btg.png' },
    ],
    conditions: [
      'LIKE NEW (99,69%)',
      '95-99%',
      '90-95%',
      '85-90%',
      '80-85%',
      '75-80%',
      '70-75%',
      '65-70%',
      '60-65%',
      '55-60%',
      '50-55%',
      '45-50%',
      '40-45%',
      '35-40%',
      '30-35%',
      '25-30%',
      '20-25%',
      '15-20%',
      '10-15%',
      '5-10%',
      '0-5%',
    ],
    vouchers: ['Giảm 10kđ', 'Giảm 20kđ', 'Giảm 30kđ', 'Giảm 40kđ', 'Giảm 50kđ'],
  },
  {
    id: 'casio-880btg',
    name: 'Máy tính Casio 880BTG',
    detailTitle: 'Máy tính CASIO 880BTG cũ (độ mới 80–99%) CHÍNH HÃNG',
    category: 'calculator',
    price: 270000,
    originalPrice: 330000,
    stock: 8,
    condition: '80–99%',
    rating: 4.9,
    sold: 5200,
    reviews: 1800,
    image: '/images/880btg.png',
    images: ['/images/880btg.png', '/images/580vnx.png', '/images/570vn.png'],
    variants: [
      { id: '880-den', label: 'Casio 880BTG Đen', thumb: '/images/880btg.png' },
      { id: '880-trang', label: 'Casio 880BTG Trắng', thumb: '/images/880btg.png' },
      { id: '880-hong', label: 'Casio 880BTG Hồng', thumb: '/images/880btg.png' },
    ],
    conditions: ['95-99%', '90-95%', '85-90%', '80-85%', '75-80%', '70-75%'],
    vouchers: ['Giảm 10kđ', 'Giảm 20kđ', 'Giảm 30kđ'],
  },
  {
    id: 'casio-570vn-plus',
    name: 'Máy tính Casio 570VN Plus',
    detailTitle: 'Máy tính CASIO 570VN Plus cũ CHÍNH HÃNG',
    category: 'calculator',
    price: 120000,
    originalPrice: 180000,
    stock: 15,
    condition: '80–99%',
    rating: 5.0,
    sold: 3100,
    reviews: 890,
    image: '/images/570vn.png',
    images: ['/images/570vn.png', '/images/580vnx.png'],
    variants: [
      { id: '570-den', label: 'Casio 570VN Đen', thumb: '/images/570vn.png' },
      { id: '570-xanh', label: 'Casio 570VN Xanh', thumb: '/images/570vn.png' },
    ],
    conditions: ['95-99%', '90-95%', '85-90%', '80-85%'],
    vouchers: ['Giảm 10kđ', 'Giảm 15kđ'],
  },
  {
    id: 'tua-vit-pin',
    name: 'Tua vít + Pin',
    detailTitle: 'Tua vít + Pin thay cho máy tính Casio — Hàng mới',
    category: 'accessory',
    price: 1000,
    originalPrice: 10000,
    stock: 120,
    condition: 'Mới',
    rating: 4.9,
    sold: 1500,
    reviews: 420,
    image: '/images/tovit.png',
    images: ['/images/tovit.png'],
    vouchers: ['Giảm 5kđ'],
  },
  {
    id: 'kinh-cuong-luc',
    name: 'Kính cường lực',
    detailTitle: 'Kính cường lực bảo vệ màn hình máy tính Casio',
    category: 'accessory',
    price: 1000,
    originalPrice: 12000,
    stock: 85,
    condition: 'Mới',
    rating: 4.9,
    sold: 980,
    reviews: 310,
    image: '/images/cuongluc.png',
    images: ['/images/cuongluc.png'],
    vouchers: ['Giảm 5kđ', 'Giảm 10kđ'],
  },
  {
    id: 'bao-da',
    name: 'Bao da Casio',
    detailTitle: 'Bao da bảo vệ máy tính Casio — Chính hãng Lytus',
    category: 'accessory',
    price: 60000,
    originalPrice: 120000,
    stock: 24,
    condition: 'Mới',
    rating: 5.0,
    sold: 640,
    reviews: 156,
    image: '/images/baoda.png',
    images: ['/images/baoda.png'],
    vouchers: ['Giảm 10kđ', 'Giảm 20kđ'],
  },
  {
    id: 'balo-cap-1',
    name: 'Balo cấp 1',
    detailTitle: 'Balo học sinh cấp 1 — Thiết kế gọn, bền',
    category: 'bag',
    price: 99000,
    originalPrice: 159000,
    stock: 18,
    condition: 'Mới',
    rating: 4.9,
    sold: 420,
    reviews: 88,
    image: '/images/balo.png',
    images: ['/images/balo.png', '/images/baloc2.png'],
    variants: [
      { id: 'balo1-xanh', label: 'Balo cấp 1 Xanh', thumb: '/images/balo.png' },
      { id: 'balo1-hong', label: 'Balo cấp 1 Hồng', thumb: '/images/balo.png' },
    ],
    vouchers: ['Giảm 15kđ'],
  },
  {
    id: 'balo-cap-2',
    name: 'Balo cấp 2',
    detailTitle: 'Balo học sinh cấp 2 — Nhiều ngăn tiện lợi',
    category: 'bag',
    price: 139000,
    originalPrice: 199000,
    stock: 10,
    condition: 'Mới',
    rating: 4.9,
    sold: 280,
    reviews: 62,
    image: '/images/baloc2.png',
    images: ['/images/baloc2.png', '/images/balo.png'],
    variants: [
      { id: 'balo2-den', label: 'Balo cấp 2 Đen', thumb: '/images/baloc2.png' },
      { id: 'balo2-xam', label: 'Balo cấp 2 Xám', thumb: '/images/baloc2.png' },
    ],
    vouchers: ['Giảm 20kđ'],
  },
  {
    id: 'balo-cap-3',
    name: 'Balo cấp 3',
    detailTitle: 'Balo học sinh cấp 3 — Chống nước nhẹ',
    category: 'bag',
    price: 156800,
    originalPrice: 249000,
    stock: 6,
    condition: 'Mới',
    rating: 4.9,
    sold: 190,
    reviews: 41,
    image: '/images/cap.png',
    images: ['/images/cap.png', '/images/baloc2.png'],
    variants: [
      { id: 'balo3-xanh', label: 'Balo cấp 3 Xanh', thumb: '/images/cap.png' },
      { id: 'balo3-den', label: 'Balo cấp 3 Đen', thumb: '/images/cap.png' },
    ],
    vouchers: ['Giảm 25kđ', 'Giảm 40kđ'],
  },
]

export function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN').format(value) + 'đ'
}

export function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
  return String(n)
}

export function getDiscountPercent(product) {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0
  return Math.round((1 - product.price / product.originalPrice) * 100)
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category)
}

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function searchProducts(query, limit = 6) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    )
    .slice(0, limit)
}
