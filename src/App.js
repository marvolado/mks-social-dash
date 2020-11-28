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

        <section className="big-cards">
          <div className="card facebook" onClick={() => { openModal() }}>
            <small>
              <i className="ms-icon icon-facebook"></i>
              <em>@nathanf</em>
            </small>
            <h4>1987</h4>
            <p>FOLLOWERS</p>
            <span className="up"><i className="ms-icon icon-up"></i> 12 Today</span>
          </div>

          <div className="card twitter" onClick={() => { openModal() }}>
            <small>
              <i className="ms-icon icon-twitter"></i>
              <em>@nathanf</em>
            </small>
            <h4>1044</h4>
            <p>FOLLOWERS</p>
            <span className="up"><i className="ms-icon icon-up"></i> 99 Today</span>
          </div>

          <div className="card instagram" onClick={() => { openModal() }}>
            <small>
              <i className="ms-icon icon-instagram"></i>
              <em>realnathanf</em>
            </small>
            <h4>11k</h4>
            <p>FOLLOWERS</p>
            <span className="up"><i className="ms-icon icon-up"></i> 1099 Today</span>
          </div>

          <div className="card youtube" onClick={() => { openModal() }}>
            <small>
              <i className="ms-icon icon-youtube"></i>
              <em>Nathan F.</em>
            </small>
            <h4>8239</h4>
            <p>SUBSCRIBERS</p>
            <span className="down"><i className="ms-icon icon-down"></i> 144 Today</span>
          </div>
        </section>

        <h2>Overview - Today</h2>
        <section className="overview-cards">
          {/* Facebook */}
          <div className="card">
            <p>
              <strong>Page Views</strong>
              <i className="ms-icon icon-facebook"></i>
            </p>
            <h5>
              <strong>87</strong>
              <span className="up">
                <i className="ms-icon icon-up"></i>
                3%
              </span>
            </h5>
          </div>
          <div className="card">
            <p>
              <strong>Likes</strong>
              <i className="ms-icon icon-facebook"></i>
            </p>
            <h5>
              <strong>52</strong>
              <span className="down"><i className="ms-icon icon-down"></i> 2%</span>
            </h5>
          </div>
          {/* Instagram */}
          <div className="card">
            <p>
              <strong>Likes</strong>
              <i className="ms-icon icon-instagram"></i>
            </p>
            <h5>
              <strong>5462</strong>
              <span className="up"><i className="ms-icon icon-up"></i> 2257%</span>
            </h5>
          </div>
          <div className="card">
            <p>
              <strong>Profile Views</strong>
              <i className="ms-icon icon-instagram"></i>
            </p>
            <h5>
              <strong>52K</strong>
              <span className="up"><i className="ms-icon icon-up"></i> 1375%</span>
            </h5>
          </div>
          {/* Twitter */}
          <div className="card">
            <p>
              <strong>Retweets</strong>
              <i className="ms-icon icon-twitter"></i>
            </p>
            <h5>
              <strong>117</strong>
              <span className="up"><i className="ms-icon icon-up"></i> 303%</span>
            </h5>
          </div>
          <div className="card">
            <p>
              <strong>Likes</strong>
              <i className="ms-icon icon-twitter"></i>
            </p>
            <h5>
              <strong>507</strong>
              <span className="up"><i className="ms-icon icon-up"></i> 553%</span>
            </h5>
          </div>
          {/* Youtube */}
          <div className="card">
            <p>
              <strong>Retweets</strong>
              <i className="ms-icon icon-youtube"></i>
            </p>
            <h5>
              <strong>117</strong>
              <span className="down"><i className="ms-icon icon-down"></i> 19%</span>
            </h5>
          </div>
          <div className="card">
            <p>
              <strong>Likes</strong>
              <i className="ms-icon icon-youtube"></i>
            </p>
            <h5>
              <strong>1407</strong>
              <span className="down"><i className="ms-icon icon-down"></i> 12%</span>
            </h5>
          </div>

        </section>

      </main>
    </div>
  );
}

export default App;
