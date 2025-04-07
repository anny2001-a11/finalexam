'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaFacebook, FaStar } from 'react-icons/fa';
import { useState } from 'react';

import houseclean from '../images/house.png';
import maebarn from '../images/maebarn.jpeg';
import แม่1 from '../images/แม่1.jpg';

export default function Home() {
  const [rating, setRating] = useState(0);

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

      {/* Logo and title */}
      <div className="bg-green-400 w-full flex items-center justify-between p-4 px-6 border border-black">
        <div className="flex items-center space-x-4">
          <Image src={houseclean} alt="houseclean" width={50} height={50} className="rounded-full border border-black"/>
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
      </div>

      {/* Main content */}
      <button className="bg-white p-3 rounded shadow-md my-4 text-lg border border-black">
        ເລືອກຜູ້ໃຫ້ບໍລິການດ້ວຍຕົວທ່ານເອງ
      </button>

      <div className="bg-white rounded-lg shadow-lg p-4 my-4 w-full max-w-md border border-black">
        <div className="flex items-center space-x-4">
          <Image src={แม่1} alt="แม่1" width={100} height={120} className="rounded-full border border-black" />
          <div>
            <h2 className="font-bold text-lg">ນາງໄ່ກ່ ຫານາໄກ່</h2>
            <p className="text-1xl font-bold">ຢູ່ບ້ານ ພານທອງ ຈັນທະບູ ນະຄອນຫຼວງ</p>
            <p className="text-1xl font-bold">ຢູ່ບ້ານ ດອນກອຍ ເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງ</p>
            <p className="text-sm text-gray-600">ມີປະສົບການຫຼາຍກວ່າ 5 ປີ ສາມາດທຳຄວາມສະອາດບ້ານໄດ້ຢ່າງດີເຢັ້ມ</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rating Section */}
      <div className="bg-white rounded-lg shadow-lg p-4 my-4 w-full max-w-md border border-black">
        <div className="flex items-center space-x-4">
          <Image src={maebarn} alt="maebarn" width={100} height={120} className="rounded-full border border-black" />
          <div>
            <h2 className="text-lg font-semibold">ນາງພາ ນະຕອນ</h2>
            <p className="text-1xl font-bold">ຢູ່ບ້ານ ດອນກອຍ ເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງ</p>
            <p className='text-sm text-gray-600'>ມີປະສົບການຫຼາຍກວ່າ 5 ປີ ສາມາດທຳຄວາມສະອາດໄດ້</p>
            <div className="flex text-yellow-400">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 inline" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 my-4 w-full max-w-md border border-black">
        <div className="flex items-center space-x-4">
          <Image src={maebarn} alt="maebarn" width={100} height={120} className="rounded-full border border-black" />
          <div>
            <h2 className="text-lg font-semibold">ນາງພຶມ ພຶມນະພາ</h2>
            <p className="text-1xl font-bold">ຢູ່ບ້ານໂດນ ເມືອງສີສັດຕະນາກ ນະຄອນຫຼວງ</p>
            <p className='text-sm text-gray-600'>ມີປະສົບການຫຼາຍກວ່າ 10 ປີ ສາມາດທຳຄວາມສະອາດໄດ້</p>
            <div className="flex text-yellow-400">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 inline" />
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