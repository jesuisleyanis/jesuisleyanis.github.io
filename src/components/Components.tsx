import { Rabbit } from "lucide-react";

function Button() {
    return (<button className="btn btn-success">Click here</button>);
}

export default function Components() {
    return (
        <div className="flex flex-col items-start gap-4">
            <button className="btn-lg btn-danger">
                <Rabbit size={24}>

                </Rabbit>
            </button>
        </div>
    )
}