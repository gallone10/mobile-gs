
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2d8CEZRUdGIBvMKNGp1T1ElxWK5m_PUk",
  authDomain: "gs-mobile-c54ce.firebaseapp.com",
  projectId: "gs-mobile-c54ce",
  storageBucket: "gs-mobile-c54ce.appspot.com",
  messagingSenderId: "167117992034",
  appId: "1:167117992034:web:c2293498f6fe7f11a6613b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);