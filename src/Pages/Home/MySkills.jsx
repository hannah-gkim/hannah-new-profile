import { Icon } from "@iconify-icon/react";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">My Expertise</h2>
        <p className="section--title">My Skills</p>
      </div>
      <div className="my-skills-box">
        {/* Box1 */}
        <div className="my-skills-container">
          <h3 className="skill--section--title">Languages</h3>
          <p>
            <i className="devicon-html5-plain colored"></i> HTML
          </p>
          <p>
            <i className="devicon-css3-plain colored"></i> CSS
          </p>
          <p>
            <i className="devicon-javascript-plain colored"></i> JavaScript
          </p>
          <p>
            <i className="devicon-typescript-plain colored"></i> TypeScript
          </p>
        </div>
        {/* box2 */}
        <div className="my-skills-container">
          <h3 className="skill--section--title">Frontend Technologies</h3>
          <p>
            <i className="devicon-react-original colored logo"></i> React/Vite
          </p>
          <p>
            <i className="devicon-react-original colored logo"></i> React Native
          </p>
          <p>
            <i className="devicon-redux-original colored logo"></i> Redux
          </p>
          <p>
            <Icon
              icon="logos:jest"
              width={"14px"}
              style={{ marginRight: "4px", marginBottom: "-3px" }}
            />
            Jest
          </p>
        </div>
        <div className="my-skills-container">
          <h3 className="skill--section--title">Backend Technologies</h3>
          <p>
            <i class="devicon-nodejs-plain-wordmark colored"></i> Node.js
          </p>
          <p>
            <i className="devicon-express-original colored logo"></i> Express.js
          </p>
          <p>
            <i className="devicon-sequelize-plain colored"></i> Sequelize
          </p>
          <p>
            <i className="devicon-nestjs-plain colored"></i> Nest.js
          </p>
          <p>
            <Icon
              icon="logos:typeorm"
              width={"14px"}
              style={{ marginRight: "4px", marginBottom: "-1px" }}
            />
            TypeORM
          </p>
          <p>
            <i className="devicon-graphql-plain colored"></i> GraphQL
          </p>
          <p>
            <i className="devicon-postgresql-plain colored"></i> PostgreSQL
          </p>
          <p>
            <Icon
              icon="tabler:file-type-sql"
              width={"18px"}
              style={{ marginLeft: "-2px", marginBottom: "-2px" }}
            />{" "}
            SQL
          </p>
        </div>
        <div className="my-skills-container">
          <h3 className="skill--section--title">Cloud</h3>
          <p>
            <i className="devicon-googlecloud-plain colored"></i> Google Cloud
            Digital Leader (2023)
          </p>
        </div>
      </div>
    </section>
  );
}
