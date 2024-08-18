import "../App.css";
import { WalletIcon } from "./icons/Wallet";
import { ReactIcon } from "./icons/React";
ReactIcon;

const Badge = ({ text }: { text: string }) => {
    return (
        <span className="inline-flex items-center rounded-full bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
            {text}
        </span>
    );
};

const ExperiencesRow = ({
    img,
    target,
    text,
    libelle,
    duration,
    badges,
}: {
    img: string;
    target: string;
    text: string;
    libelle: string;
    duration: string;
    badges: string[];
}) => {
    return (
        <div className="flex mt-2">
            <img className="w-9 object-contain" src={img} alt="img" />
            <div className="flex flex-col ms-4 w-full">
                <div className="flex">
                    <a className="text-sm font-bold flex mr-3" href={target}>
                        {text}
                    </a>
                    <div className="flex space-x-1">
                        {badges.map((badge, index) => (
                            <Badge key={index} text={badge}></Badge>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-xs mt-1 text-gray-500">{libelle}</p>
                    <p className="text-xs mt-1 text-gray-500">{duration}</p>
                </div>
            </div>
        </div>
    );
};

export default function ExperienceSection() {
    return (
        <div className="card card-compact border border-slate-700 shadow-xl card-color p-3">
            <div className="flex">
                <WalletIcon
                    className="fill-zinc-100/10"
                    strokeWidth={1.5}
                    size={24}
                ></WalletIcon>
                <p className="ps-2 icons-section text-sm font-bold">
                    Experiences
                </p>
            </div>
            <div className="mt-3">
                <ExperiencesRow
                    img={"/src/assets/izydesk.png"}
                    target={"https://izydesk.fr/"}
                    text={"Izydesk"}
                    libelle={"Développeur web fullstack"}
                    duration="Jully 2024 — Now"
                    badges={["Symfony", "React", "Bootstrap"]}
                />
                <ExperiencesRow
                    img={"/src/assets/dragon.png"}
                    target={"https://www.dragonsports.eu/fr/"}
                    text={"DragonSports"}
                    libelle={"Développeur web fullstack"}
                    duration="December 2023 — February 2024"
                    badges={["Laravel", "Bootstrap"]}
                />
                <ExperiencesRow
                    img={"/src/assets/médiprix.png"}
                    target={"https://mediprix.fr/"}
                    text={"Médiprix"}
                    libelle={"Développeur web fullstack"}
                    duration="May 2023 — Jully 2023"
                    badges={["Laravel", "Ionic", "Tailwind"]}
                />
            </div>
        </div>
    );
}
