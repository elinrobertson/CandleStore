import { useState, useEffect } from "react";
import "./Home.css";

interface IPrice {
  id: string
  unit_amount: number
}

export interface IProduct {
    id: string
    name: string
    description: string
    images: string
    default_price: IPrice
  }

  export interface ICart {
    id: string;
    quantity: number;
  }

async function fetchProducts() {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      const productsWithImages = data.data.map((product: IProduct) => ({
        ...product,
        image: product.images
      }));
      return productsWithImages;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }


function Home() {

const [products, setProducts] = useState<IProduct[]>([]);
const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, []);

  const addToCart = (product: IProduct) => {

    const existingCartItem = cart.find((item) => item.id === product.default_price.id);

    if (existingCartItem) {
      // Om produkten redan finns, öka bara antalet
      const updatedCart = cart.map((item) =>
        item.id === product.default_price.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    } else {
      // Om produkten inte finns, lägg till den i kundvagnen med en startkvantitet på 1
      setCart([...cart, { id: product.default_price.id, quantity: 1 }]);
      localStorage.setItem("cart", JSON.stringify([...cart, { id: product.default_price.id, quantity: 1 }]))
    }
    console.log("Cart updated:", cart);
  };

  return (
    <div className="main-content">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.images} alt={product.name} />
          <h1>{product.name}</h1>
          <h3>{product.default_price.unit_amount/100} kr</h3>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Köp</button>
        </div>
      ))}
    </div>
  );
}

export default Home;