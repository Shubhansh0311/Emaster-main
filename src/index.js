import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'

//to use router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing product reducer
import { CartReducer, OrderReducer, ProductReducer, UserReducer } from './reducers/index';
import { Provider } from 'react-redux';//to pass the data 
import CartPage from './pages/CartPage';
import Home from './pages/home';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';
import ProductDetailPage from './pages/ProductDetailPage';

// we can also assign to the reducer just list here we give the name as productitem

//here reducer declared are global

const stores = configureStore({
  reducer: {
    productItem: ProductReducer,  //THIS PRODUCT ITEM IS USED IN APP.JS WHERE WE HAVE WRITE productitem.product
    cartItem: CartReducer, //this is used in card reducer section to access cart item 
    order: OrderReducer,
    user: UserReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

  <>
    <React.StrictMode>
      {/* here store is passes globally over the app  all the state of the reducers will be available by this */}
      {/* WE HAVE PASSED THE STORE CREATED ABOVE */}

      {/* store is a keyword❗❗❗❗ */}
      <Provider store={stores}>

        {/* 💡routing */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="cart.html" element={<CartPage />} />
            <Route path="checkout.html" element={<CheckoutPage />} />
            <Route path="myorder.html" element={<OrderPage />} />
            <Route path="product/:productID" element={<ProductDetailPage />} />
            <Route index element={<Home />} />

          </Routes>
        </BrowserRouter>

        <App />
      </Provider>
    </React.StrictMode>





  </>
);
