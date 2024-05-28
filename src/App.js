import "../src/css/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Navbar from "./components/navbar";
import Users from "./pages/users/users";
import User from "./pages/users/user";
import About from "./components/about";
import Footer from "./components/footer";
import Login from "./components/login";
import ShopContextProvider from "./pages/shop/shopContext";
import Welcome from "./components/welcome";
import ProductDetail from "./pages/shop/productDetail";
import DropDownMenu from "./components/dropDownMenu";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <DropDownMenu />
          <Welcome />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<h6 style={{ height: "100px" }}>Page Not Found</h6>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
