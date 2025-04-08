"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaHome,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function Detail() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [price, setPrice] = useState(350000);

  const locations = [
    "ບ້ານ +ຫ້ອງນອນຫນຶ່ງຫ້ອງ",
    "ບ້ານ + 2 ຫ້ອງນອນ",
    "ອາພາດເມັນ 1 ຫ້ອງນອນ",
    "ອາພາດເມັນ 2 ຫ້ອງນອນ",
  ];

  const times = ["2 ຊມ", "3 ຊມ", "4 ຊມ", "5 ຊມ", "6 ຊມ"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center font-sans">
      {/* Header */}
      <header className="w-full bg-blue-500 text-white shadow-md py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">Customer Service</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span>📞 020-966-11479</span>
            <span className="font-mono tracking-wider">Clean House</span>
          </div>
        </div>
      </header>

      {/* Logo & Language */}
      <div className="w-full bg-green-500 text-white shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/houseclean.jpg"
              alt="logo"
              width={60}
              height={60}
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">Clean</h1>
              <p className="text-sm -mt-1">House</p>
            </div>
          </div>

          <select className="p-2 rounded-lg bg-white text-black shadow-md focus:ring-2 focus:ring-purple-400">
            <option value="lo">🇱🇦 ລາວ</option>
            <option value="th">🇹🇭 ไทย</option>
            <option value="en">🇺🇸 English</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <main className="w-full max-w-2xl mt-8 px-6 space-y-10">
        {/* Title */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">ບໍລິການທຳຄວາມສະອາດ</h2>
          <p className="text-blue-600 mt-2 text-lg">
            ເລືອກບໍລິການທີ່ທ່ານຕ້ອງການ
          </p>
        </section>

        <div className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200 space-y-6">
          {/* Location */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
              <FaHome className="text-blue-500" />
              ທ່ານຕ້ອງການໃຊ້ບ່ອນໃດ
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full border-2 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                ຊື່ບ້ານ ເມືອງ ເເຂວງ
              </option>
              {locations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Service */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
              <FaHome className="text-green-500" />
              ປະເພດບໍລິການ
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full border-2 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                ເລືອກປະເພດບໍລິການ...
              </option>
              {locations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Time */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
              <FaClock className="text-purple-500" />
              ເວລາໃຊ້ບໍລິການ (ແນະນຳ 2 ຊມ - 2 ຊມ 30 ນາທີ)
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full border-2 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {times.map((time, idx) => (
                <option key={idx} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="flex items-center gap-2 mb-1 font-semibold text-gray-700">
              <FaCalendarAlt className="text-red-500" />
              ວັນທີໃຊ້ບໍລິການ
            </label>
            <p className="text-sm text-red-400 mb-2">
              *ບໍ່ລວມເວລາພັກຂອງພະນັກງານ
            </p>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border-2 border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-semibold text-gray-700">
              <FaMoneyBillWave className="text-yellow-500" />
              ລາຄາລວມ (ບໍ່ລວມພາສີ)
            </label>
            <div className="relative">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full border-2 border-gray-200 p-3 rounded-lg pr-14 focus:ring-2 focus:ring-blue-500"
                min="0"
                step="1000"
              />
              <span className="absolute top-3 right-4 text-gray-500">LAK</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6"
        >
          <Link href="/review">
            <button className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300">
              ໜ້າຕໍ່ໄປ
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
