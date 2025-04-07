"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaQuoteLeft, FaUser, FaThumbsUp, FaShare, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import houseclean from '../images/house.png';
export default function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Avern Saythongdeth",
      comment: "ບໍລິການດີ ສະອາດ ໄວທັນໃຈ",
      rating: 5,
      date: "2023-05-15",
      likes: 24,
      liked: false,
      shares: 5
    },
    {
      id: 2,
      name: "Avern",
      comment: "ເຮັດວຽກດີ ໄວກ້າມໃຫຍ່ພ້ອມ",
      rating: 5,
      date: "2023-05-10",
      likes: 18,
      liked: false,
      shares: 3
    },
    {
      id: 3,
      name: "Aiy gay thae",
      comment: "ເຮັດວຽກດີ ເສຍຢ່າງດຽວມັກເບິ່ງກ້າມເຈົ້ານາຍ",
      rating: 1,
      date: "2023-04-28",
      likes: 2,
      liked: false,
      shares: 1
    },
    {
      id: 4,
      name: "Phothasone",
      comment: "ໄວທັນໄຈ ເສຍຢ່າງດຽວກ້າມນ້ອຍກ່ອນອາເຫວີນ",
      rating: 1,
      date: "2023-04-20",
      likes: 5,
      liked: false,
      shares: 2
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 0
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Animation variants
  const reviewVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const reviewToAdd = {
        id: reviews.length + 1,
        ...newReview,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        liked: false,
        shares: 0
      };
      setReviews([reviewToAdd, ...reviews]);
      setNewReview({ name: "", comment: "", rating: 0 });
      setIsLoading(false);
      
      // Scroll to the new review
      document.getElementById(`review-${reviewToAdd.id}`)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 1000);
  };

  const handleLike = (id) => {
    setReviews(reviews.map(review => {
      if (review.id === id) {
        return {
          ...review,
          likes: review.liked ? review.likes - 1 : review.likes + 1,
          liked: !review.liked
        };
      }
      return review;
    }));
  };

  const handleShare = (id) => {
    setReviews(reviews.map(review => {
      if (review.id === id) {
        return {
          ...review,
          shares: review.shares + 1
        };
      }
      return review;
    }));
    alert("ຂໍຂອບໃຈທີ່ແບ່ງປັນລິວິວນີ້!");
  };

  const filteredReviews = activeFilter === "all" 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(activeFilter));

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center space-x-20 text-white bg-blue-500 w-full p-1">
        <span className="flex items-center space-x-2 pr-20 pl-20">
          <span>Customer Service</span>
        </span>
        <span className="flex items-center space-x-2">
          <span>02096611479</span>
        </span>
        <span className="flex items-center space-x-2">
          <span>Clean House</span>
        </span>
      </div>
      
      <header className="bg-green-400 w-full p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/houseclean.jpg" alt="Clean House Logo" width={50} height={50} />
          <h1 className="text-xl font-bold text-purple-700">Clean House</h1>
        </div>
        <select className="border p-1 rounded">
          <option value="th">TH</option>
          <option value="en">EN</option>
          <option value="lo">Lao</option>
        </select>
      </header>

      <div className="w-full max-w-4xl px-4 py-8">
        {/* Hero Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">ລິວິວຈາກລູກຄ້າ</h1>
          <p className="text-xl text-gray-600">ເເມ່ບ້ານໃຫ້ບໍລິການຫຼາຍກວ່າ 100,000 ຄັ້ງ</p>
          
          {/* Average Rating with Pulse Animation */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-6 flex justify-center items-center"
          >
            <div className="text-4xl font-bold text-yellow-500 mr-4">
              {averageRating.toFixed(1)}
            </div>
            <div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star} 
                    className={`text-${star <= Math.round(averageRating) ? 'yellow' : 'gray'}-500 text-xl`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mt-1">ຈາກທັງຫມົດ {reviews.length} ລີວິວ</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Review Form with Floating Labels */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">ຂຽນລິວິວຕາມຄວາມພໍໃຈ</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="text"
                className="w-full p-2 border rounded peer"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                required
              />
              <label className="absolute left-2 top-2 px-1 transition-all duration-200 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:bg-white peer-focus:text-blue-500
                peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-white">
                ຊື່ຂອງທ່ານ
              </label>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">ໃຫ້ຄະເເນນ</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    type="button"
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl focus:outline-none"
                    onClick={() => setNewReview({...newReview, rating: star})}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    {star <= (hover || newReview.rating) ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaRegStar className="text-gray-300" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="mb-4 relative">
              <textarea
                className="w-full p-2 border rounded peer"
                rows="4"
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                required
              ></textarea>
              <label className="absolute left-2 top-2 px-1 transition-all duration-200 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:bg-white peer-focus:text-blue-500
                peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-white">
                ຄວາມຄິດເຫັນ
              </label>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
              className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center ${isLoading ? 'opacity-70' : 'hover:bg-blue-600'}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  ກຳລັງສົ່ງ...
                </>
              ) : (
                "ສົ່ງລິວິວຂອງທ່ານ"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {['all', '5', '4', '3', '2', '1'].map((filter) => (
            <motion.button
              key={filter}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full ${activeFilter === filter ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'ທັງໝົດ' : `${filter} ດາວ`}
            </motion.button>
          ))}
        </div>

        {/* Reviews List with Animation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">ລິວິວລາສຸດ</h2>
          
          <AnimatePresence>
            {filteredReviews.map((review) => (
              <motion.div
                key={review.id}
                id={`review-${review.id}`}
                variants={reviewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="bg-gray-200 rounded-full p-3 mr-4">
                    <FaUser className="text-gray-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        star <= review.rating ? (
                          <FaStar key={star} className="text-yellow-500" />
                        ) : (
                          <FaRegStar key={star} className="text-gray-300" />
                        )
                      ))}
                    </div>
                    <div className="relative">
                      <FaQuoteLeft className="text-gray-300 text-2xl absolute -left-6 -top-2" />
                      <p className="text-gray-700 pl-4">{review.comment}</p>
                    </div>
                    
                    {/* Review Actions */}
                    <div className="flex justify-end space-x-4 mt-4">
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        className={`flex items-center space-x-1 ${review.liked ? 'text-red-500' : 'text-gray-500'}`}
                        onClick={() => handleLike(review.id)}
                      >
                        <FaHeart />
                        <span>{review.likes}</span>
                      </motion.button>
                      
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-gray-500"
                        onClick={() => handleShare(review.id)}
                      >
                        <FaShare />
                        <span>{review.shares}</span>
                      </motion.button>
                      
                    </div>

                  </div>
                </div>

              </motion.div>
              
              

            ))}
          </AnimatePresence>
          <AnimatePresence>
  
    

</AnimatePresence>

{/* ปุ่มลิงก์ไปหน้าถัดไป */}
<div className="flex justify-center mt-6">
  <Link href="/next">
    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg border border-blue-700 hover:bg-blue-600 transition">
      ຖັດໄປ
    </button>
  </Link>
</div>

          
        </div>

      </div>
      
    </div>
  );
}