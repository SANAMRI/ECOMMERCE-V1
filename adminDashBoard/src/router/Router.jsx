import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from '../layout/SideBar';
import Product from '../pages/Product';
import App from '../App';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';


function Router() {
  return (
    
<BrowserRouter>

<Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="Product" element={<Product />} />
          
          <Route path="Settings" element={<Settings />} />
        </Route>
        
      </Routes>


</BrowserRouter>

  )
}

export default Router
