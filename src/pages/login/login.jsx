import { useState } from "react";
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(email, password);
        const backendurl = import.meta.env.VITE_BACKEND_URL;

        axios.post(`${backendurl}/api/users/login`, 
            {
                email : email, 
                password : password
            }
    ).then((res)=>{
        console.log(res);
        toast.success("Login successful");
        const user = res.data.user;
        localStorage.setItem("token", res.data.token);

        if(user.role === "admin"){
            navigate("/admin");
        }else{
            navigate("/");
        }
        

    }).catch((err)=>{
        console.log(err);
        toast.error(err.response.data.error);
    })
    }

    

    return(
        <div className="bg-picture w-full h-screen flex justify-center items-center">

            <form onSubmit={handleOnSubmit}>

            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col ">
                <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover"/>

                <input type="email" placeholder="Email" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"

                value={email}

                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
                
                />

                <input type="password" placeholder="Passowrd" className="w-[300px] h-[30px] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"

                value={password}

                onChange={(e)=>{
                    setPassword(e.target.value);
                }}

                />

                <button className="w-[300px] h-[50px] bg-yellow-600 text-black text-2xl rounded-xl my-8 cursor-pointer">Login

                </button>
            </div>
            </form>
        </div>
    )
}