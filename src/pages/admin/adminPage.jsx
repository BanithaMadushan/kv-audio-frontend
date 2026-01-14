import { FaRegUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdOutlineSpeaker } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className='w-full h-screen flex'>
      <div className='w-[400px] h-full bg-green-200'>
        
        <button className='w-full h-[40px] text-[25px] font-bold bg-amber-400 flex justify-center items-center'>
          <GoGraph/>
          Dashboard
        </button>
        
        <Link to="/admin/bookings" className='w-full h-[40px] text-[25px] font-bold bg-amber-500 flex justify-center items-center'>
          <CiBookmarkCheck/>
          Bookings
        </Link>

        <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-bold bg-amber-600 flex justify-center items-center'>
          <MdOutlineSpeaker/>
          Items
        </Link>

        <Link to="/admin/users" className='w-full h-[40px] text-[25px] font-bold bg-amber-700 flex justify-center items-center'>
        <FaRegUser/>
          Users
        </Link>
      
      </div>
      <div className='w-[calc(100vw-400px)] bg-red-200'>

        <Routes path="/*">
          <Route path="/bookings" element={<h1>Booking</h1>}/>
          <Route path="/items" element={<h1>Items</h1>}/>
          <Route path="/users" element={<h1>Users</h1>}/>
        </Routes>

      </div>

    </div>
    )
}