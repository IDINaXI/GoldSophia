import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Ваши данные конфигурации Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBoUszcItFSFDq1L43UWfKjGfSO-dMT6wA",
  authDomain: "goldsofa-c5fd7.firebaseapp.com",
  projectId: "goldsofa-c5fd7",
  storageBucket: "goldsofa-c5fd7.appspot.com",
  messagingSenderId: "434207081039",
  appId: "Q2BH44MZ0R"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Firestore
const db = getFirestore(app);

export { db };
