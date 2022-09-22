import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Card from '../components/Card.js';
import useGetProducts from '../hooks/useGetProducts';


const API = ' https://api.escuelajs.co/api/v1/products'
function ProductList ({product,categories}) {
    const products = useGetProducts(API);
	return (
        <div className= "p-6" id="recomendados">
        
                <p className="text-3xl font-semibold text-primary"> Productos</p>
                <div className="w-auto h-96 items-center mt-6 overflow-x-auto  overscroll-x-contain scrollbar-hide flex space-x-4">
                    {products.map((product) => {
                        return (
                            <Card product={product} key={product.id}/>
                        )
                    })}

                </div>
            </div>

	);
}

export default ProductList;