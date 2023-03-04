import Header from "./header/Header";
import Projects from "./project/Projects";
import About from "./about/About";
import Schedule from "./schedule/Schedule";
import Footer from "../../components/Footer";


function Main() {
  return (
    <>
      <Header id="header" />
      <Projects id="projects" />
      <About id="about" />
      <Schedule id="schedule" />
      <Footer />
    </>
  );
}
export default Main;
