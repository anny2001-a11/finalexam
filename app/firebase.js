// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// 🔹 ใส่ค่าคอนฟิกของ Firebase ของคุณ
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// 🔹 ตรวจสอบว่ามีการ Initialize Firebase แล้วหรือไม่
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 🔹 ตั้งค่า Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
