import { FaCloud, FaDatabase, FaServer } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--icon">
            <FaDisplay />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Front-End Development</h3>
            <p className="skills--section--description">
              Building interactive, responsive, and high-performance user
              interfaces using React.js, Redux Toolkit, HTML5, CSS3, and
              JavaScript.
            </p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--icon">
            <FaServer />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Back-End Development</h3>
            <p className="skills--section--description">
              Architecting secure, scalable RESTful APIs and server-side logic
              with Node.js, Express.js, and JWT authentication.
            </p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--icon">
            <FaDatabase />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Database Management</h3>
            <p className="skills--section--description">
              Designing efficient NoSQL database schemas, queries, and data
              modeling using MongoDB and Mongoose ORM.
            </p>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--icon">
            <FaCloud />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">DevOps & Deployment</h3>
            <p className="skills--section--description">
              Managing version control with Git/GitHub, testing APIs with
              Postman, and deploying MERN apps to Vercel and Render.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
