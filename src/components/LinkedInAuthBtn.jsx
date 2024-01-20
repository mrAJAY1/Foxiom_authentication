import { useLinkedIn } from "react-linkedin-login-oauth2";
import useSocialAuth from "../utils/useSocialAuth";

/**
 * Component for LinkedIn authentication button
 */
const LinkedInAuthBtn = () => {
  // Get the function to create LinkedIn session from useSocialAuth hook
  const { createLinkedInSession } = useSocialAuth();

  /**
   * Get the LinkedIn login function and its dependencies from the useLinkedIn hook
   * redirectUri is set to route /login/linkedin -
   * this is for the popup window. After submission, the popup window will send a code to the opener
   * which we will receive in onSuccess callback
   */
  const { linkedInLogin } = useLinkedIn({
    clientId: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
    redirectUri: `${window.location.origin}/login/linkedin`,
    scope: "email",
    // On successful LinkedIn login, create a LinkedIn session
    onSuccess: (code) => {
      createLinkedInSession(code);
    },
    // On error, log the error
    onError: (error) => {
      console.error(error);
    },
  });

  // Render the LinkedIn authentication button
  return (
    <button onClick={linkedInLogin} className="px-3 py-[2px]">
      <img
        className="h-[40px]"
        src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
        alt="In"
      />
    </button>
  );
};

export default LinkedInAuthBtn;
