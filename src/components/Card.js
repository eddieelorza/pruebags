import React, {useState, useEffect} from 'react';
import useGetProducts from '../hooks/useGetProducts';


function Card({product}) {

    const [filter, setFilter] = useState(false);
    const [category, setCategory] = useState([product.category.name]);
    const [products, setProducts] = useState([
        {

            "id": product.id,
            "title": product.title,
            "description": product.description,
            "image": product.images,
            "category": product.category.name,

        }
    ])

    // Esta función se ejecuta cuando se da click en la tarjeta
    
    const handlerFilter = () => {
        setFilter(!filter);
        setCategory([product.category.name]);
    }


    // esta realiza el filtrado de los productos
    useEffect(() => {
        if (filter) {
            const filteredProducts = products.filter((product) => {
                return product.category === category;
            });
            setProducts(filteredProducts);
        }
    }, [filter, category]);





  

    return (


        products.map((product) => {
            return (
                          <section className="Card "  onClick={handlerFilter} key={product.id}>
                            
                                <img className="Card--cover " src={product.image} alt=""/>
                                <div className="Card--info ">
                                    <p className="Card--info__title ">{product.title}</p>
                                    <p className="Card--info__subtitle">  {product.description}</p>
                                    <p className="text-xl font-semibold text-primary">
                                        {product.category}
                                    </p>
                                </div>
                           </section>
            )
         })

    )
}

export default Card