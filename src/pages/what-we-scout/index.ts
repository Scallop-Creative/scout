/*
 * Page | Home
 */

// @ts-nocheck

import { IModule } from "@sygnal/sse";
import MapComponent from "./map";
import React from "react";
import { createRoot } from "react-dom/client";

const COUNTRIES = [
  "USA",
  "CAN",
  "ARG",
  "PER",
  "CHL",
  "BLZ",
  "BOL",
  "COL",
  "ECU",
  "GUY",
  "URY",
  "VEN",
  "BRA",
  "PRY",
  "SUR",
  "MEX",
  "NIC",
  "CRI",
  "SLV",
  "GTM",
  "HND",
  "PAN",
];

const LOCATIONS = [];

export class WhatWeScout implements IModule {
  constructor() {}

  setup() {
    // Page.loadEngineCSS("leaflet/dist/leaflet.css");
  }

  exec() {
    // const DottedMap = require("dotted-map").default;

    // const map = new DottedMap({
    //   height: 100,
    //   grid: "diagonal",
    //   region: {
    //     lat: { min: -56, max: 72 },
    //     lng: { min: -179, max: -30 },
    //   },
    // });

    // map.addPin({
    //   lat: 35.8324,
    //   lng: -78.6429,
    //   svgOptions: { color: "#0a4b51", radius: 0.9 },
    // });

    // map.addPin({
    //   lat: 34.0549,
    //   lng: -118.2426,
    //   svgOptions: { color: "#0a4b51", radius: 0.9 },
    // });

    // map.addPin({
    //   lat: -12.0467,
    //   lng: -77.0431,
    //   svgOptions: { color: "#0a4b51", radius: 0.9 },
    // });

    // map.addPin({
    //   lat: 4.711,
    //   lng: -74.0721,
    //   svgOptions: { color: "#0a4b51", radius: 0.9 },
    // });

    // map.addPin({
    //   lat: 53.54826138198507,
    //   lng: -113.51474549857619,
    //   svgOptions: { color: "#0a4b51", radius: 0.9 },
    // });

    // const svgMap = map.getSVG({
    //   radius: 0.25,
    //   color: "#858585",
    //   shape: "circle",
    //   backgroundColor: "white",
    // });

    const svgElement = document.getElementById("map");

    if (!svgElement) {
      return;
    }

    // const App = () => {
    //   return (
    //     <div>
    //       <HelloWorld />
    //     </div>
    //   );
    // };

    // console.log("HelloWorld", HelloWorld);

    const root = createRoot(svgElement);
    root.render(React.createElement(MapComponent));

    // ReactDOM.render(React.createElement(HelloWorld), svgElement);

    // ReactDOM.render(<HelloWorld />, svgElement);

    // var img = document.createElement("img");
    // img.src = `data:image/svg+xml;utf8, ${encodeURIComponent(svgMap)}`;
    // svgElement.appendChild(img);
  }
}
