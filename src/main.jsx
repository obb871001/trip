import React from "react";
import ReactDOM from "react-dom/client";

// 字型自帶，不走 Google Fonts CDN —— 離線、GitHub Pages、任何網路環境都一致
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource-variable/noto-sans-tc";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
