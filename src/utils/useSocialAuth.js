import { useContext } from "react";
import { userContext } from "../contexts/userContext";
import { toast } from "react-toastify";

// Custom hook for handling user authentication
const useAuth = () => {
  // Accessing user and setUser from userContext
  const { user, setUser } = useContext(userContext);

  // Function to create a session with the server
  const createSession = async (url, body) => {
    // Check if user is logged in
    if (!user) {
      try {
        // Send POST request to the specified url
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        // If request is successful, update user data
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else if (res.status === 401) {
          // If unauthorized, reset user and notify the user
          setUser(null);
          toast("You need to create an account first");
        }
      } catch (e) {
        // Log any errors that occur during the request
        console.error(e);
      }
    }
  };

  // Function to create a session using Google authentication
  // Expecting the server to send Refresh Tokens and Access Tokens in http only cookies.

  /**
   * expects a token from Google and sends it to the
   * specific endpoint of the server.
   * expects the user data in the response body
   *
   * @param {String} credential
   * @returns {void}
   */
  const createGoogleSession = (credential) =>
    createSession("/api/auth/google", { token: credential });

  // Function to create a session using LinkedIn authentication
  /**
   * expects an authorization code from LinkedIn and sends it to the
   * specific endpoint of the server.
   * expects the user data in the response body
   * here, the backend uses the code to get the access token,
   * which is then used to get the user data
   *
   * @param {String} code
   * @returns {void}
   */
  const createLinkedInSession = (code) =>
    createSession("/api/auth/linkedin", { code });

  // Return user data, setUser function, and session creation functions
  return { user, setUser, createGoogleSession, createLinkedInSession };
};

export default useAuth;
