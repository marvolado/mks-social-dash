import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  /* Check localstorage to set dark-mode checkbox on-off */
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  /* On checkbox change, update data-theme property from localstorage */
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };
  return (
    <div className="App">
      <header>
        <div>
          <h1>Social Media Dashboard</h1>
          <h3>Total Followers: 23,004</h3>
        </div>
        <div className="dm-toggle-wrap">
          <p>Dark Mode</p>
          <label>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => toggleThemeChange()}
            />
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
