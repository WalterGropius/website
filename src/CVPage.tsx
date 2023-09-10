import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei'; */

type Item = {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
    tags: string;
  };

const CVPage = () => {
    return (
        <div >
            {/* <Canvas >
            <Environment files={"/flatway2k.hdr"} background blur={0.04}/>
            </Canvas> */}
            <div className="profile-container">
            <ProfileHeader />
            <SummarySection />
            <Group1/>
            <Group2/>
            
            </div>
        </div>
    );
};

const ProfileHeader = () => (
    <div className="profile-header">
        <br />
        <h2>Eliáš Bauer</h2>
        <h3>creative dev</h3>
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
    const [items, setItems] = useState<Item[]>([]);
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
    
    <div  className="cvt">
    <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
    <p className="c9">
    
      <span className="c4">Eliash Zerael Bauer<br /></span><span className="c0 c2">Generalist Specialist (VR and more…)</span></p>
    <p className="c9">
      <span className="c10"><a className="c8" href="https://www.google.com/url?q=https://quod.lib.umich.edu/n/nmw/5680986.0001.001/1:2/--hyperlinked-society-questioning-connections-in-the-digital?g%3Ddculture;rgn%3Ddiv1;view%3Dfulltext;xc%3D1&sa=D&source=editors&ust=1691006014592969&usg=AOvVaw0xdor-fQS_1Y7SDVaF5QIM">Mind the hyperlinks</a></span><span className="c10 c14">!</span>
    </p>
    <p className="c9"><span className="c6 c2">Contact</span></p>
    <p className="c9">
      <span className="c0"><a className="c8" href="mailto:zenbauhaus@gmail.com">zenbauhaus@gmail.com</a></span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=http://zenbauhaus.wordpress.com&sa=D&source=editors&ust=1691006014593835&usg=AOvVaw0jupC_5fREspXOQwWtb8Kl">zenbauhaus.wordpress.com</a></span>
    </p>
    <p className="c9"><span className="c0 c2">+420 739 00 44 55</span></p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c12">
      <span className="c2 c6">WONDER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TECHNOLOGY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COLLABORATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VR</span>
    </p>
    <p className="c7"><span className="c6 c2" /></p>
    <p className="c9">
      <span className="c6 c2">NATURE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        CREATIVITY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CURIOSITY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VISUAL</span>
    </p>
    <p className="c7"><span className="c6 c2" /></p>
    <p className="c12 c18">
      <span className="c6 c2">MARKETING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HONESTY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUSTAINABILITY</span>
    </p>
    <p className="c7"><span className="c6 c2" /></p>
    <p className="c9">
      <span className="c6 c2">VISION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ARTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HUMANITY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FILM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AWE</span>
    </p>
    <p className="c7"><span className="c6 c2" /></p>
    <p className="c5">
      <span className="c6 c2">ARCHITECTURE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SKATEBOARDING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;MUSIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        ZEN</span>
    </p>
    <p className="c9"><span className="c6 c2">Summary</span></p>
    <p className="c9">
      <span className="c0 c2">I specialize mainly in VR/AR development and realtime digital
        cinematography in Unreal engine.</span>
    </p>
    <p className="c9">
      <span className="c0 c2">My tools are Unreal, Blender, Substance Suite, Houdini, C++, Python and
        more.</span>
    </p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9">
      <span className="c0 c2">I am striving to be a bridge between art and tech on multiple levels,
        to strike a balance between the artistic and the artisanal.</span>
    </p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9">
      <span className="c0 c2">On a collaborative level I love helping artists by finding the right
        tools and people to realize their visions.</span>
    </p>
    <p className="c9">
      <span className="c0 c2">I also love helping technical people find the love for aesthetics or
        ux.</span>
    </p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c7"><span className="c0 c2" /></p>
    <a id="t.66398ed647f6359cd1a97eb3eda87a8084ebb462" /><a id="t.0" />
    <table className="c21">
      <tbody><tr className="c19">
          <td className="c24" colSpan={1} rowSpan={1}>
            <p className="c12"><span className="c6 c2">Top Skills</span></p>
            <p className="c12"><span className="c0 c2">VR</span></p>
            <p className="c12"><span className="c0 c2">Unreal Engine 4</span></p>
            <p className="c12"><span className="c0 c2">Blender</span></p>
            <p className="c12"><span className="c0 c2">Substance Suite</span></p>
            <p className="c7"><span className="c0 c2" /></p>
          </td>
          <td className="c22" colSpan={1} rowSpan={1}>
            <p className="c12"><span className="c6 c2">Languages</span></p>
            <p className="c12"><span className="c0 c2">English</span></p>
            <p className="c12"><span className="c0 c2">Czech</span></p>
            <p className="c12"><span className="c0 c2">French</span></p>
            <p className="c7"><span className="c0 c2" /></p>
            <p className="c12">
              <span className="c0 c2">Assembly, Cpp, Python, Arduino, Lojban</span>
            </p>
            <p className="c7"><span className="c0 c2" /></p>
          </td>
          <td className="c23" colSpan={1} rowSpan={1}>
            <p className="c12"><span className="c6 c2">Certifications</span></p>
            <p className="c12"><span className="c0 c2">C++ Course SL</span></p>
            <p className="c12"><span className="c0 c2">C# Course SL</span></p>
            <p className="c12"><span className="c0 c2">Python Course SL</span></p>
            <p className="c12"><span className="c0 c2">Java Course SL</span></p>
            <p className="c12"><span className="c0 c2">JavaScript Course SL</span></p>
          </td>
        </tr>
      </tbody></table>
    <p className="c9 c13"><span className="c6 c2" /></p>
    <p className="c9"><span className="c6 c2">Education</span></p>
    <p className="c9"><span className="c0 c2">INFINITE AUTODIDACT </span></p>
    <p className="c9">
      <span className="c0 c2">137.5 Degrees, lmgtfy, Computers, Architecture, Art, and anything else
        · (2006)</span>
    </p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9"><span className="c0 c2">LYCÉE FRANCAIS DE PRAGUE</span></p>
    <p className="c9">
      <span className="c0 c2">Baccalaureat Scientifique (2005 - 2013) </span>
    </p>
    <p className="c7"><span className="c0 c2" /></p>
    <p className="c9"><span className="c6 c2">Recent Projects</span></p>
    <p className="c9"><span className="c16 c2">Lenticular promo for Selam X</span></p>
    <p className="c9">
      <span className="c0">SM</span><span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.ruttkowski68.com/&sa=D&source=editors&ust=1691006014601255&usg=AOvVaw3B54Bwk5oq8yf8ciw0QlVn">&nbsp;&nbsp;Paris</a></span><span className="c0">&nbsp;&nbsp;- Collab with </span><span className="c0"><a className="c8" href="https://www.google.com/url?q=https://selam-x.com/&sa=D&source=editors&ust=1691006014601694&usg=AOvVaw1WzFcHQZSSaYJkFgRB8_TG">SELAM-X
        </a></span><span className="c0 c2">on a permanent exhibit/VRroom in Paris Gallery.</span>
    </p>
    <p className="c9">
      <span className="c0 c2">Building Framework and digital counterpart of actual gallery.</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.traumabarundkino.de/&sa=D&source=editors&ust=1691006014602088&usg=AOvVaw2EoquH66dEZzTwtKLWBsN0">Traumabar
        </a></span><span className="c0 c2">- MindBending Interactive Projections for Hip Venue in Berlin</span>
    </p>
    <p className="c9">
      <span className="c0 c2">TrashLabels - Recycling Network and Marketplace</span>
    </p>
    <p className="c9">
      <span className="c0 c2">Trasher - Ultra slidy Skate wheels handmade from recycled bottle
        caps</span>
    </p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9"><span className="c6 c2">Art Projects</span></p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://youtu.be/uG7WWti5LJY&sa=D&source=editors&ust=1691006014602728&usg=AOvVaw1reKieUK7uEpd-8FVwsJiJ">Veronika Cechmánková</a></span><span className="c0 c2">&nbsp;&nbsp;- Open Call for Exhibit in NY Czech Centre</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://drive.google.com/file/d/1A2LD7pjOKNdZZC4rMA-KD68brMUsOuGZ/view?usp%3Dsharing&sa=D&source=editors&ust=1691006014603007&usg=AOvVaw2hQHSu689aWViEHUrw5lMC">Kajetan Jablonský</a></span><span className="c0">&nbsp;&nbsp;- AR app for Exhibit with</span><span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.instagram.com/stories/highlights/17952493861089351/&sa=D&source=editors&ust=1691006014603243&usg=AOvVaw3eLbtZjpP6VqKrbD1QzRrI">&nbsp;&nbsp;floating InstaStories</a></span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.facebook.com/media/set/?set%3Da.744459219225067%26type%3D1%26l%3Dd562be31cd&sa=D&source=editors&ust=1691006014603507&usg=AOvVaw2qDEU2HpKRb5hL8U7Y-8o3">Max Vajt</a></span><span className="c0 c2">&nbsp;&nbsp;- Interactive experience/game in unreal support</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://vrborek.glitch.me/&sa=D&source=editors&ust=1691006014603775&usg=AOvVaw2oy_bsD3WTVs-uDr4BBV3-">Borek Smazinka</a></span><span className="c0 c2">&nbsp;&nbsp;- WebVR photogallery with audiotags for Alzheimer Patient</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.artmap.cz/vystava-jachym-bouzek-doslova/&sa=D&source=editors&ust=1691006014604058&usg=AOvVaw1Bm4TIzbQCtPGC_v_9NW5V">Jachym Bouzek</a></span><span className="c0 c2">&nbsp;&nbsp;- Unity support</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://richardjanecek.com/Free-check-for-happiness&sa=D&source=editors&ust=1691006014604341&usg=AOvVaw2Q58hF2VOPoM6Rbuk3FRe2">Richard Janeček</a></span><span className="c0 c2">&nbsp;&nbsp;- unreal cinematography support</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://wave.rozhlas.cz/umenim-jsem-si-nikdy-zadne-penize-nevydelal-rika-lukas-hofmann-vitez-ceny-7707691&sa=D&source=editors&ust=1691006014604618&usg=AOvVaw1fIpno4VL02oFcfb-JGko9">Lukáš Hoffman</a></span><span className="c0 c2">&nbsp;&nbsp;- tech support for award winning 360video</span>
    </p>
    <p className="c9 c13"><span className="c0 c2" /></p>
    <p className="c9"><span className="c6 c2">Workshops/Speaker</span></p>
    <p className="c9"><span className="c0 c2">Berlin:Nike with S-X</span></p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.fashiontech.berlin/en/&sa=D&source=editors&ust=1691006014605068&usg=AOvVaw3Kbh7PJG2QvLKjnUgF00DU">Fashion tech with S-X</a></span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=http://vr.molab.eu/workshop1/&sa=D&source=editors&ust=1691006014605315&usg=AOvVaw03viSQkdKojSnYjxCw9g6o">CVUT</a></span><span className="c0 c2">:Molab</span>
    </p>
    <p className="c9"><span className="c0 c2">CVUT:Archituecture</span></p>
    <p className="c9"><span className="c0 c2">CIIRC</span></p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.facebook.com/events/klauzury-gdvk-horor-virtu%25C3%25A1ln%25C3%25AD-realita/135919576912509/&sa=D&source=editors&ust=1691006014605701&usg=AOvVaw0p4I2_LMu__3Nre-S4mmHv">UMPRUM: GDVK</a></span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://czechvrfest.com/recnici/elias-bauer&sa=D&source=editors&ust=1691006014605931&usg=AOvVaw0GbmoTHVWy4mWX_g0ju-Hp">CzechVRFest</a></span>
    </p>
    <p className="c9">
      <span className="c16"><a className="c8" href="https://www.google.com/url?q=https://www.fashiontech.berlin/en/speakers&sa=D&source=editors&ust=1691006014606162&usg=AOvVaw3dL_X85NEdc6nr1md5chwU">FashionTechBerlin</a></span>
    </p>
    <p className="c9 c13"><span className="c6 c2" /></p>
    <p className="c9"><span className="c6 c2">VR/AR &nbsp;&nbsp;older Projects</span></p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://youtu.be/eqwEP1I2Mkw&sa=D&source=editors&ust=1691006014606608&usg=AOvVaw0VJ3r4Wq8cVDV7kk5Rae6K">TorchVR</a></span><span className="c0 c2">&nbsp;&nbsp;- Customizable ambidextrous VR Archery Game with boids</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=http://www.czechcentres.cz/vyroci2018/czech-innovation-expo/&sa=D&source=editors&ust=1691006014606912&usg=AOvVaw1sKNkrxeez_-5ljt4S1rn_">CIE</a></span><span className="c0 c2">&nbsp;&nbsp;- VR and AR for Czech Centers Exposition about Innovation</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.statek-bernard.cz/virtualni-realita&sa=D&source=editors&ust=1691006014607245&usg=AOvVaw3ik0O8WVl2m9nzqVITCMAX">VCELY</a></span><span className="c0 c2">&nbsp;&nbsp;- Kids educational game in VR where you become a bee</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.svoboda-williams.com/realitni-zpravy/232-rozsirena-realita-jako-novy-zpusob-prezentace-nemovitosti&sa=D&source=editors&ust=1691006014607563&usg=AOvVaw3UAgT8zXDUyi4bBEaWG9K3">SARECKY DVUR</a></span><span className="c0 c2">&nbsp;&nbsp;- High End Real Estate</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.e15.cz/byznys/technologie-a-media/nove-technologie-v-medicine-cesky-startup-chce-virtualni-realitou-lecit-male-autisty-1337943&sa=D&source=editors&ust=1691006014607895&usg=AOvVaw1Bz0ueEAZUt1-rDlLPIV3u">PINK CROC</a></span><span className="c0 c2">&nbsp;&nbsp;- research on helping special needs kids with VR</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://drive.google.com/file/d/1wTDe9rMiFGj1AImA0Oxi9XooJSumeXK8/view?usp%3Dsharing&sa=D&source=editors&ust=1691006014608194&usg=AOvVaw24X_NrGkMvmMG7MvWgJYVX">FINDER</a></span><span className="c0 c2">&nbsp;&nbsp;- VR Game for relay company where you switch electric paths</span>
    </p>
    <p className="c9">
      <span className="c0 c2">EXPERIMENT - multiplayer space VR Game for Arcades
      </span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://youtu.be/CyVQyc8D0wQ&sa=D&source=editors&ust=1691006014608516&usg=AOvVaw0Eyi-lL7Qx6617-RQTGkNG">JT</a></span><span className="c0 c2">&nbsp;&nbsp;- realistic bank in VR</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://drive.google.com/file/d/0B9dgKQsg9ZDMUU9UQTZTQXBvaDA/view?usp%3Dsharing&sa=D&source=editors&ust=1691006014608811&usg=AOvVaw2H_oARylPQSd9jq_c7ATwY">MUNI</a></span><span className="c0 c2">&nbsp;&nbsp;- Ammunition factory presentation video and AR app showing
        functioning of factory</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://www.youtube.com/watch?v%3DPr_3Ux6GN_s&sa=D&source=editors&ust=1691006014609096&usg=AOvVaw0ywx7DaTg1EF1Tjk2lYdi5">ZATISI</a></span><span className="c0 c2">&nbsp;&nbsp;- AR for Catering</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://youtu.be/9qyB04FL_UU&sa=D&source=editors&ust=1691006014609354&usg=AOvVaw3JMisx7CA5yJuu3DLFVbp6">VLAK</a></span><span className="c0 c2">&nbsp;&nbsp;- VR train fright</span>
    </p>
    <p className="c9">
      <span className="c0"><a className="c8" href="https://www.google.com/url?q=https://youtu.be/ZrjyLGy4FPI&sa=D&source=editors&ust=1691006014609608&usg=AOvVaw1Y45aFPIXCMsDC2sMrwcqF">ZIDLICKY</a></span><span className="c0">&nbsp;&nbsp;- First Virtual Gallery in Europe</span>
    </p>
    <p className="c1 c13"><span className="c6 c2" /></p>
    <p className="c1"><span className="c6 c2">OTHER WORK EXPERIENCE</span></p>
    <p className="c1"><span className="c15 c2">Notreal_virtual</span></p>
    <p className="c1"><span className="c3 c14">Team leader</span></p>
    <p className="c1"><span className="c11 c2">Since summer of 2018 </span></p>
    <p className="c1">
      <span className="c11 c2">Network of creative cooperative freelancers.</span>
    </p>
    <p className="c1 c13"><span className="c11 c2" /></p>
    <p className="c1 c13"><span className="c15 c2" /></p>
    <p className="c1">
      <span className="c15">NEW LIFE</span><span className="c11"><br /></span><span className="c3">SPIDER (special product integrator, developer and recruiter)</span><span className="c15"><br /></span><span className="c11 c2">April 2018 - Present </span>
    </p>
    <p className="c1">
      <span className="c11 c2">All over the world<br /></span>
    </p>
    <p className="c1">
      <span className="c15">VR MUSASHI</span><span className="c11"><br /></span><span className="c3">Co-Founder, Team leader, VR Guru</span><span className="c11"><br />January 2017 - May 2018 <br /><br /></span><span className="c15">viar.studio</span><span className="c11"><br /></span><span className="c3">Partner, Consultant</span><span className="c11 c2"><br />March 2017 - Present <br />Viar Studio is the reincarnation of
        buffet pictures.<br /></span>
    </p>
    <p className="c1">
      <span className="c15">Buffet Pictures</span><span className="c11"><br /></span><span className="c3">Head of VR</span><span className="c11 c2"><br />June 2016 - March 2017 (10 months)<br />Prague, The Capital,
        Czech Republic<br />Developing custom VR apps
      </span>
    </p>
    <p className="c1 c13"><span className="c2 c11" /></p>
    <p className="c1">
      <span className="c15">Kiddum</span><span className="c11"><br /></span><span className="c3">Lego Robotics Teacher</span><span className="c11 c2"><br />May 2016 - December 2016 (8 months)<br />Prague, The Capital,
        Czech Republic<br />This experience gave me a lot because i had the
        opportunity to share my excitement for robotics with a lot of cool
        kids... :-)<br /></span>
    </p>
    <p className="c1">
      <span className="c15">Loving Hut Hoa Dang Vegan Restaurant</span><span className="c11"><br /></span><span className="c3">Cashier</span><span className="c11 c2"><br />January 2016 - March 2016 (3 months)<br />This job gave me a lot
        of experience, discipline and structure.</span>
    </p>
    <p className="c1">
      <span className="c11 c2">I had to be on top of everything which was constant chaos and hangry
        customers.</span>
    </p>
    <p className="c1">
      <span className="c11 c2">It was quite challenging, but it helped me develop a lot.<br /></span>
    </p>
    <p className="c1">
      <span className="c15">Luma Pictures</span><span className="c11"><br /></span><span className="c3">Intern</span><span className="c11 c2"><br />June 2012 - July 2012<br />Los Angeles<br />I feel honored to
        have had the opportunity to learn the basics at Luma Pictures.</span>
    </p>
    <p className="c1">
      <span className="c11">It was an awesome work environment. I met amazing people. And I learned
        a lot.</span>
    </p>
  </div>

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
