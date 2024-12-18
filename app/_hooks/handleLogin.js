import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { fetchUserData } from "./fetchData";
import { predict } from "./predict"; // predict fonksiyonunu içe aktar

const handleLogin = async (email, password) => {
  try {
    // Step 1: Authenticate the user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);

    // Step 2: Fetch user data from Firestore
    const userData = await fetchUserData(user.uid);

    if (userData) {
      console.log("Fetched user data:", userData);
      
      // Step 3: Run prediction
      console.log("Running prediction...");
      const predictionResult = await predict(user.uid); // Predict çağır ve user.uid'i gönder
      console.log("Prediction result:", predictionResult);

      // Örneğin: Prediction sonucunu return edebilir veya başka bir yerde işleyebilirsin
      return { userData, prediction: predictionResult };
    } else {
      console.error("No user data found for this user.");
    }
  } catch (error) {
    console.log("Error logging in:", error.message);
    throw error; // Hata yönetimi için tekrar fırlatabilirsiniz
  }
};

export { handleLogin };
