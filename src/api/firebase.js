import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8IDQmTyBBJUfxtP_meAqfu0XPIs7WLU0",
  authDomain: "bringshop-4b25e.firebaseapp.com",
  databaseURL:
    "https://bringshop-4b25e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bringshop-4b25e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function logout() {
  return signOut().then(() => null);
}

export async function getPictures() {
  try {
    const snapshot = await get(database);
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching pictures:", error);
    throw error;
  }
}
