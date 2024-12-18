import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { generateUser } from "./generateUser";
import { uploadDataToFirestore } from "./uploadData";

const handleSignup = async (email, password) => {
  try {
    // Step 1: Sign up the user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up successfully:", user);

    // Step 2: Generate user-specific data
    const userData = generateUser(user.uid);

    // Step 3: Save the data directly to Firestore
    await uploadDataToFirestore(user.uid, userData);

    console.log("User data saved to Firestore successfully.");
  } catch (error) {
    console.error("Error during signup process:", error.message);
    throw error;
  }
};

export { handleSignup };
