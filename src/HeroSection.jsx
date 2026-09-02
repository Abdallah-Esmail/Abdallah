import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abdallah</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            MERN Stack Developer passionate about turning ideas into
            high-performance web applications with seamless frontend experiences
            and solid backend logic.
          </p>
        </div>
        <div className="links">
          <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-primary hero-link"
          >
            Get In Touch
          </Link>
          <a
            href="/resume.pdf"
            download="Abdallah_Ismail_CV.pdf" // الاسم الذي سيظهر للمستخدم عند التحميل
            className="btn btn-outline-primary hero-link"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/abdallah.png" alt="Hero Section" />
      </div>
    </section>
  );
}
