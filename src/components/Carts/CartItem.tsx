import { useContext } from "react";
import { IProduct } from "../../model";
import './CartItem.css'
import { CartContext } from "./Cart";
import { CiSquareRemove } from "react-icons/ci";

interface CartItemProps {
    item: IProduct;
}
export default function CartItem({item}: CartItemProps){
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
    return (
            <>
                <div className="item">
                    <img  src = {item.image} width={70} height={70}  alt ={item.title} className="images"/>
                    <div className="item-info">
                        <p className="item-title">{item.title}</p>
                        <div className="item-quntity-info">
                            <div className="amount">
                                <button className="amount-changes" onClick={() => decreaseAmount(item.id)}>-</button>
                                <p className="item-amount">{item.amount}</p>
                                <button className="amount-changes" onClick={() => increaseAmount(item.id)}>+</button>
                            </div>
                            <div className="item-price">{item.price}$</div>
                            <div className="item-final-price">{item.amount * item.price}$</div>
                        </div>
                    </div>
                    <CiSquareRemove className="item-remove" onClick={()=>{removeFromCart(item.id)}}/>
                    {/* <button  >x</button> */}
                </div>

            </>

    )
}