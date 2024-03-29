import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { Loader } from "../../components/Loader/Loader"
import { Navigation } from "../../components/Navigation/Navigation"
import { Product } from "../../components/Product/Product"
import { useProducts } from "../../hooks/products"
import './ProductPage.css'


export function ProductPage() {

const {products, loading, error} = useProducts()

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
    </>
)
}