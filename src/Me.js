import './index.css';

function Me() {
  const proPic = '../images/photo.jpg';
  return (
    <div id="page-wrapper" className="App">
      <section id="section-page" className="section-hero">
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
            <a href="https://www.youtube.com/channel/UCPR3tI0avH_3oNMaJNb88Mw">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/zakisu">Twitter</a>
          </li>
          <li>
            <a href="https://www.github.com/zakisu250">Github</a>
          </li>
          <li>
            <a href="#">Download Resume</a>
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
          ❖ Fantahun Getnet General Contractor - Technical Manager - (2017 -
          2021)
        </p>
      </section>
      <section id="section-page" className="projects">
        <div>
          <ul>
            <li>
              <h4>Todo List</h4>
              <a href="#">Source code</a>
              <a href="#">Live demo</a>
            </li>
            <li>
              <h4>Random Quran Generator</h4>
              <a href="#">Source code</a>
              <a href="#">Live demo</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Me;
