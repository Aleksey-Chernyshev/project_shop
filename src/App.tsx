
import { useState } from "react";
import CartProvider from "./components/Carts/Cart";
import { ProductPage } from "./pages/ProductPage/ProductPage";


function App() {
  const [tab, setTab] = useState('product')
  return (
    <div>
      <CartProvider>
        <ProductPage />
      </CartProvider>
    </div>
  );
}

export default App;
