import React from "react";

export default function ReviewPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
      <header className="bg-green-600 text-white w-full flex justify-between items-center p-4">
        <img src="/logo.png" alt="Clean House" className="h-10" />
        <span>Customer Service: 02096611479</span>
      </header>
      
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-lg font-semibold text-center">ເລືອກຜູ້ໃຫ້ບໍລິການດ້ວຍຄວາມເຄົາລົບ</h2>
        
        <div className="flex items-center border p-4 rounded-lg mt-4">
          <img src="/your-image-path.png" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <p className="font-bold">ນາງພັກ ຢູ່ບ້ານຕາມ</p>
            <p>ປະສົບການມາຫຼາຍປີ ສາມາດທຳຄວາມສະອາດໄດ້ດີ</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>
        
        <textarea className="w-full h-20 border p-2 rounded mt-4" placeholder="ໃຫ້ຄະແນນ..."></textarea>
        <textarea className="w-full h-20 border p-2 rounded mt-2" placeholder="ໃຫ້ຄຳເຫັນ..."></textarea>
        <button className="w-full bg-green-600 text-white p-3 rounded mt-4">ສົ່ງ</button>
      </div>
    </div>
  );
}