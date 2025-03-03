// impor useeffect
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://spotify-x-6a1279a783f3.herokuapp.com"; //api endpoit

const LoginPage = () => {
  const [Loading, setLoading] = useState(false); //laoding state
  const handleLogin = async () => {
    setLoading(true); //start @ load
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/login`);
      window.location.href = response.data.url; // Navigate after getting the URL
    } catch (error) {
      //lgo errors
      console.error("Error getting Spotify login URL:", error);
      alert("Failed to login with Spotify.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Spotify-X | Login</h1>
      <button onClick={handleLogin} disabled={loading}>
        {/* ternary/ logical-> if loading ".." if ! -> "Login..." */}
        {loading ? "Loading..." : "Login with Spotify"}
      </button>
    </div>
  );
};

export default LoginPage;
