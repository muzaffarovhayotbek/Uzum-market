import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/Home/HomePage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Like from './pages/Like/Like';
import ErrorPage from './pages/Error/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <HomePage></HomePage>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/like"
          element={
            <MainLayout>
              <Like />
            </MainLayout>
          }
        ></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
