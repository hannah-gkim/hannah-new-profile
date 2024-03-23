import { Icon } from "@iconify-icon/react";
// import profileImg from "../../assets/img/hero_img.png";

export default function Profile() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hannah-gkim/", "_blank");
  };
  const openGitHub = () => {
    window.open("https://github.com/hannah-gkim", "_blank");
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="profile-section--title">Hi, I'm Hannah</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div onClick={openGitHub} className="footer-icon">
              <Icon icon="uil-github-alt" width={"20px"} />
            </div>
            <div onClick={openLinkedIn} className="footer-icon">
              <Icon icon="uil-linkedin-alt" width={"20px"} />
            </div>
          </div>
          <p className="hero--section-description">
            An accomplished software engineer with over 2 years of full-stack
            development experience, specializing in React development
          </p>
        </div>

        <div className="profile-button-container">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = "mailto:hannahgomezkim@gmail.com";
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero--section--img">
        <img
          src="/hero_img.png"
          alt="Hero Section"
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
    </section>
  );
}
