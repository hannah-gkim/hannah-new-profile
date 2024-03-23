import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Profile from "../Profile";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <div className="window-size">
        <Profile />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
