import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ຂໍ້ມູນຂອງລະບົບ House Clean</title>
        <meta name="description" content="ข้อมูลเกี่ยวกับบริษัทและทีมงานของเรา" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">ຂໍ້ມູນຂອງບໍລິສັດ House Clean</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">ລະບົບຂອງເຮົາຈະມີຫນ້າ
            Home.login.chooes.service.details.review.about</h2>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">ຫົວຂໍອະທິບາຍຂອງລະບົບ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ทีมงานตัวอย่าง */}
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <p className="text-gray-500 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
          ← ກັບໄປຫນ້າແລກ
        </Link>
      </main>
    </div>
  );
};

// ข้อมูลทีมงานตัวอย่าง
const teamMembers = [
  {
    name: "ທ້າວອາເຫວີນ ໄຊທອງເດດ",
    position: "ຮັບຜິດຊອບທຸກໜ້າຊ່ວຍກັນ",
  },
  {
    name: "ນາງອັນນີ ເຮືອງປະເສິດ",
    position: "ຮັບຜິດຊອບທຸກໜ້າຊ່ວຍກັນ",
  },
  {
    name: "ທ້າວວາເລັນທາຍ ກິງສະດາ",
    position: "",

  },
  
];

export default About;

  
