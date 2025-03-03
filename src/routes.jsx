// defeining my PAGE ROUTES ====================
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
// import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Navbar from "./components/navBar";
import PlaylistsPage from "./pages/Playlists";
/**CREATE ROUTES FOR
 * PAGES
 * home/login
 *
 * HOME/LOGIN
 */

const AppRoutes = () => {
  return (
    <Router>
      {/* adding navBar---- */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
