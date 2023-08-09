import { useState, useEffect } from 'react';

const CVPage = () => {
    return (
        <div className="profile-container">
            <ProfileHeader />
            <SummarySection />
            <Group1/>
            <Group2/>
        </div>
    );
};

const ProfileHeader = () => (
    <div className="profile-header">
        <h1>Eliáš Bauer</h1>
        <h2>creative dev</h2><br />
    </div>
);

const SummarySection = () => (
    <section className="summary-section">
        <p>
            I am a lifelong <b>learner</b>, driven by boundless <b>curiosity</b> with a profound passion for the synergy between <b>art</b> and <b>technology</b>.<br />
            I've dedicated my career to being a <b>bridge</b> between creative <b>visions</b> and technical execution.<br />
            Whether supporting <b>artists</b> in realizing their concepts or guiding technologists towards aesthetic refinement,<br />my passion lies at the crossroads of <b>imagination</b> and <b>innovation</b>.<br />
             My journey has equipped me with expertise in <b>VR/AR</b> development and real-time digital cinematography and <b>virtual production</b>, primarily within the <b>Unreal engine.</b><br />
             I've been fortunate to work with both artistic and technical minds, continually learning the importance of functionality, aesthetics and user experience.<br />
             I view every collaboration as an opportunity to bridge the gap between visionary creativity and state of the art technology.<br />
             I'm always eager to collaborate and bring new visions to life.<br />
             Let's embark on the next creative journey together!
        </p><br />
    </section>
);

const TechnicalProficiencies = () => (
    <section className="tech-section">
        <h2>Top Skills</h2>
        <ul>
            <li>VR/AR/VFX</li>
            <li>Unreal Engine/Unity</li>
            <li>Blender/Houdini</li>
            <li>Substance Suite/Mixer</li>
            <li>Rnd/Development</li>
            <li>AI tools</li>
            {/* Add more as necessary */}
        </ul><br />
    </section>
);

const Languages = () => (
    <section className="languages-section">
        <h2>Languages</h2>
        <ul>
            <li>English</li>
            <li>Czech</li>
            <li>French</li>
            <li>Assembly, Cpp, Python, Arduino, Lojban</li><br />
            {/* Add more if necessary */}
        </ul>
    </section>
);

const Certifications = () => (
    <section className="certifications-section">
        <h2>Certifications</h2>
        <ul>
            <li>C++ Course SL</li>
            <li>C# Course SL</li>
            <li>Javascript Course SL</li>
            <li>Python Course SL</li>
            {/* Add more as necessary */}
        </ul>
    </section>
);

const Education = () => (
    <section className="education-section">
        <h2>Education</h2>
        <div>
            <strong>INFINITE AUTODIDACT</strong><br />
            137.5 Degrees, lmgtfy, Computers, Architecture, Art, and more (2006)<br />
            <b>LYCÉE FRANCAIS DE PRAGUE</b><br />
            Baccalaureat Scientifique (2005 - 2013)
        </div><br />
    </section>
);

const PortfolioHighlights = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      // Fetch data from portfolio.json
      fetch('/portfolio.json')
          .then(response => response.json())
          .then(data => {
              // Randomly select 5 items
              const shuffled = data.sort(() => 0.5 - Math.random());
              const selected = shuffled.slice(0, 5);

              setItems(selected);
          });
  }, []); // The empty dependency array ensures this useEffect runs only once

  return (
      <section className="portfolio-section">
          <h2>Recent Projects & Art Collaborations</h2>
          <ul>
              {items.map(item => (
                  <li key={item.id}>
                      <a href={`/work/${item.id}`}>{item.title}</a>
                  </li>
              ))}
          </ul>
      </section>
  );
};

const ContactInfo = () => (
    <section className="contact-info">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zenbauhaus@gmail.com">zenbauhaus@gmail.com</a></p>
        <p>Phone: <a href="tel:+420 739 00 44 55">+420 739 00 44 55</a></p>
        <p>website: <a href="https://zenbau.haus">zenbau.haus</a></p>
    </section>
);

const Group1 = () => (
  <div className="slc-container">
      <TechnicalProficiencies />
      <Languages />
      <Certifications />
  </div>
);

const Group2 = () => (
  <div className="slc-container">
      <PortfolioHighlights />
      <Education />
      <ContactInfo />
  </div>
);

export default CVPage;
