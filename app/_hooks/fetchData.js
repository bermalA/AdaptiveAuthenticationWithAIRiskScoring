import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const fetchUserData = async (userId) => {
  try {
    // Define Firestore document reference
    const docRef = doc(db, "user_data", userId);

    // Fetch the document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User data retrieved successfully:", docSnap.data());
      return docSnap.data();
    } else {
      console.error("No such document found for user:", userId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

export { fetchUserData };
