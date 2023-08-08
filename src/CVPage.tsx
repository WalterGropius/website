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
        <h2>creative dev</h2>
    </div>
);

const SummarySection = () => (
    <section className="summary-section">
        <h2>Core Values:</h2>
        <div className="values-list">
            {['WONDER', 'TECHNOLOGY', 'COLLABORATE', 'VR', 'NATURE', 'CREATIVITY', 'CURIOSITY', 'AI', 'VISUAL', 'MARKETING', 'HONESTY', 'AR', 'SUSTAINABILITY', 'VISION', 'ARTS', 'HUMANITY', 'FILM', 'AWE', 'ARCHITECTURE', 'SKATEBOARDING', 'MUSIC', 'ZEN'].map(value => (
                <span key={value} className="value-item">{value}</span>
            ))}
        </div>
        <p>
            With a profound respect for the synergy between art and technology, I've dedicated my career to being a bridge between creative visions and technical execution. Whether supporting artists in realizing their concepts or guiding technologists towards aesthetic refinement, my passion lies at the crossroads of imagination and innovation.
        </p>
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
        </ul>
    </section>
);

const Languages = () => (
    <section className="languages-section">
        <h2>Languages</h2>
        <ul>
            <li>English</li>
            <li>Czech</li>
            <li>French</li>
            <li>Assembly, Cpp, Python, Arduino, Lojban</li>
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
        </div>
    </section>
);

const PortfolioHighlights = () => (
    <section className="portfolio-section">
        <h2>Recent Projects & Art Collaborations</h2>
        <ul>
            <li>Lenticular promo for Selam X</li>
            {/* Add more projects as necessary */}
        </ul>
    </section>
);

const PersonalNote = () => (
    <section className="personal-note-section">
        <p>
            I'm always eager to collaborate and bring new visions to life. Let's embark on the next creative journey together.
        </p>
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
