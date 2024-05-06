import { useState } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { createContext, useContext } from "react";
// import {routes} from "./routes";
import Index from "./pages/index/index";
import Login from "./pages/login/Login";
import OTP from "./pages/login/OTP";
import Register from "./pages/register/Register";
import ShopCard from "./pages/shop cart/ShopCart";
import Category from "./pages/category/Category";

import Context from "./context";
import Product from "./pages/product/Product";
function App() {
   // const router = useRoutes(routes);


   const [bottomActive, setBottomActive] = useState('home')

   return (
      <div className="relative">
         <Context.Provider value={{ bottomActive, setBottomActive }}>
            <Routes>

               <Route path="/" element={<Index />} />
               <Route path="/login" element={<Login />} />
               <Route path="/otp" element={<OTP />} />
               {/* <Route path="/register" element={<Register />} /> */}
               <Route path="/shop-cart" element={<ShopCard />} />
               <Route path="/category" element={<Category />} />
               <Route path="/product" element={<Product />} />
            </Routes>
         </Context.Provider>
      </div>
   );
}

export default App;



