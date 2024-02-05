import React, { useState, useEffect } from 'react';
import {
  IntroToJs,
  proPic,
  todoUrl,
  quranUrl,
  wrUrl,
  filwuha,
  realUrl,
  jobs,
  snakeUrl,
  ytLink,
  gitLink,
  tweetLink,
  lnkdLink,
  resumeLink,
  trSource,
  degSource,
  corSource,
  CodeFound,
  WebDev,
  JsInter,
  vanUrl,
  PythonInt,
  IntroPython,
  eComUrl,
  digUrl,
  disUrl,
} from './vars.js';
import './index.css';
import './me.css';

function Me() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
        <img src={proPic} alt="avatar" className="my-pic" />
        <div>
          <header className="resume-header">
            <h1>Zekaria Mohammed</h1>
            <p>
              Software Engineer{' '}
              <a
                href="https://www.alxafrica.com/"
                target="_blank"
                rel="noreferrer"
              >
                @ALX
              </a>
            </p>
            <p>
              <a
                href={`mailto:zakisudev@gmail.com?subject=resume-review&body=Hey Zaki`}
                target="_blank"
                rel="noreferrer"
              >
                ▶ zakisudev@gmail.com
              </a>
            </p>
            <p>Bole Addis Ababa, Ethiopia</p>
            <p>
              <a href="tel:+251913 250250">+251913 250250</a>
            </p>
          </header>
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
        </div>
      </section>
      <section id="section-page" className="section-summary">
        <p>
          Dedicated professional with a unique eye for design and software
          development, offering a rare combination of problem-solving skills,
          attention to detail and technical proficiency. A solid foundation in
          frontend website development and backend API integration together with
          AWS cloud computing skills, I bring a multidisciplinary approach to
          fullstack web development.
        </p>
      </section>
      <section id="section-page" className="education">
        <h2>Education</h2>
        <br />
        <p>
          ❖ Software Engineering - ALX - (2023 - Present) -{' '}
          <a href={trSource} target="_blank" rel="noreferrer">
            View
          </a>
        </p>
        <p>
          ❖ BSc in Civil Engineering - Wollo University -{'    '}
          <a href={degSource} target="_blank" rel="noreferrer">
            View
          </a>
        </p>
        <p>❖ AWS Cloud Computing - ALX - (Present)</p>
        <p>
          ❖ Generative AI - Coursera -
          <a href={corSource} target="_blank" rel="noreferrer">
            View
          </a>
        </p>
        <p>
          ❖ Backend development and APIs -{' '}
          <a
            href="https://www.freecodecamp.org/certification/fcc1927bc8c-4f56-4a48-81c3-dd3ed121cab5/back-end-development-and-apis"
            target="_blank"
            rel="noreferrer"
          >
            FreeCodeCamp
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
        <ul className="cert-images">
          <li>
            <a href={CodeFound} target="_blank" rel="noreferrer">
              Gen AI
            </a>
          </li>
          <li>
            <a href={CodeFound} target="_blank" rel="noreferrer">
              Coding Foundation
            </a>
          </li>
          <li>
            <pa href={PythonInt} target="_blank" rel="noreferrer">
              Python Intermediate
            </pa>
          </li>
          <li>
            <a href={WebDev} target="_blank" rel="noreferrer">
              Web development
            </a>
          </li>
          <li>
            <a href={JsInter} target="_blank" rel="noreferrer" className="hide">
              JavaScript Intermediate
            </a>
          </li>
          <li>
            <a
              href={IntroToJs}
              target="_blank"
              rel="noreferrer"
              className="hide"
            >
              Introduction to JavaScript
            </a>
          </li>
          <li>
            <a
              href={IntroPython}
              target="_blank"
              rel="noreferrer"
              className="hide"
            >
              Introduction to Python
            </a>
          </li>
        </ul>
      </section>
      <section id="section-page" className="projects">
        <div>
          <ul className="projects">
            <li className="proj-list">
              <div className="proj">
                <h2>Real-estate web app</h2>
                <p>
                  Real-estate app where you can post, rent and sale your
                  possessions
                </p>
                <a href={realUrl} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
              <div className="proj">
                <h2>Mey-shop E-commerce web app</h2>
                <p>An E-commerce app you can modify to work on production</p>
                <a href={eComUrl} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
            </li>
            <li className="proj-list">
              <div className="proj">
                <h2>Filwuha Orders</h2>
                <p>Spot reservation for bathing service provider</p>
                <a href={filwuha} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
              <div className="proj">
                <h2>Z-jobs</h2>
                <p>Tracking your jobs has never been easier</p>
                <a href={jobs} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
            </li>
            <li>
              <div className="proj">
                <h2>Random Quran Verse Generator</h2>
                <p>Generate Random verses from the holy Quran</p>
                <a href={quranUrl} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
              <div className="proj">
                <h2>Todo List</h2>
                <p>Jot down and manage your todos, saving them for later too</p>
                <a href={todoUrl} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
            </li>
            <li>
              <div className="proj">
                <h2>Discord clone</h2>
                <p>Socket.io and MERN stack discord clone</p>
                <a href={disUrl} target="_blank" rel="noreferrer">
                  View Code base
                </a>
              </div>
              <div className="proj">
                <h2>Digital-resume</h2>
                <p>Build your digital resume</p>
                <a href={digUrl} target="_blank" rel="noreferrer">
                  View Code base
                </a>
              </div>
            </li>
            <li>
              <div className="proj">
                <h2>writings.dev</h2>
                <p>Simple blog website created with html and css</p>
                <a href={wrUrl} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
              <div className="proj">
                <h2>#vanlife</h2>
                <p>Rent vans and post vans to rent on this platform</p>
                <a href={vanUrl} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
            </li>
            <li>
              <div className="proj">
                <h2>#snaky</h2>
                <p>A React snake game</p>
                <a href={snakeUrl} target="_blank" rel="noreferrer">
                  Visit site
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <p>©zakisu | 2022</p>
        <p>Addis Ababa, Ethiopia</p>
        <p>
          <a
            href={`mailto:zakisudev@gmail.com?subject=resume-review&body=Hey Zaki`}
            target="_blank"
            rel="noreferrer"
          >
            zakisudev@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Me;
