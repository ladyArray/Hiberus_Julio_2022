import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDp3dI2P2tf_kwCf0OwscPSVm8-fnqUCdE",
  authDomain: "hiberus-react-ana.firebaseapp.com",
  projectId: "hiberus-react-ana",
  storageBucket: "hiberus-react-ana.appspot.com",
  messagingSenderId: "839982138425",
  appId: "1:839982138425:web:d9a6b9b947d0ee1db9b9e8"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
