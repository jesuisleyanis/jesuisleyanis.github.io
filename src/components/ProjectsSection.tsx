import "../App.css";
import { RocketIcon } from "./icons/Rocket";
import { MoveRight } from "lucide-react";

const ProjectsRow = ({img, target, text, isFinnish}: {img: string; target: string, text: string; isFinnish: boolean}) => {
    return (
        <div className="flex">
            <img className="w-9 object-contain" src={img} alt="img" />
            <div className="flex flex-col ms-4">
                <p className="text-sm font-bold flex">{text}</p>
                {isFinnish ? (
                    <a href={target}>
                        <p className="text-xs mt-1 text-gray-500 flex">Voir le projet<MoveRight size={18} className="ms-4" /></p>
                    </a>
                ) : (
                    <p className="text-xs mt-1 text-gray-500 flex">Is in development...</p>
                )}
            </div>
        </div>
    )
}

export default function ProjectsSection() {
    return (
        <div className="card card-compact border border-slate-700 shadow-xl card-color p-3">
            <div className="flex">
                <RocketIcon color="#f4f4f51a" className="fill-zinc-100/10" strokeWidth={1.5}/>
                <p className="ps-2 icons-section text-sm font-bold">My projects</p>
            </div>
            <div className="mt-3">
                <ProjectsRow img={"/src/assets/mercure.png"} target={"#"} text={"Mercure Hotel"} isFinnish={true}></ProjectsRow>
                <ProjectsRow img={"/src/assets/serpent.png"} target={"#"} text={"Snake Game"} isFinnish={true}></ProjectsRow>
                <ProjectsRow img={"/src/assets/apprendre.png"} target={"#"} text={"Learn It"} isFinnish={true}></ProjectsRow>
                <ProjectsRow img={"/src/assets/site-internet.png"} target={"#"} text={"My Portfolio"} isFinnish={true}></ProjectsRow>
                <ProjectsRow img={"/src/assets/pharmacie.png"} target={"#"} text={"Pharmacy Shedule"} isFinnish={false}></ProjectsRow>                
            </div>
        </div>
    );
}