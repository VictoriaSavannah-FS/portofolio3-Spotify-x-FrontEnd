// PROFILE PAGE ----
// import hooks ---
import { useState, useEffect } from "react";
// import authUtisl functions ---
import { fetchProfile } from "../../utils/authUtil";

const ProfilePage = () => {
  // defien hooks and state
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      // fetch suer prpfile data--- use fetchPRofiel function
      const profileData = await fetchProfile;
      // conditional if data retunr vs !data
      if (profileData) {
        setProfile(profileData); //updates state
      }
    };
    // if not fetch again
    getProfile();
  }, []); //run only on mount

  return (
    <div>
      {/* use ternary properties to check if params exist
      if = emaiil|name or !email|!name -- update useState ->else Loading"..."*/}
      <h1> SPOTIFY-X | User Profile </h1>;
      {profile ? (
        <div>
          <img
            // refernce the "images" prop.-> [0]-inside=> url
            src={profile.images?.[0]?.url || "default-profile.png"}
            alt="Profile"
            width="100"
          />
          <h2>{profile.display_name}</h2>
          <p>Email: {profile.email}</p>
          <p>Followers: {profile.followers?.total}</p>
          <a
            href={profile.external_urls?.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile on Spotify
          </a>
        </div>
      ) : (
        <p>Loading Profile ...</p>
      )}
    </div>
  );
};

export default ProfilePage;
