import React,{ useContext, useState, useEffect, createContext } from "react";
import { IProduct } from "../../model";


export interface ICartItemContext{
    cart: IProduct[],
    addToCart: (product: IProduct, id: number) => void,
    removeFromCart: ( id: number) => void,
    clearCart:()=>void,
    increaseAmount: (id:number) => void,
    decreaseAmount: (id:number) => void,
    total: number
    
}
// export const CartContext = createContext<{ cart: IProduct[], addToCart: (product: IProduct, id: number) => void }>({ cart: [], addToCart: () => {} })
export const CartContext = createContext<ICartItemContext>({
    cart: [],
    addToCart: (product, id) => {},
    removeFromCart: (id) => {},
    clearCart:()=>{},
    increaseAmount: (id) => {},
    decreaseAmount: (id:number) => {},
    total: 0
})
export default function CartProvider({children}: {children: React.ReactNode}){
    // addToCart: (product: IProduct, id:number) => {}
    const [cart, setCart] = useState<IProduct[]>([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total)
    })

    const addToCart = (product:IProduct, id:number)=>{
        const newItem = {...product, amount: 1}
        const cartItem = cart.find((item) => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const removeFromCart = (id:number) =>{
        const newCart = cart.filter((item) => {
            return item.id !== id
        })
        setCart(newCart)
    }

    const clearCart = ()=>{
        setCart([])
    }
    const increaseAmount = (id:number) => {
        const item = cart.find((item) => item.id === id)
        if (item) addToCart(item,id)
    }

    const decreaseAmount = (id:number) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id){
                    return{...item, amount: cartItem.amount - 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
            if(cartItem.amount < 2){removeFromCart(id)}
        }
        
    }
    console.log(cart)
        return <CartContext.Provider value={{cart, addToCart, removeFromCart,clearCart, increaseAmount, decreaseAmount, total}}>{children}</CartContext.Provider>
}