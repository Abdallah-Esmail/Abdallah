export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I am a passionate Full-Stack MERN Developer dedicated to building
            high-performance, responsive web applications using MongoDB,
            Express.js, React, and Node.js.
          </p>
          <p className="hero--section-description">
            I focus on writing clean, scalable code, architecting robust RESTful
            APIs, and turning complex ideas into seamless digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
