import React, { useEffect, useState } from 'react'
import "./style.css"

function Products() {

    let [products, setProducts] = useState([])
    async function fetchData(){
         const res = await fetch("https://fakestoreapi.com/products")
         const data = await res.json()
         setProducts(data)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <h1>Product page</h1>
        {
            products.map((prod)=>{
                return (
                    <div>
                        <img src={prod.image} height={100}/>
                        <h5>{prod.title}</h5>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products