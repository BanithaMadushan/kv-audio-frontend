import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview() {

    const params = useParams();
    const { key } = params;
    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`)
        .then((res)=>{
            setProduct(res.data);
            setLoadingStatus("success");
            console.log(res.data);
        }).catch((err)=>{
            console.error(err);
            setLoadingStatus("error");
        })
    },[])

    return (
        <div className="w-full h-full flex justify-center " >
            {
                loadingStatus == "loading" &&
                <div className="w-[50px] h-[50px] border-4 border-gray-500 border-t-green-500 rounded-full animate-spin"></div>
            }
            {
                loadingStatus == "success" &&
                <div className="w-full h-full flex justify-center items-center " >
                    <div className="w-[49%]  h-full">
                        <ImageSlider images={product.image} />  
                    </div>
                    
                    <div className="w-[49%] bg-white h-full flex flex-col">
                        <h1 className="text-[25px] font-bold">{product.name}</h1>
                        <h1 className="text-[25px] font-bold">{product.price}</h1>
                        <h1 className="text-[25px] font-bold">{product.category}</h1>
                        <h1 className="text-[25px] font-bold">{product.dimensions}</h1>
                        <h1 className="text-[25px] font-bold">{product.availability}</h1>
                        <h1 className="text-[25px] font-bold">{product.description}</h1>
                    </div>
                </div>
            }
        </div>
        
    )
}