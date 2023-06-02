import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import "./index.scss";
import CustomCursorManager from "@components/CustomCursor/context/manager";
import CustomCursor from "@components/CustomCursor/customCursor";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CustomCursorManager>
    <CustomCursor />
    <Home />
  </CustomCursorManager>
);
