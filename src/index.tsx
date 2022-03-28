import { render } from "react-dom";
// map https://unpkg.com/@excalidraw/excalidraw@0.10.0/dist/excalidraw-assets-dev/vendor-a449655791956f151f51.js
// @ts-ignore
// window.EXCALIDRAW_ASSET_PATH = `excalidraw/dist`;
// http://localhost:3000/excalidraw/dist/excalidraw-assets-dev/vendor-a449655791956f151f51.js
import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
