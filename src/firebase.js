import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB21Gl3F1XmFMiRCwoM1vvQ-3pwnNoaGC8",
  authDomain: "yousers-system.firebaseapp.com",
  projectId: "yousers-system",
  storageBucket: "yousers-system.firebasestorage.app",
  messagingSenderId: "446276385388",
  appId: "1:446276385388:web:dda43f620968066e7cf649",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
