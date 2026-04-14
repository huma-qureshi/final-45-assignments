import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content-wrapper" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', width: '100%', marginTop: '300px' }}>
        <div className="about-image" style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', marginTop: '500px' }}>
          <img src="/images/about_image.png" alt="Huma Qureshi Full Body" style={{ maxWidth: '400px', width: '100%', borderRadius: '20px' }} />
        </div>
        <div className="about-me" style={{ flex: '1', minWidth: '300px' }}>
          <h3 className="title" style={{ marginTop: '0px' }}>About Me</h3>
          <p className="para">
            Myself Huma Qureshi, I'm a WordPress developer and consultant specializing in lead-generation sites and membership/E-learning platforms. I don't just take orders—I partner with you to achieve your business goals. I have been working as a freelancer with a diverse skill set. Over the past few years, I have worked for many international and local clients. One of my greatest passions is "SEO and WordPress". Let's create an exceptional online presence that drives success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
