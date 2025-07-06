
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-lite.js";

const firebaseConfig = {
  apiKey: "AIzaSyC02ToQfE3gEmHiIuyWS7zcJrx6sjGrOwo",
  authDomain: "tikfollowers-arabic.firebaseapp.com",
  projectId: "tikfollowers-arabic",
  storageBucket: "tikfollowers-arabic.firebasestorage.app",
  messagingSenderId: "432982642544",
  appId: "1:432982642544:web:d3baf2620bb5683cad49b5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
