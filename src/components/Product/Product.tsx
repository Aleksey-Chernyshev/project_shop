import axios from "axios";
import { IProduct } from "../../model";
import ModalProduct from "../modalProduct/modalProduct";
import imgR from './../../ui/rating.png'
import './Product.css'
import { useContext, useState } from "react";
import { CartContext } from "../Carts/Cart";


interface ProductProps{
    product: IProduct
}
export function Product({product}: ProductProps){
const [showModal, setShowModal] = useState(false);

const closeModal = () => {
    setShowModal(false);
}
const {addToCart} = useContext(CartContext)
    return( 
        <div>
            <div className="product-wpapper">
                <div className="product">
                        <img  src = {product.image} width={200} height={270}  alt ={product.title} className="images"/>
                        <p className="name">{product.title}</p>
                        <span className="price">{product.price}$</span>
                    <div className="product_function1">
                        <button className="in_cart" onClick={() => addToCart(product, product.id)}>В корзину</button>
                    </div>
                    <div className="product_function2">
                        <button className="fast_check" onClick={() =>{setShowModal(true)}}>Быстрый просмотр</button>
                    </div>
                </div>
            </div>
            <ModalProduct active = {showModal} onClose={closeModal}>
                <div className="contentModal">
                    <div className = 'product-photo'>
                        <img  src = {product.image} width={400} height={540}  alt ={product.title} className="images"/>
                    </div>

                    <div className="product-content">
                        <div className="product-header">
                            <a className="product-title-j">{product.title}</a>
                            <a className="product-category-j">{product.category}</a>
                            <a className="product-rating-j">
                                <img src={imgR} width={13} height={13}  alt=''/>
                                {product.rating.rate}
                            </a>
                        </div>
                        <div className="product-info">
                            <div className="product-price-j">
                                {product.price}$
                            </div>
                            <div className="product-photo-j">
                                <a className="product-images-j"><img  src = {product.image} width={80} height={108}  alt ={product.title} className="images"/></a>
                                <a className="product-images-j"><img  src = {product.image} width={80} height={108}  alt ={product.title} className="images"/></a>
                                <a className="product-images-j"><img  src = {product.image} width={80} height={108}  alt ={product.title} className="images"/></a>
                            </div>
                            <div className="product-cart">
                                <button className="add-product-j" onClick={() => addToCart(product, product.id)}>Добавить в корзину</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </ModalProduct>
        </div>
    )
}