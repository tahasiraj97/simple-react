import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div>
            <h1>React + esbuild is working</h1>
            <p>If you can see this, the frontend environment is running correctly.</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);