import React from "react";
import { useAuth } from "./AuthProvider";
function Profile() {
  const auth = useAuth();
  const user = JSON.parse(auth.getUserLogin());
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p className="card-text">Email: {user.email}</p>
          <p className="card-text">Password: {user.password}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
