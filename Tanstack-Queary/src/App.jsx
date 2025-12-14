import { useContext } from 'react'
import './App.css'
import ProductDetails from './Components/ProductDetails'
import ProductList from './Components/ProductList'
import ProductContext from './Context'
import AddProduct from './Components/AddProduct'

function App() {

  const {productId} = useContext(ProductContext)
  
  return (
   <div className=' flex m-2 ' >
    <AddProduct />
   <ProductList />
   <ProductDetails id={productId}  />
   </div>
  )
}

export default App
