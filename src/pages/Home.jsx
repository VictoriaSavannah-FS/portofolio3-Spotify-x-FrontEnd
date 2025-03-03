import { Link } from "react-router-dom";
// import NavBAr ---
import Navbar from "../components/navBar";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.titles}>Spotify-X</h1>
      <p style={styles.text}> Login to explore your Spotify playlists.</p>
      <Navbar />
    </div>
  );
};

export default Home;

const styles = {
  container: {
    backgroundColor: "grey",
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  title: {
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "100px",
    marginbottom: "1rem",
    color: "white",
  },
  text: {
    fontSize: "1rem",
    border: "1rem",
    margin: "1rem",
  },
  //   button: {
  //     backgroundColor: "#1db954",
  //     color: "#f4ebbe",
  //     padding: "10px 4px",
  //     borderRadious: "6px",
  //     textDecoration: "none",
  //   },
};
