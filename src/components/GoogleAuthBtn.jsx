import { GoogleLogin } from "@react-oauth/google";
import useSocialAuth from "../utils/useSocialAuth";
import { toast } from "react-toastify";

// Define the GoogleAuthBtn component
const GoogleAuthBtn = () => {
  const { createGoogleSession } = useSocialAuth(); // Call the useSocialAuth hook to get the createGoogleSession function

  // Return the GoogleLogin component with the specified props
  return (
    <GoogleLogin
      onSuccess={createGoogleSession} // Specify the onSuccess callback function to be createGoogleSession
      onError={() => toast("Login failed", { type: "error" })} // Specify the onError callback function to notify "login failed"
      type="icon" // Specify the type prop as "icon"
      shape="circle" // Specify the shape prop as "circle"
    />
  );
};

export default GoogleAuthBtn;
