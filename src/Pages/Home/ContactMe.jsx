import { Icon } from "@iconify-icon/react";

export default function ContactMe() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hannah-gkim/", "_blank");
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2 className="skills--section--heading">Contact Me</h2>
        <p className="sub--title">Get In Touch</p>
        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <Icon
              icon="uil-envelope"
              width={"20px"}
              style={{
                color: "#ffbbb1bd",
              }}
            />
            <p>Email</p>
          </div>
          <p
            onClick={() => {
              window.location.href = "mailto:hannahgomezkim@gmail.com";
            }}
            style={{
              cursor: "pointer",
              paddingLeft: "2.25rem",
            }}
            className="text-lg contact-mail"
          >
            hannahgomezkim@gmail.com
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Icon
              icon="uil-linkedin-alt"
              width={"20px"}
              style={{
                color: "#ffbbb1bd",
              }}
            />
            <p className="contact-mail" onClick={openLinkedIn}>
              LinkedIn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
