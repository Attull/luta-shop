import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);

    async function fetchData() {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="products-container">
            <h1 className="heading">Our Products</h1>

            <div className="products-grid">
                {products.map((prod) => (
                    <Link to={`/product/${prod.id}`}>
                        <div className="product-card" key={prod.id} >
                            <img src={prod.image} alt={prod.title} className="product-image" />

                            <h3 className="product-title">{prod.title}</h3>

                            <p className="product-category">
                                <strong>Category:</strong> {prod.category}
                            </p>

                            <p className="product-price">${prod.price}</p>

                            <p className="product-rating">
                                ⭐ {prod.rating.rate} ({prod.rating.count} reviews)
                            </p>

                            <p className="product-description">
                                {prod.description.slice(0, 90)}...
                            </p>

                            <button className="buy-btn">Buy Now</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Products;