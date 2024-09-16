import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Email: {user?.email}</p>
      <p>Name: {user?.name}</p>
    </div>
  );
};

export default Profile;
