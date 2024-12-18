import { auth } from "../firebase"; // Import Firebase setup
import { handleUserData } from "./handleUserData";

const generateUser = () => {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    console.error("No user is currently logged in.");
    return;
  }

  const userId = currentUser.uid;
  const userData = handleUserData(userId);
  console.log("Generated User Data:", userData);
  return userData; // Return user data for further use (e.g., upload)
};

export { generateUser };
