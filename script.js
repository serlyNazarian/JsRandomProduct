const ProductList = [
  {
    photo_url: "./imgs/product-1.jpg",
    name: "Coffee Maker",
    price: "$100",
    link: "Product-Page-3.html",
  },
  { photo_url: "./imgs/product-2.jpg", name: "Female Dress", price: "$40" },
  { photo_url: "./imgs/product-3.png", name: "ՍԵՂԱՆ", price: "$30" },
  { photo_url: "./imgs/product-4.jpg", name: "item", price: "$5" },
  { photo_url: "./imgs/product-5.png", name: "item", price: "$3" },
  {
    photo_url: "./imgs/208619fb0492cbc3.jpg",
    name: "Gaming Mouse",
    price: "$100",
  },
  {
    photo_url: "./imgs/20861a0d6eb641bd.jpg",
    name: "Gaming Mouse",
    price: "$20",
  },
  { photo_url: "./imgs/5db97bda1d50b.jpg", name: "Headphones", price: "$45" },
  { photo_url: "./imgs/2075fddceb45e6e5.jpg", name: "Camera", price: "$30" },
  { photo_url: "./imgs/2065cf7ce9654cfe.jpg", name: "Sushi", price: "$1" },
  { photo_url: "./imgs/5dcd433301e77.jpg", name: "Shoe", price: "$25" },
  {
    photo_url: "./imgs/325db006d6096be.jpg",
    name: "Acer Laptop",
    price: "$500",
  },
  { photo_url: "./imgs/206601d15b13db5e.jpeg", name: "Sushi", price: "$8.40" },
  { photo_url: "./imgs/2065cf7b9b7bfe9f.jpg", name: "item", price: "$8.60" },
  { photo_url: "./imgs/5ddbe4660f40b.jpg", name: "item", price: "$24.69$" },
  {
    photo_url: "./imgs/1587836376967.jpg",
    name: "Samsung Phone",
    price: "$1000",
  },
  { photo_url: "./imgs/83611ad5b5586ea.jpg", name: "Camera", price: "$500" },
  {
    photo_url: "./imgs/208629764df58fd8.jpg",
    name: "MotherBoard",
    price: "$50",
  },
  {
    photo_url: "./imgs/5ddbdcc6332ac.jpg",
    name: "Power Supply",
    price: "$14.60",
  },
  { photo_url: "./imgs/5ddbde8895996.jpg", name: "Watch", price: "$300" },
];

function getRandomItem(ProductList) {
  const randomIndex1 = Math.floor(Math.random() * ProductList.length);
  const randomIndex2 = Math.floor(Math.random() * ProductList.length);
  const randomIndex3 = Math.floor(Math.random() * ProductList.length);

  let item = ProductList[randomIndex1]
  let item2 = ProductList[randomIndex2]
  let item3 = ProductList[randomIndex3]

for(let i = 0; )

  let items = {
    item,
    item2,
    item3
  }
  return items;
}

const result = getRandomItem(ProductList);
console.log("result is :",result);
