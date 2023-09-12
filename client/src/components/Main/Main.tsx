import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import "./Main.css"


function Main() {

    return (
      <Router>
      <div className="main-content">
              <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
              {/* <Route path="/checkout" element={<Checkout />} /> */}
          </div>
      </Router>
      );
    }


export default Main