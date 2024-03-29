import { useEffect, useState } from "react";
import { IProduct } from "../model";
import axios, { AxiosError } from "axios";


export function useProducts(){
    const [products,setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    

    async function fetchProducts(){
        try {
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProducts(response.data)
            console.log(response)
            setLoading(false)
        } catch (e: unknown) {
            setError('')
            setLoading(false)
            const error = e as AxiosError
            setError(error.message)
        }
        
    }

    useEffect(() => {
        fetchProducts()
    },[])
    return {products, loading, error}
    
}
