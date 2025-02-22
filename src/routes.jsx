// defeining my PAGE ROUTES ====================
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomeLogin";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Navbar from "./components/navBar";
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
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
