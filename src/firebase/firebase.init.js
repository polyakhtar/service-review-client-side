// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN ,
  projectId:process.env.REACT_APP_PROJECID ,
  storageBucket:process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  appId:process.env.REACT_APP_APPID , 
  measurementId:process.env.REACT_APP_MEASUREMENTID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBGfo_E6RnShlETBKk4r0s06d45txI7MnU",
//   authDomain: "wedding-photographer-ass.firebaseapp.com",
//   projectId: "wedding-photographer-ass",
//   storageBucket: "wedding-photographer-ass.appspot.com",
//   messagingSenderId: "1022181392292",
//   appId: "1:1022181392292:web:36565400281e2ce7140b31",
//   measurementId: "G-YQWKNQD98Q"
// };
// console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;