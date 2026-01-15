const sampleArr = [
    {
      key: "prd-001",
      name: "Cat6 UTP Network Cable",
      price: 120,
      category: "Networking",
      dimensions: "305m box",
      description: "High quality Cat6 UTP cable suitable for structured cabling installations.",
      availability: true,
      image: [
        "https://example.com/images/cat6-1.jpg",
        "https://example.com/images/cat6-2.jpg"
      ]
    },
    {
      key: "prd-002",
      name: "24-Port Gigabit Switch",
      price: 18500,
      category: "Active Devices",
      dimensions: "440 x 220 x 44 mm",
      description: "Unmanaged 24-port Gigabit Ethernet switch for small to medium networks.",
      availability: true,
      image: [
        "https://example.com/images/switch-24p.jpg"
      ]
    },
    {
      key: "prd-003",
      name: "Wall Mount Network Rack",
      price: 14500,
      category: "Racks & Cabinets",
      dimensions: "600 x 450 x 600 mm",
      description: "12U wall mount rack suitable for switches, patch panels and DVRs.",
      availability: true,
      image: [
        "https://example.com/images/wall-rack.jpg"
      ]
    }
];
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItems() {

    const [items, setItems] = useState(sampleArr);

    return (
        <div className="w-full h-full relative ">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimensions</th>
                    <th>Description</th>
                    <th>Availability</th>
                </thead>
                <tbody>
                    {
                        items.map((product)=>{
                            console.log(product);
                            return (
                              <tr key={product.key}>
                                <td>{product.key}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.dimensions}</td>
                                <td>{product.description}</td>
                                <td>{product.availability ? "Available" : "Not Available"}</td>
                              </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
            <Link to="/admin/items/add">
            <CiCirclePlus className="text-[100px] absolute right-2 bottom-2 hover:text-red-600 cursor-pointer"/>
            </Link>

        </div>
    )
}