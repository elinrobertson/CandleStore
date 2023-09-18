import { useState, useEffect } from "react";
import "./Home.css";

interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string
  }

async function fetchProducts() {
    try {
      console.log("Fetching products...");
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

  useEffect(() => {
    console.log("useEffect is running...")
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  console.log("Products:", products);
  return (
    <div className="main-content">
      {products.map((product) => (
        <div className="product-card">
          <div className="product-content">
            <div key={product.id}>
                <img src={product.images} alt={product.name} />
              <h1>{product.name}</h1>
              <h3>{product.price}</h3>
              <p>{product.description}</p>
              <button>Köp</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;