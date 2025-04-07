import Image from 'next/image';
import { FaPhone, FaFacebook, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import maebarn from '../images/maebarn.jpeg';
import store from '../images/store.jpg';
import google from '../images/google.jpg';
import houseclean from '../images/house.png';
import styles from '../styles/Image.module.css';


export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Header */}
       
       <div className="flex items-center space-x-20 text-white bg-blue-500 w-full p-1">
        
          <span className="flex items-center space-x-4 pr-20 pl-20">
            <span className="text-lg font-bold">Customer Service</span>
          </span>
          <span className="flex items-center space-x-2">
            <FaPhone />
            <span>02096611479</span>
          </span>
          <span className="flex items-center gap-x-2">
            <FaFacebook />
            <span>Clean House</span>
          </span>
        </div>
      <header className="bg-green-400 p-4 px-8 flex justify-between items-center ">
        <div className="flex items-center space-x-4">
          <Image src={houseclean} alt="houseclean" width={50} height={50}  />
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
        
       
        <nav>
          <select className="border p-1 rounded cursor-pointer">
            <option value="th">TH</option>
            <option value="lo">ລາວ</option>
            <option value="en">EN</option>
          </select>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center p-8 bg-white rounded-lg shadow-lg mx-4 mt-4">
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ຊ່ວຍທ່ານຫາແມ່ບ້ານຄຸນນະພາບໃກ້ບ້ານທ່ານ
          </h2>
          <div className="flex space-x-4 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2 cursor-pointer">
              <FaCheckCircle />
              <span>ຈອງແມ່ບ້ານ</span>
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2 cursor-pointer">
              <FaWhatsapp />
              <span>ຈອງເລີຍ</span>
            </button>
          </div>
          <p className="text-blue-600 mb-2">ດາວໂຫຼດແອັບໄດ້ແລ້ວທີ</p>
          <div className="flex space-x-2">
            <Image src={store}alt="Store" width={120} height={40} />
            <Image src={google}alt="google" width={120} height={40} />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-lg shadow-md">
            <Image src={maebarn} alt="meabarn.jpeg" width={300} height={300} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-500 text-white p-6 text-center mt-6">
        <h3 className="text-lg font-bold">ຄົ້ນຫາຜູ້ໃຫ້ບໍລິການພິເສດ</h3>
        <p>ເລືອກຜູ້ໃຫ້ບໍລິການດ້ວຍຕົວທ່ານເອງ</p>
      </footer>
    </div>
  );
}