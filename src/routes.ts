/*
 * SITE
 * Main entry point
 *
 * https://engine.sygnal.com/
 *
 * ENGINE MODE
 * ?engine.mode=dev
 * ?engine.mode=prod
 *
 */

import { HomePage } from "./pages/home";
import { RouteDispatcher } from "@sygnal/sse";
import { Site } from "./site";
import { WhatWeScout } from "./pages/what-we-scout";

export const routeDispatcher = (): RouteDispatcher => {
  var routeDispatcher = new RouteDispatcher(Site);
  routeDispatcher.routes = {
    // Site paes
    "/": HomePage,
    "/what-we-scout": WhatWeScout,

    // TEST Pages
  };

  return routeDispatcher;
};
