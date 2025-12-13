import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import ProductContext from "../Context";

const retriveProducts = async ({ queryKey }) => {
    const response = await axios.get(`http://localhost:8000/${queryKey[0]}`);
    return response.data;
}

const ProductList = () => {

    const { productId, setProductId } = useContext(ProductContext)

    const { data: products, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: retriveProducts,
        retry: false,
        // refetchInterval: 1000,
    })

    if (isLoading) return <div>Fetching Products....</div>

    if (error) return <div>An error occured {error.message} </div>

    function handleShow(id) {
        setProductId(prevId => (prevId === id ? null : id));
    }


    return (
        <div className=" flex flex-col justify-center items-center w-3/5  ">
            <h1 className="text-3xl my-2 " >Product List</h1>
            <ul className="flex flex-wrap justify-center items-center ">
                {
                    products && products.map(product => (
                        <li key={product.id} className=" flex flex-col items-center m-2 border rounded-sm ">
                            <img className=" object-cover h-64 w-96 rounded-sm " src={product.thumbnail} alt={product.title} />
                            <p className="text-xl my-3">
                                {product.title}
                            </p>
                            <button onClick={() => handleShow(product.id)} className=" btn bg-green-400 text-xl rounded-lg p-2 mb-2" > {product.id === productId ? 'Hide' : 'Show'} </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductList;