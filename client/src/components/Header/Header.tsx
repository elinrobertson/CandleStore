import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import "./Header.css";
import { useEffect, useState } from 'react';
import { ICart } from '../Home/Home';

function Header() {

  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const cartDataFromLS = JSON.parse(localStorage.getItem("cart") || "[]") as ICart[];
    const totalCount = cartDataFromLS.reduce((count, item) => count + item.quantity, 0);
    setCartCount(totalCount)
  },[]);
  
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login")
  }
  const navigateToRegister = () => {
    navigate("/register")
  }
  const navigateToCart = () => {
    navigate("/cart")
  }
  const navigateToHome = () => {
    navigate("/")
  }

  return (
    <div className="header-div">
      <div className="store-name" onClick={navigateToHome}>
        <span>Candle</span><p>Store</p>
      </div>
      <div className="header-button-div">
        <div className="header-buttons">
          <button onClick={navigateToLogin}>Logga in</button> 
          <button onClick={navigateToRegister}>Registrera</button>
        </div>
        <div className="cart-button" onClick={navigateToCart}>
          <BsCart3 />
          <p className='cart-number'>{cartCount}</p>
        </div>
      </div>
    </div>
  )
}


export default Header;



