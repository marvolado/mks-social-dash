import React, { useEffect, useState } from 'react';
import './css/App.css';

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

  const openModal = () => {

  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="title-wrap">
            <h1>Social Media Dashboard</h1>
            <h3>Total Followers: 23,004</h3>
          </div>
          <div className="toggle-wrap">
            <label>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => toggleThemeChange()}
              /> Dark Mode
            </label>
          </div>
        </header>
        <main>

          <div className="big-cards">

            <div className="card facebook">
              <a onClick={() => { openModal() }}>
                <i className="ms-icon icon-facebook"></i>
                <em>@nathanf</em>
              </a>
              <h4>1987</h4>
              <p>FOLLOWERS</p>
              <span className="up"><i className="ms-icon icon-up"></i> 12 Today</span>
            </div>

            <div className="card twitter">
              <a onClick={() => { openModal() }}>
                <i className="ms-icon icon-twitter"></i>
                <em>@nathanf</em>
              </a>
              <h4>1044</h4>
              <p>FOLLOWERS</p>
              <span className="up"><i className="ms-icon icon-up"></i> 99 Today</span>
            </div>

            <div className="card instagram">
              <a onClick={() => { openModal() }}>
                <i className="ms-icon icon-instagram"></i>
                <em>realnathanf</em>
              </a>
              <h4>11k</h4>
              <p>FOLLOWERS</p>
              <span className="up"><i className="ms-icon icon-up"></i> 1099 Today</span>
            </div>

            <div className="card youtube">
              <a onClick={() => { openModal() }}>
                <i className="ms-icon icon-youtube"></i>
                <em>Nathan F.</em>
              </a>
              <h4>8239</h4>
              <p>SUBSCRIBERS</p>
              <span className="down"><i className="ms-icon icon-down"></i> 144 Today</span>
            </div>
          </div>

          <h2>Overview - Today</h2>
          <div className="overview-cards">
            <div className="card">
              <p>Page Views <i className="icon fb"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
            <div className="card">
              <p>Likes <i className="icon fb"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
            <div className="card">
              <p>Likes <i className="icon ig"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
            <div className="card">
              <p>Profile Views <i className="icon ig"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
            <div className="card">
              <p>Retweets <i className="icon tw"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
            <div className="card">
              <p>Likes <i className="icon tw"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
            <div className="card">
              <p>Likes <i className="icon yt"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
            <div className="card">
              <p>Total Views <i className="icon yt"></i></p>
              <h5><strong>87</strong><span className="up"></span></h5>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
