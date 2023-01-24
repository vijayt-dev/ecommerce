import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
function NavBar() {
  const auth = useAuth();
  const user = auth.getUserLogin();
  const handleClear = () => {
    auth.logout();
  };
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            OnShop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="cart" className="nav-link">
                  Cart
                </NavLink>
              </li>
              {user && (
                <li className="nav-item">
                  <NavLink to="profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                {user ? (
                  <button onClick={handleClear} className="btn btn-primary">
                    Logout
                  </button>
                ) : (
                  <NavLink to="login" className="nav-link">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
