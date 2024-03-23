import data from "../../data";
import { Icon } from "@iconify-icon/react";

export default function MyPortfolio() {
  const openGitHub = () => {
    window.open("https://github.com/hannah-gkim", "_blank");
  };
  const openGitHubProject = (item) => {
    window.open(item.link, "_blank");
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">My Portfolio</h2>
          <p className="sub--title">Projects</p>
        </div>
        <div>
          <button className="btn btn-github" onClick={openGitHub}>
            <Icon icon="uil-github-alt" />
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h2 className="portfolio--section--title">{item.title}</h2>
                <p className="text-md">{item.description}</p>
              </div>
              <p
                className="text-sm portfolio--link"
                onClick={() => openGitHubProject(item)}
              >
                <div className="portfolio-github-icon">
                  <Icon icon="uil-github-alt" width={"20px"} />
                  <Icon icon="uil-arrow-right" width={"20px"} />
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
