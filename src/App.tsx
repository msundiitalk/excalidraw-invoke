import React from "react";
import Excalidraw from "@excalidraw/excalidraw";

import "./styles.scss";

export default function App() {
    return (
        <div className="App">
            <div className="excalidraw-wrapper">
                <Excalidraw
                    name="Custom name of drawing"
                />
            </div>
        </div>
    );
}
