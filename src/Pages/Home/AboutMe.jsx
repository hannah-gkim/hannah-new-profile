// import aboutMeImg from "../../assets/img/about-me.png";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="/about-me.png"
          alt="About Me"
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">About Me</h1>
          {/* <p
           className="section--title">About</p> */}
          <p className="hero--section-description">
            As an accomplished software engineer with 3 years of full-stack
            development experience, specializing in frontend technologies such
            as React, I bring a diverse perspective to projects. With fluency in
            English, Korean, and Japanese, and having lived in multiple
            countries, I have cultivated a deep understanding of cross-cultural
            dynamics. I am passionate about continuous learning and exploring
            emerging technologies, leveraging my international background to
            contribute effectively to cross-cultural teams.
          </p>
        </div>
      </div>
    </section>
  );
}
