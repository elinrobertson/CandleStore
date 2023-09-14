// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
// import { useContext } from "react";
// import { UserContext } from "../Context/UserContext";
import "./Header.css";

function Header() {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("./login")
  }
  const navigateToRegister = () => {
    navigate("./register")
  }

  return (
    <div className="header-div">
        <h2>Header</h2>
        <button onClick={navigateToLogin}>Logga in</button> 
        <button onClick={navigateToRegister}>Registrera</button>
        <BsCart3 />
        {/* <Link to='/register'><p>Registrera</p></Link> */}
    </div>
  )
}

// function Header() {
//   const navigate = useNavigate();

//   const navigateToRegister = () => {
//     // Anropa navigate med den önskade sökvägen för att navigera användaren
//     navigate('/register');
//   };

//   return (
//     <div className="header-div">
//       <h2>Header</h2>
//       {/* Anropa navigateToRegister när knappen trycks */}
//       <button onClick={navigateToRegister}>Registrera</button>
//     </div>
//   );
// }

export default Header;



// // import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import "./Header.css"

// function Header() {
//   const history = useHistory();

//   const navigateToRegister = () => {
//     // Anropa history.push med den önskade sökvägen för att navigera användaren
//     history.push('/register');
//   };

//   return (
//     <div className="header-div">
//       <h2>Header</h2>
//       {/* Anropa navigateToRegister när knappen trycks */}
//       <button onClick={navigateToRegister}>Registrera</button>
//     </div>
//   );
// }

// export default Header;


