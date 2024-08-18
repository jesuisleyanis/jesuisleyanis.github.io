import Header from "../src/components/Header";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css";

function App() {
    return (
        <div className="size-3/5 place-content-center">
            <Header></Header>
            <div className="mt-10 size-3/5">
                <ProjectsSection></ProjectsSection>
            </div>
        </div>
    );
}
export default App;
