import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getAuth } from "firebase/auth"
import { v4 } from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyBxK_gUF8AawuhEKueZlkxd2ZkMQs6KXSg",
  authDomain: "react-crud-tailwindcss.firebaseapp.com",
  projectId: "react-crud-tailwindcss",
  storageBucket: "react-crud-tailwindcss.appspot.com",
  messagingSenderId: "416688360778",
  appId: "1:416688360778:web:58bd05c58f20cd88d145b3"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)

// export async function upLoadFiles(file) {
//   const storageRef = ref(storage, v4())
//   await uploadBytes(storageRef, file)
//   const URL = await getDownloadURL(storageRef)
//   return URL
// }

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }