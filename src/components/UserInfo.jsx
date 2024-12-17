import { useEffect } from "react";

import iconProfile from "../profile-icon.svg";
import iconEmail from "../email-icon.svg";
import iconLogout from "../logout-icon.svg";

import { getUserInfo, userLogout } from "../server.js";

export default function UserInfo({
  accessToken,
  setUser,
  name,
  email,
  image,
  setIsUserAuthorized,
}) {
  useEffect(() => {
    getUserInfo(accessToken, setUser);
  }, []);

  function handleClick() {
    console.log("test");
    userLogout(accessToken, setUser, setIsUserAuthorized);
  }

  return (
    <div className="user-profile">
      <img src={image} alt="User" />
      <div>
        <p>
          <img className="icon" src={iconProfile} alt="Profile icon" />
          {name}
        </p>
        <p>
          <img className="icon" src={iconEmail} alt="Profile icon" />
          {email}
        </p>
      </div>
      <button onClick={handleClick}>
        Logout <img className="icon" src={iconLogout} alt="Logout icon" />
      </button>
    </div>
  );
}
