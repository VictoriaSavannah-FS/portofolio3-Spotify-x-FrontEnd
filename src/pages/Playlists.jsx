// Playlists PAGE ----
import axios from "axios";
// import hoooks for state handlign
import { useState, useEffect } from "react";
// import authUtisl functions ---
import { fetchPlaylists } from "../../utils/authUtil";

const PlaylistsPage = () => {
  // defien hooks and state
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getPlaylists = async () => {
      // fetch suer prpfile data--- use fetch Playslist() function
      const playlistsData = await fetchPlaylists();
      // conditional if data retunr vs !data
      if (playlistsData) {
        setPlaylists(playlistsData); //updates state
      }
    };
    // if not fetch again
    getPlaylists();
  }, []); //run only on mount

  return (
    <div>
      {/* use ternary properties to check if data exist
      if length > 0 => exists -> then: map trhough array adn fetch playlist.data -- if ! / playlsit=0--> update NO playlist..."
       // params - spotify API ref. -- https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile

                /**Response sample
{
  "country": "string",
  "display_name": "string",
  "email": "string",
  "explicit_content": {
    "filter_enabled": false,
    "filter_locked": false
  },
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "href": "string",
  "id": "string",
  //------ IMG ----- playlsit cover
  "images": [
    {
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
      "height": 300,
      "width": 300
    }
  ],
  "product": "string",
  "type": "string",
  "uri": "string"
}s */}
      <h1> SPOTIFY-X | Top 5 Playlists </h1>;{/* Check if playlists exist */}
      {playlists.length > 0 ? (
        <ul>
          {/* map through--- */}
          {playlists.map((playlist) => (
            <li // assign key=unique id
              key={playlist.id}
              style={{ textAlign: "center" }}
            >
              {/* Show Palyslists Covers! ----- Img prop from array 
              go inside "images" array-check [0](actul 1)-> return url
              --> comer back and add a defalt pic for null??/ maybe not b/c from spotify....
              */}
              {playlist.images?.[0]?.url && (
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  style={{
                    width: "100px",
                    borderRadius: "12px",
                  }}
                />
              )}
              <br />
              {/* Palylist Name & Link ------  */}
              <a
                // makes link --> spotify playlist
                href={playlist.external_urls.spotify}
                target="_blank" // opens new page
                rel="noopener noreferrer" //security
                // style-hover/click
                style={{
                  color: "white",
                  fontSize: "small",
                  textDecoration: "none",
                  // hover{color:"white"}
                }}
              >
                {/* display plt name ----- */}
                {playlist.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Playlists Found ...</p>
      )}
    </div>
  );
};

export default PlaylistsPage;
