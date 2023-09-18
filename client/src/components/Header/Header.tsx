// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import "./Header.css";

function Header() {

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
          <p className='cart-number'>0</p>
          </div>
      </div>
        {/* <Link to='/register'><p>Registrera</p></Link> */}
    </div>
  )
}


export default Header;



