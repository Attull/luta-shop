import React, { useEffect, useState } from 'react'
import "./style.css"
import { useParams } from 'react-router-dom'

export default function ProductDetail() {

  const { id } = useParams()
  let [product, setProduct] = useState({})

  async function fetchData() {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-card" key={product?.id} >
      <img src={product?.image} alt={product?.title} className="product-image" />

      <h3 className="product-title">{product?.title}</h3>

      <p className="product-category">
        <strong>Category:</strong> {product?.category}
      </p>

      <p className="product-price">${product.price}</p>

      <p className="product-rating">
        ⭐ {product?.rating?.rate} ({product?.rating?.count} reviews)
      </p>

      <p className="product-description">
        {product?.description?.slice(0, 90)}...
      </p>

      <button className="buy-btn">Buy Now</button>
    </div>
  )
}
