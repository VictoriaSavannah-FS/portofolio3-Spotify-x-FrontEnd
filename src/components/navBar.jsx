// NAvBAr component---> add to pagess
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={styles.container}>
      <Link to="/login" style={styles.button}>
        Login
      </Link>
      <Link to="/profile" style={styles.button}>
        Profile
      </Link>
      <Link to="/playlists" style={styles.button}>
        Playlists
      </Link>
    </nav>
  );
};

export default Navbar;

// Styles --------

const styles = {
  container: {
    // backgroundColor: "#201e1f",
    textAlign: "center",
    height: "100vh", // Full page height
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    // margin: "14px",
    // color: "white",
    // color: "grey",
  },

  text: {
    fontSize: "1rem",
    border: "1rem",
    margin: "1rem",
  },
  button: {
    backgroundColor: "#1db954",
    color: "#f4ebbe",
    padding: "12px 3rem",
    margin: "1rem",
    borderRadius: "6px",
    textDecoration: "none",
  },
  // hover: syles
  buttonHover: {
    // Drker greeen ---
    backgroundColor: "#17a34a",
  },
};
