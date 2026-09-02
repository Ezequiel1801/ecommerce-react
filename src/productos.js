const products = [
  // ==================== PROCESADORES ====================
  {
    id: 1,
    nombre: "AMD Ryzen 5 5600X",
    precio: 189000,
    categoria: "Procesadores",
    stock: 15,
    imagen: "./src/assets/procesadores/amd/r5-5600x.png"
  },
  {
    id: 2,
    nombre: "AMD Ryzen 7 5800X",
    precio: 265000,
    categoria: "Procesadores",
    stock: 10,
    imagen: "./src/assets/procesadores/amd/r7-5800x.png"
  },
  {
    id: 3,
    nombre: "AMD Ryzen 5 7600",
    precio: 245000,
    categoria: "Procesadores",
    stock: 12,
    imagen: "https://via.placeholder.com/300x200?text=Ryzen+5+7600"
  },
  {
    id: 4,
    nombre: "AMD Ryzen 7 7700",
    precio: 345000,
    categoria: "Procesadores",
    stock: 8,
    imagen: "https://via.placeholder.com/300x200?text=Ryzen+7+7700"
  },
  {
    id: 5,
    nombre: "AMD Ryzen 9 7900X",
    precio: 489000,
    categoria: "Procesadores",
    stock: 6,
    imagen: "https://via.placeholder.com/300x200?text=Ryzen+9+7900X"
  },
  {
    id: 6,
    nombre: "Intel Core i5-12400F",
    precio: 175000,
    categoria: "Procesadores",
    stock: 18,
    imagen: "https://via.placeholder.com/300x200?text=i5-12400F"
  },
  {
    id: 7,
    nombre: "Intel Core i5-13400F",
    precio: 228000,
    categoria: "Procesadores",
    stock: 14,
    imagen: "https://via.placeholder.com/300x200?text=i5-13400F"
  },
  {
    id: 8,
    nombre: "Intel Core i7-12700F",
    precio: 315000,
    categoria: "Procesadores",
    stock: 9,
    imagen: "https://via.placeholder.com/300x200?text=i7-12700F"
  },
  {
    id: 9,
    nombre: "Intel Core i7-13700F",
    precio: 398000,
    categoria: "Procesadores",
    stock: 7,
    imagen: "https://via.placeholder.com/300x200?text=i7-13700F"
  },
  {
    id: 10,
    nombre: "Intel Core i9-13900K",
    precio: 589000,
    categoria: "Procesadores",
    stock: 5,
    imagen: "https://via.placeholder.com/300x200?text=i9-13900K"
  },

  // ==================== MOTHERBOARDS ====================
  {
    id: 11,
    nombre: "Mother ASUS B550M-A WiFi (AMD)",
    precio: 142000,
    categoria: "Motherboards",
    stock: 20,
    imagen: "https://via.placeholder.com/300x200?text=ASUS+B550M"
  },
  {
    id: 12,
    nombre: "Mother Gigabyte B550 Aorus Elite (AMD)",
    precio: 178000,
    categoria: "Motherboards",
    stock: 11,
    imagen: "https://via.placeholder.com/300x200?text=B550+Aorus"
  },
  {
    id: 13,
    nombre: "Mother MSI B650 Tomahawk WiFi (AMD)",
    precio: 265000,
    categoria: "Motherboards",
    stock: 9,
    imagen: "https://via.placeholder.com/300x200?text=B650+Tomahawk"
  },
  {
    id: 14,
    nombre: "Mother ASUS ROG Strix B650-A (AMD)",
    precio: 312000,
    categoria: "Motherboards",
    stock: 7,
    imagen: "https://via.placeholder.com/300x200?text=ROG+B650"
  },
  {
    id: 15,
    nombre: "Mother Gigabyte X670 Aorus Elite (AMD)",
    precio: 389000,
    categoria: "Motherboards",
    stock: 5,
    imagen: "https://via.placeholder.com/300x200?text=X670+Aorus"
  },
  {
    id: 16,
    nombre: "Mother ASUS Prime B660M-A (Intel)",
    precio: 135000,
    categoria: "Motherboards",
    stock: 16,
    imagen: "https://via.placeholder.com/300x200?text=B660M-A"
  },
  {
    id: 17,
    nombre: "Mother MSI B760 Gaming Plus WiFi (Intel)",
    precio: 198000,
    categoria: "Motherboards",
    stock: 13,
    imagen: "https://via.placeholder.com/300x200?text=B760+Gaming"
  },
  {
    id: 18,
    nombre: "Mother Gigabyte Z790 Aorus Elite (Intel)",
    precio: 295000,
    categoria: "Motherboards",
    stock: 8,
    imagen: "https://via.placeholder.com/300x200?text=Z790+Aorus"
  },
  {
    id: 19,
    nombre: "Mother ASUS ROG Strix Z790-A (Intel)",
    precio: 365000,
    categoria: "Motherboards",
    stock: 6,
    imagen: "https://via.placeholder.com/300x200?text=ROG+Z790"
  },
  {
    id: 20,
    nombre: "Mother MSI Z790 Tomahawk WiFi (Intel)",
    precio: 342000,
    categoria: "Motherboards",
    stock: 7,
    imagen: "https://via.placeholder.com/300x200?text=Z790+Tomahawk"
  },

  // ==================== GRÁFICAS ====================
  {
    id: 21,
    nombre: "NVIDIA GeForce RTX 4060 8GB",
    precio: 389000,
    categoria: "Graficas",
    stock: 14,
    imagen: "https://via.placeholder.com/300x200?text=RTX+4060"
  },
  {
    id: 22,
    nombre: "NVIDIA GeForce RTX 4060 Ti 8GB",
    precio: 465000,
    categoria: "Graficas",
    stock: 10,
    imagen: "https://via.placeholder.com/300x200?text=RTX+4060+Ti"
  },
  {
    id: 23,
    nombre: "NVIDIA GeForce RTX 4070 12GB",
    precio: 689000,
    categoria: "Graficas",
    stock: 8,
    imagen: "https://via.placeholder.com/300x200?text=RTX+4070"
  },
  {
    id: 24,
    nombre: "NVIDIA GeForce RTX 4070 Super 12GB",
    precio: 795000,
    categoria: "Graficas",
    stock: 6,
    imagen: "https://via.placeholder.com/300x200?text=RTX+4070+Super"
  },
  {
    id: 25,
    nombre: "AMD Radeon RX 7600 8GB",
    precio: 355000,
    categoria: "Graficas",
    stock: 12,
    imagen: "https://via.placeholder.com/300x200?text=RX+7600"
  },
  {
    id: 26,
    nombre: "AMD Radeon RX 7700 XT 12GB",
    precio: 512000,
    categoria: "Graficas",
    stock: 9,
    imagen: "https://via.placeholder.com/300x200?text=RX+7700+XT"
  },
  {
    id: 27,
    nombre: "AMD Radeon RX 7800 XT 16GB",
    precio: 645000,
    categoria: "Graficas",
    stock: 7,
    imagen: "https://via.placeholder.com/300x200?text=RX+7800+XT"
  },
  {
    id: 28,
    nombre: "Intel Arc A750 8GB",
    precio: 245000,
    categoria: "Graficas",
    stock: 11,
    imagen: "https://via.placeholder.com/300x200?text=Arc+A750"
  },
  {
    id: 29,
    nombre: "Intel Arc A770 16GB",
    precio: 325000,
    categoria: "Graficas",
    stock: 8,
    imagen: "https://via.placeholder.com/300x200?text=Arc+A770"
  },
  {
    id: 30,
    nombre: "Intel Arc B580 12GB",
    precio: 298000,
    categoria: "Graficas",
    stock: 10,
    imagen: "https://via.placeholder.com/300x200?text=Arc+B580"
  },

  // ==================== MONITORES ====================
  {
    id: 31,
    nombre: "Monitor Gamer 24\" 1080p 144Hz",
    precio: 165000,
    categoria: "Monitores",
    stock: 22,
    imagen: "https://via.placeholder.com/300x200?text=24+1080p+144Hz"
  },
  {
    id: 32,
    nombre: "Monitor Gamer 27\" 1080p 165Hz",
    precio: 198000,
    categoria: "Monitores",
    stock: 18,
    imagen: "https://via.placeholder.com/300x200?text=27+1080p+165Hz"
  },
  {
    id: 33,
    nombre: "Monitor Gamer 27\" 1440p 144Hz",
    precio: 285000,
    categoria: "Monitores",
    stock: 13,
    imagen: "https://via.placeholder.com/300x200?text=27+1440p+144Hz"
  },
  {
    id: 34,
    nombre: "Monitor Gamer 27\" 1440p 165Hz",
    precio: 325000,
    categoria: "Monitores",
    stock: 11,
    imagen: "https://via.placeholder.com/300x200?text=27+1440p+165Hz"
  },
  {
    id: 35,
    nombre: "Monitor Gamer 27\" 1440p 180Hz",
    precio: 355000,
    categoria: "Monitores",
    stock: 9,
    imagen: "https://via.placeholder.com/300x200?text=27+1440p+180Hz"
  },
  {
    id: 36,
    nombre: "Monitor Gamer 32\" 1440p 165Hz",
    precio: 412000,
    categoria: "Monitores",
    stock: 7,
    imagen: "https://via.placeholder.com/300x200?text=32+1440p+165Hz"
  },
  {
    id: 37,
    nombre: "Monitor Gamer 27\" 4K 144Hz",
    precio: 589000,
    categoria: "Monitores",
    stock: 5,
    imagen: "https://via.placeholder.com/300x200?text=27+4K+144Hz"
  },
  {
    id: 38,
    nombre: "Monitor Gamer 32\" 4K 144Hz",
    precio: 685000,
    categoria: "Monitores",
    stock: 4,
    imagen: "https://via.placeholder.com/300x200?text=32+4K+144Hz"
  },
  {
    id: 39,
    nombre: "Monitor Gamer 34\" Ultrawide 1440p 144Hz",
    precio: 545000,
    categoria: "Monitores",
    stock: 6,
    imagen: "https://via.placeholder.com/300x200?text=34+Ultrawide"
  },
  {
    id: 40,
    nombre: "Monitor Gamer 27\" 1440p 240Hz",
    precio: 475000,
    categoria: "Monitores",
    stock: 8,
    imagen: "https://via.placeholder.com/300x200?text=27+1440p+240Hz"
  }
];

export default products;