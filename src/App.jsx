import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/Home/HomePage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Like from './pages/Like/Like';
import ErrorPage from './pages/Error/ErrorPage';
import { Toaster } from 'react-hot-toast';
import Buyurtma from './pages/Buyurtma/Buyurtma';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/buyurtma"
          element={
            <MainLayout>
              <Buyurtma />
            </MainLayout>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/like"
          element={
            <MainLayout>
              <Like />
            </MainLayout>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
