import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/cart";
import List from "./components/List/List";
import Login from "./components/Login/Login";
import { ThemeContext } from "./context/themeContext";

import logo from "./images/myntra-logo.png";

export const UserContext = React.createContext();

function App() {
  const [userData, setUserData] = useState(null);

  const value = React.useContext(ThemeContext);

  return (
    <div className={`App ${value.theme}`}>
      {!userData ? (
        <Login setUserData={setUserData} />
      ) : (
        <>
          <header>
            <img src={logo} alt="img" />
            <div className="right-header">
              <Cart />
              <label className="switch">
                <input type="checkbox" onChange={value.toggleTheme} />
                <span className="slider round"></span>
              </label>
              <button
                href=""
                className="logout-linkButton"
                onClick={() => setUserData(null)}
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
