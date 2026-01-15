
import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

export default function AdminItems() {
  const [items, setItems] = useState([]);
  const [itemsLoaded, setItemsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if (!itemsLoaded) {
      const token = localStorage.getItem("token");
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
          headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
          console.log(res.data); 
          setItems(res.data);
          setItemsLoaded(true);
        }).catch((err) => console.log(err));
    }
  }, [itemsLoaded]);

  function handleDelete(productKey) {
    // add your delete api call here if needed
    setItems((prev) => prev.filter((p) => p.key !== productKey));
    const token = localStorage.getItem("token");
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productKey}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      console.log(res.data);
      setItemsLoaded(!itemsLoaded);
    }).catch((err) => {
      console.log(err)
  });
  }

  return (
    <div className="w-full h-full relative flex items-center flex-col p-4">
      {!itemsLoaded && <div className="border-4 my-4 border-b-green-500 rounded-full animate-spin w-[100px] h-[100px]"></div>}
      {itemsLoaded && <div className="overflow-x-scroll rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[1000px] text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr className="text-left text-gray-600">
              <th className="px-4 py-3 font-semibold">Key</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Price</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Dimensions</th>
              <th className="px-4 py-3 font-semibold">Description</th>
              <th className="px-4 py-3 font-semibold">Availability</th>
              <th className="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {items.map((product) => (
              <tr key={product.key} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-mono text-xs text-gray-700">
                  {product.key}
                </td>
                <td className="px-4 py-3 font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-4 py-3 font-semibold text-gray-900">
                  Rs. {Number(product.price).toLocaleString()}
                </td>
                <td className="px-4 py-3 text-gray-700">{product.category}</td>
                <td className="px-4 py-3 text-gray-700">{product.dimensions}</td>
                <td className="px-4 py-3 text-gray-700">
                  {product.description}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                      product.availability
                        ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                        : "bg-gray-100 text-gray-700 ring-1 ring-gray-200"
                    }`}
                  >
                    {product.availability ? "Available" : "Not Available"}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => navigate(`/admin/items/edit/`,{state:product})} className="rounded-lg px-3 py-2 text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-100"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(product.key)}
                      className="rounded-lg px-3 py-2 text-xs font-semibold bg-red-50 text-red-700 ring-1 ring-red-200 hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}

      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[90px] fixed right-4 bottom-4 text-gray-900 hover:text-red-600 cursor-pointer drop-shadow-sm" />
      </Link>
    </div>
  );
}
