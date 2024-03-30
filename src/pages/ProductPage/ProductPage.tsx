import { useContext } from "react"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { Loader } from "../../components/Loader/Loader"
import { Navigation } from "../../components/Navigation/Navigation"
import { Product } from "../../components/Product/Product"
import { useProducts } from "../../hooks/products"
import './ProductPage.css'
import { CartContext } from "../../components/Carts/Cart"
import CartItem from "../../components/Carts/CartItem"


export function ProductPage() {

const {products, loading, error} = useProducts()
const {cart} = useContext(CartContext)
return(
    <>
    <Navigation/>
    <div className="container">
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      
        <div className="pr">
            {products.map(product => <Product product = {product} key = {product.id}/>)}
        </div>
    </div>
    {/* <div>
        {
            cart.map((item) => {
                return <CartItem item = {item} key={item.id}/>
            })
        }
    </div> */}
    </>
)
}