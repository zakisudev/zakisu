import React, { useState, useEffect } from 'react';
import {
  IntroToJs,
  proPic,
  todoUrl,
  quranUrl,
  wrUrl,
  filwuha,
  jobs,
  snakeUrl,
  ytLink,
  gitLink,
  tweetLink,
  lnkdLink,
  resumeLink,
  comPose,
  trSource,
  degSource,
  corSource,
  CodeFound,
  WebDev,
  JsInter,
  vanUrl,
  PythonInt,
  IntroPython,
} from './vars.js';
import './index.css';
import './me.css';

function Me() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('here');
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleView() {
    const viewBtn = document.querySelector('.viewBtn');
    const hide = document.querySelectorAll('.hide');
    viewBtn.addEventListener('click', () => {
      hide.forEach((item) => {
        if (item.style.display === 'none') {
          item.style.display = 'block';
          viewBtn.innerHTML = 'View less...';
        } else {
          item.style.display = 'none';
          viewBtn.innerHTML = 'View more...';
        }
      });
    });
  }

  return (
    <div id="page-wrapper">
      <br />
      <div id="mode" className="toggle-switch">
        <input
          type="checkbox"
          id="themeToggle"
          className="toggle-checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label htmlFor="themeToggle" className="toggle-label">
          <span className="toggle-inner"></span>
          <span className="toggle-switch"></span>
        </label>
      </div>
      <section id="section-page" className="section-hero">
        <img src={proPic} alt="" className="my-pic" />
        <div>
          <header className="resume-header">
            <h1>Zekaria Mohammed</h1>
            <p>
              Software Developer and AWS Cloud Practitioner{' '}
              <a
                href="https://www.alxafrica.com/"
                target="_blank"
                rel="noreferrer"
              >
                @ALX
              </a>
            </p>
            <p>
              <a href={comPose} target="_blank" rel="noreferrer">
                ▶ zakisudev@gmail.com
              </a>
            </p>
          </header>
        </div>
      </section>
      <section id="section-page" className="social-links">
        <ul className="social-links">
          <li>
            <a href={gitLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href={lnkdLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href={tweetLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href={ytLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href={resumeLink} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </section>
      <section id="section-page" className="education">
        <h2>Education</h2>
        <br />
        <p>
          ❖ BSc in Civil Engineering - Wollo University -{'    '}
          <a href={degSource} target="_blank" rel="noreferrer">
            View
          </a>
        </p>
        <p>
          ❖ Software Engineering - ALX - (Present) -{' '}
          <a href={trSource} target="_blank" rel="noreferrer">
            View
          </a>
        </p>
        <p>❖ AWS Cloud Computing - ALX - (Present)</p>
        <p>
          ❖ Generative AI - Coursera{' '}
          <a href={corSource} target="_blank" rel="noreferrer">
            View
          </a>
        </p>
      </section>
      <section id="section-page" className="experience">
        <h2>Experience</h2>
        <br />
        <h4>
          ❖ Worked on <strong> designing and developing </strong>a web app for a
          bathing service provider
          <p className="desc-exp">
            # The design was made in Figma and uses React library and tailwind
            css for frontend and Python Flask for the backend service. Making
            sure the customer has a smooth experience while using the app was
            the main goal. The app is hosted on Vercel and the backend is hosted
            on Render. The app also allows admins to manage the orders and the
            customers.
            <br />
            <a href={filwuha} target="_blank" rel="noreferrer">
              View Demo
            </a>
          </p>
        </h4>
      </section>
      <section id="section-page" className="certificate">
        <h2>Digital Certificates</h2>
        <br />
        <div className="cert-images">
          <a href={CodeFound} target="_blank" rel="noreferrer">
            <img
              className="certs"
              src="https://res.cloudinary.com/dm0frybrb/image/upload/v1695656054/Coursera_XUPDRC4BVQ52_iworgw.jpg"
              alt="Coding foundation"
            />
            <p>Gen AI</p>
          </a>
          <a href={CodeFound} target="_blank" rel="noreferrer">
            <img
              className="certs"
              src="https://res.cloudinary.com/dm0frybrb/image/upload/v1694596646/Coding_Foundation_Sololearn_tnqtl9.png"
              alt="Coding foundation"
            />
            <p>
              Coding
              <br /> Foundation
            </p>
          </a>
          <a href={PythonInt} target="_blank" rel="noreferrer">
            <img
              className="certs"
              src="https://res.cloudinary.com/dm0frybrb/image/upload/v1694607733/Python_Intermediate_Sololearn_luxgtw.png"
              alt="Python Intermediate"
            />
            <p>
              Python
              <br /> Intermediate
            </p>
          </a>
          <a href={WebDev} target="_blank" rel="noreferrer">
            <img
              className="certs"
              src="https://res.cloudinary.com/dm0frybrb/image/upload/v1694596646/Web_dev_Sololearn_syvctx.png"
              alt="Web dev"
            />
            <p>
              Web
              <br />
              development
            </p>
          </a>
          <a href={JsInter} target="_blank" rel="noreferrer" className="hide">
            <img
              className="certs"
              src="https://res.cloudinary.com/dm0frybrb/image/upload/v1694596647/Javascript_intermediate_Sololearn_qu1oe0.png"
              alt="Js Intermediate"
            />
            <p>
              JavaScript
              <br />
              Intermediate
            </p>
          </a>
          <a href={IntroToJs} target="_blank" rel="noreferrer" className="hide">
            <img
              className="certs"
              src="https://res.cloudinary.com/dm0frybrb/image/upload/v1694596646/Intro_to_JS_Sololearn_knn1wj.png"
              alt="Intro to Js"
            />
            <p>
              Introduction to
              <br />
              JavaScript
            </p>
          </a>
          <a
            href={IntroPython}
            target="_blank"
            rel="noreferrer"
            className="hide"
          >
            <img
              className="certs"
              src="https://res.cloudinary.com/dm0frybrb/image/upload/v1694607732/Intro_to_Python_aezmw9.png"
              alt="Intro to Python"
            />
            <p>
              Introduction to
              <br />
              Python
            </p>
          </a>
          <button className="viewBtn" onClick={toggleView}>
            View more...
          </button>
        </div>
      </section>
      <section id="section-page" className="projects">
        <div>
          <ul className="projects">
            <li>
              <h2>Filwuha Orders</h2>
              <p>
                A reservation webapp to order your bathing services beforehand
              </p>
              <a href={filwuha} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </li>
            <li>
              <h2>Z-jobs</h2>
              <p>Tracking your jobs has never been easier</p>
              <a href={jobs} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </li>
            <li>
              <h2>Random Quran Verse Generator</h2>
              <p>Generate Random verses from the holy Quran</p>
              <a href={quranUrl} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </li>
            <li>
              <h2>Todo List</h2>
              <p>Jot down and manage your todos, saving them for later too</p>
              <a href={todoUrl} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </li>
            <li>
              <h2>writings.dev</h2>
              <p>Simple blog website created with html and css</p>
              <a href={wrUrl} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </li>
            <li>
              <h2>#vanlife</h2>
              <p>Rent vans and post vans to rent on this platform</p>
              <a href={vanUrl} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </li>
            <li>
              <h2>#snaky</h2>
              <p>A React snake game</p>
              <a href={snakeUrl} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <p>©zakisu | 2022</p>
        <p>Addis Ababa, Ethiopia</p>
        <p>
          <a href={comPose} target="_blank" rel="noreferrer">
            zakisudev@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Me;
