import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GiftExpertApp from "./GiftExpertApp";

const divRoot = document.getElementById("root");
const root = createRoot(divRoot);

root.render(
  // <React.StrictMode>
    <GiftExpertApp />
  // </React.StrictMode>
);
