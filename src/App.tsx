import { Cat } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="flex items-start gap-4">
    <button className="btn btn-active">Default</button>
    <button className="btn btn-active btn-neutral">Neutral</button>
    <button className="btn btn-active btn-primary">Primary</button>
    <button className="btn btn-active btn-secondary">Secondary</button>
    <button className="btn btn-active btn-accent">Accent</button>
    <button className="btn btn-active btn-ghost">Ghost</button>
    <button className="btn btn-active btn-link">Link</button>
    </div>
)
}
export default App;
