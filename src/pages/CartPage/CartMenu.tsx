import { useContext } from "react"
import CartItem from "../../components/Carts/CartItem"
import { CartContext } from "../../components/Carts/Cart"
import { MdOutlineDeleteForever } from "react-icons/md";
import './CartMenu.css'
export function CartMenu (){
 
    const {cart, clearCart,total} = useContext(CartContext)
    return(
        <div className="cartMenuContainer">
            <h1>Корзина</h1>
            {
                cart.map((item) => {
                    return <CartItem item = {item} key={item.id}/>
                })
            }
            { total !== 0 ?  (
                <div className="total-cart">
                    <span>{`Total:${total}`}</span>
                    <MdOutlineDeleteForever className="delete-cart" onClick={()=>{clearCart()}}/>
                </div>)
                :
                <span className="cart-empty">Корзина пуста</span>
            }
        </div>
    )
}