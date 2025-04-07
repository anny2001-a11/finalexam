"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ ถูกที่แล้ว
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      setLoading(true); // ✅ ใช้งานได้แล้ว เพราะอยู่ใน component

      setTimeout(() => {
        router.push("/service");
      }, 500);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      alert("ກາລຸນາໃສ່ອີເມວເເລະລະຫັດຜ່ານ");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 min-h-screen flex flex-col items-center"
    
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex items-center justify-between text-white bg-blue-500 w-full p-4"
      >
        <div className="flex items-center space-x-4">
          <span>Customer Service</span>
          <span>02096611479</span>
        </div>
        <span>Clean House</span>
      </motion.div>

      {/* Logo Header */}
      <motion.header
        className="bg-green-400 w-full p-4 flex justify-between items-center"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/houseclean.jpg" 
              alt="/houseclean" 
              width={80} 
              height={80}
              className="rounded-full border-2 border-white"
            />
          </motion.div>
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
        <motion.select 
          className="border p-1 rounded bg-white shadow-md"
          whileHover={{ scale: 1.05 }}
        >
           <option value="lo">🇱🇦 ລາວ</option>
            <option value="th">🇹🇭 ไทย</option>
            <option value="en">🇺🇸 English</option>
        </motion.select>
      </motion.header>

      {/* Login Form */}
      <motion.div
        id="loginForm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl p-8 rounded-lg mt-8 w-96 transform transition-all duration-300"
      >
        <motion.h2 
          className="text-center text-2xl font-bold mb-6"
          whileHover={{ scale: 1.05 }}
        >
          ເຂົ້າສູລະບົບ
        </motion.h2>

        {/* Social Login Buttons */}
        <motion.div
          className="space-y-3 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-800 text-white py-2 rounded flex items-center justify-center"
          >
            <FaFacebook className="mr-2" /> ເຂົ້າສູ່ລະບົບ Facebook
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-red-600 text-white py-2 rounded flex items-center justify-center"
          >
            <FaGoogle className="mr-2" /> ເຂົ້າສູລະບົບ Google
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-800 text-white py-2 rounded flex items-center justify-center"
          >
            <FaApple className="mr-2" /> ເຂົ້າສູລະບົບ Apple
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-gray-500">ຫຼື</span>
          </div>
        </div>

        {/* Email Input */}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          <label className="block font-bold mb-2">ອີເມວ</label>
          <motion.input
            type="text"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="ອີເມວ"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Password Input */}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-6"
        >
          <label className="block font-bold mb-2">ລະຫັດຜ່ານ</label>
          <motion.input
            type="password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="ລະຫັດຜ່ານ"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Login Button */}
        <motion.button
          onClick={handleLogin}
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
        >
          ເຂົ້າສູລະບົບ
        </motion.button>

        {/* Register Link */}
        <div className="mt-4 text-center">
          <Link href="/service" className="text-blue-600 hover:underline">
            ລົງທະບຽນບັນຊີໃໝ່
          </Link>
        </div>
      </motion.div>

      {/* Add custom animation styles */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </motion.div>
  );
}
