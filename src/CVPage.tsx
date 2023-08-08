import React from 'react';


const styles = {
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '10px',
  },
  sectionContent: {
    marginBottom: '20px',
  },
  listItem: {
    listStyleType: 'none',
    marginBottom: '10px',
  },
  contact: {
    marginBottom: '10px',
  },
};

const Header = ({ name, title }) => (
  <div style={styles.header}>
    <div>{name}</div>
    <div>{title}</div>
  </div>
);

const ContactInfo = ({ email, website, phone }) => (
  <div style={styles.contact}>
    <div>Email: <a href={`mailto:${email}`}>{email}</a></div>
    <div>Website: <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></div>
    <div>Phone: {phone}</div>
  </div>
);

const Section = ({ title, content }) => (
  <div style={styles.sectionContent}>
    <div style={styles.sectionTitle}>{title}</div>
    <div>{content}</div>
  </div>
);

const CVPage = () => {
  return (
    <div>
      <Header name="Eliáš Bauer" title="Generalist Specialist (VR and more…)" />

      <ContactInfo
        email="zenbauhaus@gmail.com"
        website="zenbauhaus.wordpress.com"
        phone="+420 739 00 44 55"
      />

      {/* Repeat the Section component for different sections of the CV */}
      <Section
        title="Summary"
        content="At heart, I am a lifelong learner, driven by curiosity and a profound respect for the synergy between art and technology. My journey has equipped me with expertise in VR/AR development and real-time digital cinematography, primarily within the Unreal engine. I've been fortunate to work with both artistic and technical minds, continually learning the importance of aesthetics and user experience. I view every collaboration as an opportunity to bridge the gap between visionary creativity and pragmatic technology."
      />

      {/* For lists like Top Skills, you can create another component or use an array and map method to list items */}
      <Section
        title="Top Skills"
        content={
          <ul>
            {['VR', 'Unreal Engine 4', 'Blender', 'Substance Suite'].map(skill => (
              <li style={styles.listItem} key={skill}>{skill}</li>
            ))}
          </ul>
        }
      />

      {/* Continue with the rest of the sections in similar fashion... */}

    </div>
  );
};

export default CVPage;

