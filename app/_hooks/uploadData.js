import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure db points to Firestore

const uploadDataToFirestore = async (userId, data) => {
  try {
    console.log("Firestore instance:", db); // Debugging
    console.log("User ID:", userId);

    // Create a reference to the Firestore document
    const docRef = doc(db, "user_data", userId);

    // Write data to Firestore
    await setDoc(docRef, {
      ...data,
      uploadedAt: new Date().toISOString(),
    });

    console.log("User data saved to Firestore successfully for user:", userId);
  } catch (error) {
    console.error("Error saving user data to Firestore:", error.message);
    throw error;
  }
};

export { uploadDataToFirestore };
