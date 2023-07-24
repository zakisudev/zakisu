import React, { useState, useEffect } from 'react';
import { proPic, todoUrl, quranUrl, hahuUrl } from './vars.js';
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

  const todoSource = 'https://github.com/zakisu250/To-do';
  const quranSource = 'https://github.com/zakisu250/Random-Quran-Verse';
  const hahuSource = 'https://github.com/zakisu250/HAHU';
  return (
    <div id="page-wrapper">
      <section id="section-page" className="section-hero">
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
        <div className="my-pic">
          <img src={proPic} alt="" />
        </div>
        <div>
          <header className="resume-header">
            <h1>Zekaria Mohammed</h1>
            <p>
              Software Developer, currently pursuing my Software Engineering
              Certificate @ALX
            </p>
            <p>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                ▶ zakisu250@gmail.com
              </a>
            </p>
          </header>
        </div>
      </section>
      <section id="section-page" className="social-links">
        <ul className="social-links">
          <li>
            <a href={ytLink}>YouTube</a>
          </li>
          <li>
            <a href={tweetLink}>Twitter</a>
          </li>
          <li>
            <a href={gitLink}>Github</a>
          </li>
          <li>
            <a href={resumeLink}>Download Resume</a>
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
              <h4>Todo List</h4>
              <a href={todoSource}>Source code</a>
              <a href={todoUrl}>Live demo</a>
            </li>
            <li>
              <h4>Random Quran Generator</h4>
              <a href={quranSource}>Source code</a>
              <a href={quranUrl}>Live demo</a>
            </li>
            <li>
              <h4>Hahu Web Hosting Design and Development</h4>
              <a href={hahuSource}>Source code</a>
              <a href={hahuUrl}>Live demo</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Me;
