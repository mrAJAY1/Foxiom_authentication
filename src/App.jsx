import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import { useContext } from "react";
import { userContext } from "./contexts/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useContext(userContext);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <div>Dashboard</div> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {/* LinkedIn callback */}
          <Route path="/login/linkedin" element={<LinkedInCallback />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
