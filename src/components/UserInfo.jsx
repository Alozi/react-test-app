import iconProfile from "../profile-icon.svg";
import iconEmail from "../profile-email.svg";

export default function UserInfo({ name, email, image }) {
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
    </div>
  );
}
