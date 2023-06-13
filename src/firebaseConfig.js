import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  // Thay thế bằng thông tin cấu hình Firebase của bạn
  apiKey: "AIzaSyDAR7JVwzG1u7RjZjf7QysaG9SwaP2-tIM",
  authDomain: "shop-reactjs-b9ad2.firebaseapp.com",
  projectId: "shop-reactjs-b9ad2",
  storageBucket: "shop-reactjs-b9ad2.appspot.com",
  messagingSenderId: "133794477623",
  appId: "1:133794477623:web:ac981c1bde9e6c0b9f71b2",
  measurementId: "G-JW6MH1SR9G",
};
// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export default app;
// const analytics = getAnalytics(app);
 firebase.initializeApp(firebaseConfig);
 export default firebase;
// export {app as firebase} ;const app =

//db
// const db = getAnalytics(app);
// export {db}

// export const auth = firebase.auth();
