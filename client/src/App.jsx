
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux"
import Success from "./pages/Success";

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  //Redirect,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        <Route path="/success"  element={<Success />} />
      </Routes>
    </Router>
  )
};

export default App;





