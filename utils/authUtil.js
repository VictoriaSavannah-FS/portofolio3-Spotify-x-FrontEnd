// need to sestup code to fetch data from backedn DB -------

import axios from "axios";
// frm my heroku live link ---
const API_BASE_URL = "https://spotify-x-6a1279a783f3.herokuapp.com/";

/**
 *
 * TO DO -----
 * fetch data from teh diff. api endpoints
 * 1.fetch profile
 * 2.fetch Playlists
 * 3. fetch top tracks
 */

// FETCH PROFILE DATA -----
const fetchProfile = async () => {
  // tyrcatch block res. + error hanlder
  try {
    const response = await axios.get(`${API_BASE_URL}/user`);
    // log errors
    console.log("Profil data return:", response.data);
    // return res. data
    return response.data;
  } catch (error) {
    // lgo erors
    console.error("Error--- Could NOT FETCH User Profile", error.response);

    return null;
  }
};

// FETCH PLAYLIST DATA ----- TOP 5 PLAYLISTS

const fetchPlaylists = async () => {
  // trycahth - target correct endpoint api
  try {
    //https://developer.spotify.com/documentation/web-api/reference/get-a-list-of-current-users-playlists
    const response = await axios.get(`${API_BASE_URL}me/playlists?limit=5`);
    // log
    console.log("Playlsit data res.:", response.data);
    // return res.items inside teh data---isndie the lsits array
    return response.data.items;
  } catch (error) {
    // log error
    console.error("Error--- Couldnt Fetch Top Playlists ---"), error.response;

    return null;
  }
};

// Fetch top 5 tracsk ----
const fetchTracks = async () => {
  // trycatch
  try {
    // target correct endpoint
    const response = await axios.get(`${API_BASE_URL}me/top-tracks`);
    // return response.data.items;
    return response.data.items || [];
  } catch (error) {
    // lgo erro
    console.error("Error ---- Coulkd NOT fetch Top Tracks --- ", error);
    return null;
  }
};

export { fetchProfile, fetchPlaylists, fetchTracks };
