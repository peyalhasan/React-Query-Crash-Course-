import { useState } from "react";
import ProductContext from "../Context";


const ProductContextProvider = ({children}) => {

    const [productId, setProductId] = useState(null)

    return (
        <ProductContext.Provider value={{productId, setProductId,
       
        }} >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;