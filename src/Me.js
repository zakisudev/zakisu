import React, { useState, useEffect } from 'react';
import { proPic, todoUrl, quranUrl, hahuUrl, writeUrl } from './vars.js';
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

  const ytLink = 'https://www.youtube.com/channel/UCPR3tI0avH_3oNMaJNb88Mw';
  const gitLink = 'https://www.github.com/zakisu250';
  const tweetLink = 'https://www.twitter.com/zakisu';
  const resumeLink =
    'https://drive.google.com/file/d/1GrrXUzbDpH4HZXSloYK7aTMz8vQBNa7e/view?usp=drive_link';
  const comPose = 'https://mail.google.com/mail/u/0/#inbox?compose=new';

  const todoSource = 'https://github.com/zakisu250/To-do';
  const quranSource = 'https://github.com/zakisu250/Random-Quran-Verse';
  const hahuSource = 'https://github.com/zakisu250/HAHU';
  const writeSource = 'https://github.com/zakisu250/writings.dev';
  return (
    <div id="page-wrapper">
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
              Software Developer, currently pursuing my Software Engineering
              Certificate @ALX
            </p>
            <p>
              <a href={comPose} _blank>
                ▶ zakisu250@gmail.com
              </a>
            </p>
          </header>
        </div>
      </section>
      <section id="section-page" className="social-links">
        <ul className="social-links">
          <li>
            <a href={ytLink} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </li>
          <li>
            <a href={tweetLink} target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href={gitLink} target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href={resumeLink} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </li>
        </ul>
      </section>
      <section id="section-page" className="education">
        <h2>Education</h2>
        <p>❖ BSc in Civil Engineering - Wollo University - (2010 - 2014)</p>
        <p>❖ Software Engineering - ALX - (2023 - Present)</p>
      </section>
      <section id="section-page" className="Experience">
        <h2>Experience</h2>
        <p>
          ❖ Fantahun Getnet General Contractor - Technical Manager
          <p className="desc-exp">
            - Worked as a Technical Manager at different sites. (2017 - 2021)
          </p>
        </p>
      </section>
      <section id="section-page">
        <div>
          <ul className="projects">
            <li>
              <h2>Todo List</h2>
              <a href={todoSource} target="_blank" rel="noreferrer">
                Source code
              </a>
              <a href={todoUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </li>
            <li>
              <h2>Random Quran Verse Generator</h2>
              <a href={quranSource} target="_blank" rel="noreferrer">
                Source code
              </a>
              <a href={quranUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </li>
            <li>
              <h2>Hahu-Web-Hosting Design and Dev</h2>
              <a href={hahuSource} target="_blank" rel="noreferrer">
                Source code
              </a>
              <a href={hahuUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </li>
            <li>
              <h2>writings.dev</h2>
              <a href={writeSource} target="_blank" rel="noreferrer">
                Source code
              </a>
              <a href={writeUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Me;
