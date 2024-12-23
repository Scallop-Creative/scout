/*
 * Page | Home
 */

// @ts-nocheck

import { IModule } from "@sygnal/sse";
import MapComponent from "./map";
import React from "react";
import { createRoot } from "react-dom/client";
import { initCounterListener } from "./counter";

export class WhatWeScout implements IModule {
  constructor() {}

  setup() {
    initCounterListener();
  }

  exec() {
    const svgElement = document.getElementById("map");

    if (!svgElement) {
      return;
    }

    const root = createRoot(svgElement);
    root.render(React.createElement(MapComponent));
  }
}
