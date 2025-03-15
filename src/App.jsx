import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/Home/HomePage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Like from './pages/Like/Like';
import ErrorPage from './pages/Error/ErrorPage';
import Buyurtma from './pages/buyurtma/buyurtma';
import { Toaster } from 'react-hot-toast';

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
        />
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
