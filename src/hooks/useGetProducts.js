import {useEffect,useState} from 'react';
import axios from 'axios';

const API = ' https://api.escuelajs.co/api/v1/products'

const useGetProducts = (API) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios.get(API)
		.then(response => {
			setProducts(response.data)
		})
	}, [API])
	return products

}



export default useGetProducts


