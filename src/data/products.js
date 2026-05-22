export const products = [
    {
        id: 'casio-580vnx',
        name: 'Máy tính Casio 580VNX',
        category: 'calculator',
        price: 253333,
        originalPrice: 329000,
        condition: '70–99%',
        rating: 4.9,
        image: '/products/casio-580vnx.jpg',
      },
      {
        id: 'casio-880btg',
        name: 'Máy tính Casio 880BTG',
        category: 'calculator',
        price: 270000,
        originalPrice: 330000,
        condition: '80–99%',
        rating: 4.9,
        image: '/products/casio-880btg.jpg',
      },
      {
        id: 'casio-570vn-plus',
        name: 'Máy tính Casio 570VN Plus',
        category: 'calculator',
        price: 120000,
        originalPrice: 180000,
        condition: '80–99%',
        rating: 5.0,
        image: '/products/casio-570vn-plus.jpg',
      },
  
      {
        id: 'tua-vit-pin',
        name: 'Tua vít + Pin',
        category: 'accessory',
        price: 1000,
        originalPrice: 10000,
        condition: 'Mới',
        rating: 4.9,
        image: '/products/tua-vit-pin.jpg',
      },
      {
        id: 'kinh-cuong-luc',
        name: 'Kính cường lực',
        category: 'accessory',
        price: 1000,
        originalPrice: 12000,
        condition: 'Mới',
        rating: 4.9,
        image: '/products/kinh-cuong-luc.jpg',
      },
      {
        id: 'bao-da',
        name: 'Bao da Casio',
        category: 'accessory',
        price: 60000,
        originalPrice: 120000,
        condition: 'Mới',
        rating: 5.0,
        image: '/products/bao-da.jpg',
      },
      {
        id: 'balo-cap-1',
        name: 'Balo cấp 1',
        category: 'bag',
        price: 99000,
        originalPrice: 159000,
        condition: 'Mới',
        rating: 4.9,
        image: '/products/balo-cap-1.jpg',
      },
      {
        id: 'balo-cap-2',
        name: 'Balo cấp 2',
        category: 'bag',
        price: 139000,
        originalPrice: 199000,
        condition: 'Mới',
        rating: 4.9,
        image: '/products/balo-cap-2.jpg',
      },
      {
        id: 'balo-cap-3',
        name: 'Balo cấp 3',
        category: 'bag',
        price: 156800,
        originalPrice: 249000,
        condition: 'Mới',
        rating: 4.9,
        image: '/products/balo-cap-3.jpg',
      },
  ]
  
  export function formatPrice(value) {
    return new Intl.NumberFormat('vi-VN').format(value) + 'đ'
  }
  
  export function getProductById(id) {
    return products.find((p) => p.id === id)
  }