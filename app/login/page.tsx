import { FaFacebook, FaGoogle, FaApple, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import house from "../images/house.png";

export default function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center space-x-20 text-white bg-blue-500 w-full p-1">
          
      <span className="flex items-center space-x-2 pr-20 pl-20">
            
            <span>Customer Service</span>
          </span>
        <span className="flex items-center space-x-2">
            <FaWhatsapp />
            <span>02096611479</span>
          </span>
          <span className="flex items-center space-x-2">
            <FaFacebook />
            <span>Clean House</span>
          </span>
        </div>
      <header className="bg-green-400 w-full p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <Image src={house} alt="House" width={50} height={50} />
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
        
        <select className="border p-1 rounded">
          <option value="th">TH</option>
          <option value="en">EN</option>
          <option value="lo">Lao</option>
        </select>
      </header>

      {/* Login Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mt-8 w-96">
        <h2 className="text-center text-2xl font-bold mb-4">ເຂົ້າສູ້ລະບົບ</h2>

        {/* Social Login */}
        <button className="w-full bg-blue-800 text-white py-2 rounded flex items-center justify-center mb-2">
          <FaFacebook className="mr-2" /> ເຂົ້າສູ້ລະບົບດ້ວຍ Facebook
        </button>
        <button className="w-full bg-red-600 text-white py-2 rounded flex items-center justify-center mb-2">
          <FaGoogle className="mr-2" /> ເຂົ້າສູ້ລະບົບດ້ວຍ Google
        </button>
        <button className="w-full bg-gray-800 text-white py-2 rounded flex items-center justify-center mb-4">
          <FaApple className="mr-2" /> ເຂົ້າສູ້ລະບົບດ້ວຍ Apple
        </button>

        {/* Login Form */}
        <label className="block font-bold">ຫລື</label>
        <input type="text" className="w-full p-2 mb-2 border rounded bg-pink-100" placeholder="ອີເມວ" />
        <input type="password" className="w-full p-2 mb-4 border rounded bg-pink-100" placeholder="ລະຫັດຜ່ານ" />

        <button className="w-full bg-blue-500 text-white py-2 rounded">ເຂົ້າສູ້ລະບົບ</button>
      </div>
    </div>
  );
}
