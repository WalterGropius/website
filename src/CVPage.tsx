import React from 'react';

const Profile = () => {
    return (
        <div className="profile-container">
            <ProfileHeader />
            <SummarySection />
            <TechnicalProficiencies />
            <Languages />
            <Certifications />
            <Education />
            <PortfolioHighlights />
            <PersonalNote />
            <ContactInfo />
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
            I am a lifelong learner, driven by boundless curiosity with a profound passion for the synergy between art and technology.<br />
            I've dedicated my career to being a bridge between creative visions and technical execution.<br />
            Whether supporting artists in realizing their concepts or guiding technologists towards aesthetic refinement, my passion lies at the crossroads of imagination and innovation.<br />
             My journey has equipped me with expertise in VR/AR development and real-time digital cinematography and virtual production, primarily within the Unreal engine.<br />
             I've been fortunate to work with both artistic and technical minds, continually learning the importance of aesthetics and user experience.<br />
             I view every collaboration as an opportunity to bridge the gap between visionary creativity and pragmatic technology.<br />


        </p><br />
    </section>
);

const TechnicalProficiencies = () => (
    <section className="tech-section">
        <h2>Top Skills</h2>
        <ul>
            <li>VR</li>
            <li>Unreal Engine 4</li>
            <li>Blender</li>
            <li>Substance Suite</li>
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
            <li>C# Course SL</li><br />
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
            LYCÉE FRANCAIS DE PRAGUE<br />
            Baccalaureat Scientifique (2005 - 2013)
        </div><br />
    </section>
);

const PortfolioHighlights = () => (
    <section className="portfolio-section">
        <h2>Recent Projects & Art Collaborations</h2>
        <ul>
            <li>Lenticular promo for Selam X</li>
            {/* Add more projects as necessary */}
        </ul><br />
    </section>
);

const PersonalNote = () => (
    <section className="personal-note-section">
        <p>
        <h2>Note</h2>
            I'm always eager to collaborate and bring new visions to life. Let's embark on the next creative journey together.
        </p><br />
    </section>
);

const ContactInfo = () => (
    <section className="contact-info">
        <h2>Contact</h2>
        <p>Email: [zenbauhaus@gmail.com]</p>
        <p>Phone: [+420 739 00 44 55]</p>
        <p>website: [zenbau.haus]</p>
    </section>
);

export default Profile;
