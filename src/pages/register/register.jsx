import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function RegisterPage() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e){
    e.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      password,
      address,
      phone
    });
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
      email : email,
      firstName : firstName,
      lastName : lastName,
      password : password,
      address : address,
      phone : phone
    }).then((res)=>{
      console.log(res);
      toast.success("Registration successful");
      navigate("/login");
    }).catch((err)=>{
      console.log(err);
      toast.error(err?.response?.data?.error || "Something went wrong");
    })
  };

  return (
    <div className="bg-picture h-screen flex justify-center items-center">

      <form onSubmit={handleOnSubmit}>
        <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col">

          <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover mb-4"/>

          {/* First Name */}
          <input
            type="text"
            placeholder="First Name"
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name"
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone"
            className="w-[300px] h-[30px] mt-4 bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          {/* Register Button */}
          <button
            type="submit"
            className="w-[300px] h-[50px] bg-yellow-600 text-black text-2xl rounded-xl my-8 cursor-pointer"
          >
            Register
          </button>

        </div>
      </form>
    </div>
  );
}
