
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


const AddProduct = () => {
    const queryClient = useQueryClient()

    const [state, setState] = useState({
        title: "",
        description: "",
        price: 0,
        rating: 5,
        thumbnail: "",
    })

    const mutation = useMutation({
        mutationFn: (newProduct) => axios.post("http://localhost:8000/products", newProduct),
        onSuccess: (data, variables, context) => {
            console.log(context);
            
            queryClient.invalidateQueries(["products"])
        },
        onMutate: (variables) =>{
            return {greeting: 'Say Hello' }
        }
    })


    function submitData(e) {
        e.preventDefault();
        const newData = { ...state, id: crypto.randomUUID().toString() }
        mutation.mutate(newData)

    }

    function handleChange(e) {
        const name = e.target.name;
        const value =
            e.target.type === 'number' ? e.target.valueAsNumber : e.target.value;
        setState({
            ...state,
            [name]: value
        })
    }


    return (
        <div className="m-2 p-2 bg-gray-100 w-1/5 h-1/2">
            <h2 className="text-2xl my-2">Add a Product</h2>
            {<p>Product Added!</p>}
            <form className="flex flex-col" onSubmit={submitData}>
                <input
                    type="text"
                    value={state.title}
                    name="title"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product title"
                />
                <textarea
                    value={state.description}
                    name="description"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product description"
                />

                <input
                    type="number"
                    value={state.price}
                    name="price"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product price"
                />
                <input
                    type="text"
                    value={state.thumbnail}
                    name="thumbnail"
                    onChange={handleChange}
                    className="my-2 border p-2 rounded"
                    placeholder="Enter a product thumbnail URL"
                />

                <button
                    type="submit"
                    className="bg-black m-auto text-white text-xl p-1 rounded-md"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddProduct;