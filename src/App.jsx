import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Navbar from './components/Navbar/Navbar'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="product/:id"  element={<ProductDetail/>} />
      </Routes>
    </div>
  )
}

export default App