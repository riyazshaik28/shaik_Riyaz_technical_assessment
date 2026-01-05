import { useState } from "react";
import { SubmitButton } from "./submit";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";

function App() {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">

      <header className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">
            VectorShift Pipeline Builder
          </h1>
          <p className="text-sm text-gray-500">
            Build and validate AI pipelines visually
          </p>
        </div>
      </header>

    
      <main className="mx-auto max-w-7xl px-6 py-6 space-y-4">
    
        <div className="rounded-xl bg-white shadow-sm border border-gray-200">
          <PipelineToolbar />
        </div>

        <div className="rounded-xl shadow-md border border-gray-200">
          <PipelineUI
            onGraphChange={(nodes, edges) =>
              setGraph({ nodes, edges })
            }
          />
        </div>

     
        <div className="
          flex
          items-center
          justify-between
          rounded-xl
          bg-white
          border
          border-gray-200
          px-6
          py-4
          shadow-sm
        ">
          <div className="text-sm text-gray-500">
           
          
          </div>

          <SubmitButton graph={graph} />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-6 text-center text-xs text-gray-400">
        Frontend Technical Assessment · VectorShift
      </footer>
    </div>
  );
}

export default App;
