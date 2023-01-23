import React, { useState,useContext,useEffect, useMemo } from "react";
import AuthContext from "./AuthProvider";
import Error from "./Error";


function Login() {
  const { setAuth } = useContext(AuthContext);
  const url = "https://dummyjson.com/auth/login'"

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [fetchData,setFetchData] = useState({
    data: null,
    isLoading: true,
    error: null
});
  const handleError = (email, password) => {
    if (email && password) {
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  let [LoginError, setLoginError] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    handleError(userLogin.email,userLogin.password)


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
      {LoginError && <Error errorMessage="Fill all the Details" />}
    </div>
  );
}

export default Login;
