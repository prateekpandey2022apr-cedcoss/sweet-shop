import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { SweetProvider } from "./SweetContext";
import Success from "./components/Success";

function App() {
  return (
    <>
      <SweetProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart/" element={<Cart />}></Route>
          <Route path="/checkout/" element={<Checkout />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/success/" element={<Success />}></Route>
        </Routes>
      </SweetProvider>
    </>
  );
}

export default App;
