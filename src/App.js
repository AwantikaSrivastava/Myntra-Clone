import React, { useState, createContext, useContext } from "react";
import "./App.css";
import Cart from "./components/Cart/cart";
import List from "./components/List/List";
import Login from "./components/Login/Login";
import Offer from "./components/Offer/Offer";
import { ThemeContext } from "./context/themeContext";

import logo from "./images/myntra-logo.png";

export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')));

  const value = useContext(ThemeContext);
  const handleLogout = () => {
    localStorage.removeItem('user')
    setUserData(null)
  }

  return (
    <div className={`App ${value.theme}`}>
      {!userData ? (
        <Login setUserData={setUserData} />
      ) : (
        <>
          <header>
            <img src={logo} alt="img" />
            <div className="right-header">
              <Offer />
              <Cart />
              <label className="switch">
                <input type="checkbox" onChange={value.toggleTheme} />
                <span className="slider round"></span>
              </label>
              <button
                href=""
                className="logout-linkButton"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </header>
          <div className="body-container">
            <UserContext.Provider value={{ userData, setUserData }}>
              <List />   
            </UserContext.Provider>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
