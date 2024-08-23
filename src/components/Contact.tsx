import { Contact, ExternalLink } from "lucide-react";
import Code from "./Code";

const ContactCard = ({
    img,
    target,
    text,
    icon,  // Le logo du réseau social
    subtext,
}: {
    img: string;
    target: string;
    text: string;
    icon: any;
    subtext: string;
}) => {
    return (
        <div className="card card-compact border border-slate-700 shadow-xl card-color p-3 xl:size-1/3 mt-2 xl:mt-0">
            <div className="flex">
                <div className="relative">
                    <img
                        src={img}
                        alt="img"
                        className="rounded-full object-contain min-w-12 w-12 aspect-auto"
                    />
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5">
                        {icon}
                    </div>
                </div>
                <div className="flex flex-col ms-3 w-full">
                    <a href={target}>{text}</a>
                    <p className="text-xs mt-1 text-gray-500 flex overflow-hidden text-ellipsis">{subtext}</p>
                </div>
                <div className="flex flex-col justify-center items-end ">
                    <a href={target}>
                        <ExternalLink size={18} color="gray" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function ContactSection() {
    return (
        <div>
            <Code>
                <Contact size={17} className="mr-1" />
                Contact
            </Code>
            <h2 className="font-bold text-3xl text-grisjoli">
                Contact me with...
            </h2>
            <div className="flex flex-col xl:flex-row xl:space-x-2 mt-3">
                <ContactCard
                    img={"/src/assets/moi.jpg"}
                    text="@yanis_cpl_"
                    subtext="Follow me on instagram"
                    target={"https://www.instagram.com/yanis_cpl_/"}
                    icon={
                        <img 
                            src="/src/assets/sociale.png"
                            className="h-4 aspect-auto object"
                            alt="img"
                        />
                    }
                />

                <ContactCard
                    img={"/src/assets/moi.jpg"}
                    text="@yanis-capelle"
                    subtext="Here is my linkedin"
                    target="https://www.linkedin.com/in/yanis-capelle-3b1077231/"
                    icon={
                        <img 
                            src="/src/assets/linkedin.png"
                            className="h-4 aspect-auto object"
                            alt="img"
                        />
                    }
                />

                <ContactCard
                    img={"/src/assets/moi.jpg"}
                    text="Email me"
                    subtext="Contact me via my mail"
                    target="mailto:yanis.capelle@ecoles-epsi.net"
                    icon={
                        <img 
                            src="/src/assets/gmail.png"
                            className="h-4 aspect-auto object"
                            alt="img"
                        />
                    }
                />
            </div>
        </div>
    );
}
