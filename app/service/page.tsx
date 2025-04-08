"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaTimes, FaArrowRight, FaShoppingCart } from "react-icons/fa";

export default function Detail() {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const services = [
    { id: 1, name: "ທຳຄວາມສະອາດບ້ານ", image: "/l1.jpeg", popular: true },
    { id: 2, name: "ທຳຄວາມສະອາດຫ້ອງນອນ", image: "/l2.jpeg", popular: false },
    { id: 3, name: "ທຳຄວາມສະອາດຫ້ອງນ້ຳ", image: "/l3.jpg", popular: true },
    { id: 4, name: "ທຳຄວາມສະອາດຄົວ", image: "/a1.jpeg", popular: false },
    { id: 5, name: "ລ້າງເຄື່ອງນຸ່ງ", image: "/a2.jpeg", popular: true },
    { id: 6, name: "ທຳຄວາມສະອາດຫຼັງຄາ", image: "/a3.jpg", popular: false }
  ];

  const toggleService = (serviceId: number) => {
    setSelectedItems((prev) =>
      prev.includes(serviceId) ? prev.filter(id => id !== serviceId) : [...prev, serviceId]
    );
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleConfirm = () => {
    if (selectedItems.length === 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      router.push("/chooes");
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white bg-blue-500 w-full p-2 px-6 text-sm">
        <span>Customer Service</span>
        <span>📞 02096611479</span>
        <span>🧹 Clean House</span>
      </div>

      {/* Logo & Language */}
      <motion.header 
        className="bg-green-400 w-full p-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
              <Image src="/houseclean.jpg" alt="Clean House Logo" width={80} height={80} className="object-cover" />
            </div>
          </motion.div>
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
        <select className="border p-1 rounded bg-white shadow-md text-sm">
          <option value="lo">🇱🇦 ລາວ</option>
          <option value="th">🇹🇭 ไทย</option>
          <option value="en">🇺🇸 English</option>
        </select>
      </motion.header>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center my-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">ບໍລິການທົ່ວໄປທີ່ນິຍົມ</h2>
        <motion.p animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="text-sm text-gray-600">
          ເລືອກບໍລິການທີ່ທ່ານຕ້ອງການ
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className={`relative p-4 rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
              selectedItems.includes(service.id)
                ? "bg-gradient-to-br from-blue-50 to-blue-100 ring-2 ring-blue-400"
                : "bg-white"
            }`}
            onClick={() => toggleService(service.id)}
          >
            {service.popular && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-6 py-1 rotate-[-45deg] translate-x-8 -translate-y-2">
                ນິຍົມ
              </div>
            )}
            <div className="flex flex-col items-center">
              <div className="relative w-full h-40 overflow-hidden rounded-lg">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-medium text-center text-gray-800">{service.name}</h3>
            </div>
            <div className="absolute top-2 right-2">
              {selectedItems.includes(service.id) ? (
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <FaCheck size={12} />
                </div>
              ) : (
                <div className="border border-gray-300 rounded-full w-6 h-6" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Cart */}
      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-xl z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {selectedItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <motion.div
        className={`mt-8 mb-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${shake ? "animate-shake" : ""}`}
        animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => router.push("/service")}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg flex items-center justify-center space-x-2"
        >
          <FaTimes />
          <span>ຍົກເລີກ</span>
        </motion.button>

        <motion.button
          onClick={handleConfirm}
          disabled={isLoading || selectedItems.length === 0}
          whileHover={selectedItems.length > 0 ? { scale: 1.05 } : {}}
          whileTap={selectedItems.length > 0 ? { scale: 0.95 } : {}}
          className={`px-6 py-3 rounded-lg shadow-lg flex items-center justify-center space-x-2 ${
            selectedItems.length > 0
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
              </svg>
              ກຳລັງປະມວນຜົນ...
            </>
          ) : (
            <>
              <span>ຕົກລົງ (ເລືອກ {selectedItems.length} ລາຍການ)</span>
              <FaArrowRight />
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              y: [-20, 1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Shake Animation */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
