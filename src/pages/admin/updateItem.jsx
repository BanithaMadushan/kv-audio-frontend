import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItem() {
  const location = useLocation();
  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.category);
  const [productDimension, setProductDimension] = useState(location.state.dimensions);
  const [productDescription, setProductDescription] = useState(location.state.description);
  const navigate = useNavigate();
  

  async function handleAddItem(){
        console.log(productKey, productName, productPrice, productCategory, productDimension, productDescription);
        const token = localStorage.getItem("token");

        if(token){

           try{ 
           const result =await axios.put("http://localhost:3000/api/products/"+productKey,{
                name : productName,
                price : productPrice,
                category : productCategory, 
                dimensions : productDimension,
                description : productDescription
        }, {
            headers : {
                Authorization : "Bearer " + token
            }
        });
        toast.success(result.data.message);
        navigate("/admin/items");

    }catch(err){
        toast.error(err.response.data.error);
    }
        
        }else{
            toast.error("Please login to add items");
        }
  }



  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Update Items</h1>
      
      <div className="w-[400px] border p-4 flex flex-col gap-3 rounded shadow-md">
        
        {/* Product Key */}
        <input
          disabled
          type="text"
          placeholder="Product Key"
          className="border p-2 rounded"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
        />

        {/* Product Name */}
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 rounded"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        {/* Product Price - Changed type to number for better UX */}
        <input
          type="number"
          placeholder="Product Price"
          className="border p-2 rounded"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />

        {/* Product Category */}
        <select
          className="border p-2 rounded"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        {/* Product Dimension */}
        <input
          type="text"
          placeholder="Product Dimension"
          className="border p-2 rounded"
          value={productDimension}
          onChange={(e) => setProductDimension(e.target.value)}
        />

        {/* Product Description */}
        <textarea
            type="text"
            placeholder="Product Description"
            className="border p-2 rounded"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
        />

        {/* Add Button */}
        <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
        Update
        </button>
        <button onClick={() =>navigate("/admin/items")} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}