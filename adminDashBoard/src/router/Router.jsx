import {useState} from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import App from '../App';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import Login from "../pages/Login";
import Products from "../pages/Products/views/Products";
import ProductsList from "../pages/Products/ProductsList";
import OneProduct from "../pages/Products/views/OneProduct";


function Router() {
  const [user, setUser] = useState(true);
  return (
    <div>
<BrowserRouter>

<Routes>
  {user? (
        <Route path="/" element={<App />}>
           <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductsList />}>
          <Route index element={<Products />} />
          <Route path="OneProduct/:productId" element={<OneProduct />} />
          </Route>
         
          <Route path="settings" element={<Settings />}/>
        </Route>
  ) : (
    <Route path="/" element={<Login />} />
  ) }
  </Routes>
</BrowserRouter>
</div>
  )
}

export default Router
