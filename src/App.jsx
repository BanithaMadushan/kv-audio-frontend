
import './App.css'
import ProductCard from './components/productCard'
import { GoGraph } from "react-icons/go";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
function App() {

  return (
    <div className='w-full h-screen flex'>
      <div className='w-[400px] h-full bg-green-200'>
        
        <button className='w-full h-[40px] text-[25px] font-bold bg-amber-400 flex justify-center items-center'>
          <GoGraph/>
          Dashboard
        </button>
        
        <button className='w-full h-[40px] text-[25px] font-bold bg-amber-500 flex justify-center items-center'>
          <FaBookmark/>
          Bookings
        </button>

        <button className='w-full h-[40px] text-[25px] font-bold bg-amber-600 flex justify-center items-center'>
          <MdOutlineSpeaker/>
          Items
        </button>

        <button className='w-full h-[40px] text-[25px] font-bold bg-amber-700 flex justify-center items-center'>
        <FaRegUser/>
          Users
        </button>
      
      </div>
      <div className='w-full bg-red-200'>

      </div>

    </div>
  )
}

export default App
