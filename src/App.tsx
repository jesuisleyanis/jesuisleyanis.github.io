import Header from "../src/components/Header";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/Contact";
import "./App.css";

function App() {
    return (
        <div className="size-3/5 place-content-center">
            <Header></Header>
            <div className="flex flex-col lg:flex-row">
              <div className="mt-10 lg:size-2/4">
                  <ProjectsSection></ProjectsSection>
              </div>
              <div className="mt-10 lg:size-2/4">
                <ExperienceSection></ExperienceSection>
              </div>
            </div>
            <div className="mt-24">
              <SkillsSection></SkillsSection>
            </div>
            <div className="mt-24">
              <ContactSection></ContactSection>
            </div>
            <div className="h-32"></div>
        </div>
    );
}
export default App;
