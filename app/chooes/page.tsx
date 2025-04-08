'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaFacebook, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

import houseclean from '../images/house.png';
import maebarn from '../images/maebarn.jpeg';
import แม่1 from '../images/แม่1.jpg';
import newImage from '../images/Screenshot 2025-04-08 145910.png'; // ⬅️ เพิ่มภาพใหม่


export default function Home() {
  const [rating1, setRating1] = useState(5);
  const [rating2, setRating2] = useState(4);
  const [rating3, setRating3] = useState(3);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full bg-blue-500 text-white p-2 px-6 border border-black">
        <div className="flex items-center space-x-4">
          <span className="font-bold">Customer Service</span>
          <span className="flex items-center space-x-1">
            <FaPhone /> <span>02096611479</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaFacebook /> <span>Clean House</span>
          </span>
        </div>
        <select className="border p-1 rounded cursor-pointer bg-white text-black">
          <option value="th">TH</option>
          <option value="lo">ລາວ</option>
          <option value="en">EN</option>
        </select>
      </div>
        
      {/* Logo Header */}
      <motion.header 
        className="bg-green-400 w-full p-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">

            <Image 
              src={houseclean} 
              alt="Clean House Logo" 
              width={80} 
              height={80}
              className="rounded-full border-2 border-white"
            />
            </div>
          </motion.div>
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
        <select className="border p-1 rounded bg-white shadow-md">
          <option value="lo">🇱🇦 ລາວ</option>
          <option value="th">🇹🇭 ไทย</option>
          <option value="en">🇺🇸 English</option>
        </select>
      </motion.header>

      {/* Service Selection */}
      <button className="bg-white p-3 rounded shadow-md my-4 text-lg border border-black">
        ເລືອກຜູ້ໃຫ້ບໍລິການດ້ວຍຕົວທ່ານເອງ
      </button>

      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg p-4 my-4 w-full max-w-md border border-black">
        <div className="flex items-center space-x-4">
          <Image src={แม่1} alt="แม่บ้าน 1" width={100} height={120} className="rounded-full border border-black" />
          <div>
            <h2 className="font-bold text-lg">ນາງໄ່ກ່ ຫານາໄກ່</h2>
            <p className="text-1xl font-bold">ຢູ່ບ້ານ ພານທອງ ຈັນທະບູ ນະຄອນຫຼວງ</p>
            <p className="text-1xl font-bold">ຢູ່ບ້ານ ດອນກອຍ ເມືອງສີສັດຕະນາກ</p>
            <p className="text-sm text-gray-600">ປະສົບການ 5 ປີ ທຳຄວາມສະອາດດີເຢັ້ມ</p>
            <div className="flex text-yellow-400">
              {[...Array(rating1)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg p-4 my-4 w-full max-w-md border border-black">
        <div className="flex items-center space-x-4">
          <Image src={maebarn} alt="maebarn" width={100} height={120} className="rounded-full border border-black" />
          <div>
            <h2 className="text-lg font-semibold">ນາງພາ ນະຕອນ</h2>
            <p className="text-1xl font-bold">ຢູ່ບ້ານ ດອນກອຍ ເມືອງສີສັດຕະນາກ</p>
            <p className='text-sm text-gray-600'>ປະສົບການ 5 ປີ ທຳຄວາມສະອາດໄດ້</p>
            <div className="flex text-yellow-400">
              {[...Array(rating2)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg p-4 my-4 w-full max-w-md border border-black">
        <div className="flex items-center space-x-4">
          <Image src={maebarn} alt="แม่บ้าน 3" width={100} height={120} className="rounded-full border border-black" />
          <div>
            <h2 className="text-lg font-semibold">ນາງພອອນທິບ ທິບມະຫາ</h2>
            <p className="text-1xl font-bold">ຢູ່ບ້ານແປງ ເມືອງສີສັດຕະນາກ</p>
            <p className='text-sm text-gray-600'>ປະສົບການ 8ປີ ທຳຄວາມສະອາດໄດ້</p>
            <div className="flex text-yellow-400">
              {[...Array(rating3)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ปุ่มลิงก์ไปหน้าอื่น */}
      <Link href="/details" className="text-blue-600 hover:text-blue-800 transition-colors">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg border border-black mt-4">
          ເບິ່ງລາຍການບໍລິການ
        </button>
      </Link>

      {/* ปุ่มถัดไป */}
      <button className="bg-gray-300 text-black py-2 px-6 rounded-lg border border-black mt-2">
        ຖັດໄປ
      </button>
    </div>
  );
}
