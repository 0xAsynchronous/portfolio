import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import "./index.scss";
import CustomCursor from "@components/CustomCursor/customCursor";
import CustomCursorManager from "@components/CustomCursor/context/manager";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CustomCursorManager>
      <CustomCursor />
      <Home />
    </CustomCursorManager>
  </React.StrictMode>
);
