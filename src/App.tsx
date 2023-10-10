import { createEditor } from "./editor";
import { useRete } from "rete-react-plugin";

export default function App() {
  const [ref] = useRete(createEditor);

  return (
    <div className="App bg-slate-200">
      <div className="text-2xl text-slate-800">Rete React Plugin</div>
      {/* card style with large margins and fixed size */}
      <div className="shadow-lg bg-white rounded-lg mx-6 my-4 p-4 flex flex-col items-center">
        <div ref={ref} style={{ height: "100vh", width: "100vw" }} />
      </div>
    </div>
  );
}
