// import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
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
    </div>
  )
}


  // return (
  //   <div className="header-div">
  //     <div className="store-name">
  //       <NavLink to="/"> 
  //         <span>Candle</span><p>Store</p>
  //       </NavLink>
  //     </div>
  //     <div className="header-button-div">
  //       <div className="header-buttons">
  //         <NavLink to="/login">Logga in</NavLink>
  //         <NavLink to="/register">Registrera</NavLink>
  //       </div>
  //       <div className="cart-button">
  //         <NavLink to="/cart">
  //           <BsCart3 />
  //           <p className='cart-number'>0</p>
  //         </NavLink>
  //       </div>
  //     </div>
  //   </div>
  // )


export default Header;



