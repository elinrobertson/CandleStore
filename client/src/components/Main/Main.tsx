import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Cart from '../Cart/Cart';
import Confirmation from '../Confirmation/Confirmation';
// import UserProvider from '../Context/UserContext';
import "./Main.css"

function Main() {


    return (
      <Router>
      <div className="main-content">
       {/* <UserProvider /> */}
              <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          {/* <UserProvider /> */}
          </div>
      </Router>
      );
    }


export default Main