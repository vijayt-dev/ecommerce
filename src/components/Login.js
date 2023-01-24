import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import Error from "./Error";

function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const auth = useAuth();
  const handleError = ({ email, password }) => {
    if (email && password) {
      setLoginError(true);
      auth.setUser(userLogin);
      auth.login(userLogin);
    } else {
      setLoginError(false);
    }
  };

  let [isLogin, setLoginError] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    handleError(userLogin);
  };
  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
            value={userLogin.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
            value={userLogin.password}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-3">
            Login
          </button>
        </div>
      </form>
      {isLogin === false && <Error errorMessage="Fill all the Details" />}
    </div>
  );
}

export default Login;
