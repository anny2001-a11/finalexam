"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaClock, FaHome, FaMoneyBillWave, FaStar } from "react-icons/fa";

export default function Detail() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [price, setPrice] = useState(350000);

  // ข้อมูล dropdown
  const locations = [
    "ບ້ານ +ຫ້ອງນອນຫນຶ່ງຫ້ອງ",
    "ບ້ານ + 2 ຫ້ອງນອນ",
    "ອາພາດເມັນ 1 ຫ້ອງນອນ",
    "ອາພາດເມັນ 2 ຫ້ອງນອນ"
  ];

  const times = ["2 ຊມ", "3 ຊມ", "4 ຊມ", "5 ຊມ", "6 ຊມ"];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="w-full p-2 bg-blue-400 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            
            <span className="font-bold">Customer Service</span>
          </div>
          
          <div className="flex items-center space-x-20">
            <span className="hidden sm:inline-block">020-966-11479</span>
            <span className="font-mono">Clean House</span>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <header className="w-full p-4 bg-green-400 text-white shadow-lg">{/*ບ່ອນປັບຄວາມແຈ້ງຂອງສີ*/}
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative w-13 h-10">
              
              <Image 
                src="/houseclean.jpg" 
                alt="houseclean" 
                width={80} 
                height={80}
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-white">Clean</h1> 
            <p className="text-xl font-bold text-white mt-10">House</p>

          </div>
          
          <select className="border  p-2 rounded-lg bg-white cursor-pointer bg-white text-black bg-opacity-90 shadow-md focus:ring-5 focus:ring-purple-500">

            <option value="lo">🇱🇦 ລາວ</option>
            <option value="th">🇹🇭 ไทย</option>
            <option value="en">🇺🇸 English</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-2xl my-8 px-4">
        {/* Title */}
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold text-gray-800">
            ບໍລິການທຳຄວາມສະອາດ
          </h1>
          <p className="text-blue-600 mt-2">
            ເລືອກບໍລິການທີ່ທ່ານຕ້ອງການ
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white border-opacity-30">
          {/* Location Selection */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <FaHome className="text-blue-500 mr-2 text-xl" />
              <h2 className="text-xl font-bold text-gray-800">
                ທ່ານຕ້ອງການໃຊ້ ສະຖານທີ່ໃດ
              </h2>
            </div>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border-2 border-blue-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="" disabled className="text-gray-500">
                ຊື່ບ້ານ ເມືອງ ເເຂວງ
              </option>
              {locations.map((loc, index) => (
                <option key={index} value={loc} className="text-gray-800">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Service Type */}
          <div className="mb-8">
            <p className="text-gray-600 mb-3 flex items-center">
              <FaHome className="text-green-500 mr-2" />
              ກະລຸນາເລືອກປະເພດໃຫ້ບໍລິການ...
            </p>
            <select
              className="border-2 border-blue-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map((loc, index) => (
                <option key={index} value={loc} className="text-gray-800">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <FaClock className="text-purple-500 mr-2 text-xl" />
              <p className="text-gray-600">ເເນະນຳ 2 ຊມ - 2ຊມ. 30 ນາທີ</p>
            </div>
            
            <ul className="list-disc list-inside text-gray-600 mb-4 pl-5">
              <li className="mb-1">1:30</li>
            </ul>
            
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="border-2 border-blue-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {times.map((time, index) => (
                <option key={index} value={time} className="text-gray-800">
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <FaCalendarAlt className="text-red-500 mr-2 text-xl" />
              <p className="text-gray-600">
                ທ່ານຕ້ອງການໃຊ້ບໍລິການນີ້ເມື່ອໃດ
              </p>
            </div>
            
            <p className="text-sm text-red-500 mb-2">
              *ບໍ່ລວມເວລາພັກຂອງພະນັດກງານ
            </p>
            
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border-2 border-blue-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Price Input */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <FaMoneyBillWave className="text-yellow-500 mr-2 text-xl" />
              <p className="text-gray-600">
                ຄ່າບໍລິການລວມທັງຫມົດ (ບໍ່ລວມພາສີ)
              </p>
            </div>
            
            <div className="relative">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="border-2 border-blue-200 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="0"
                step="1000"
              />
              <span className="absolute right-3 top-3 text-gray-500">
                LAK
              </span>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="text-center mt-10 mb-10">
          <Link href="/review" passHref>
            <button className="w-full p-4 bg-blue-500 text-white shadow-lg">
              ໜ້າຕໍ່ໄປ
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
