const fs = require("fs");
const { join } = require("path");
const { getMapJSON } = require("dotted-map");

const mapJsonString = getMapJSON({
  height: 100,
  grid: "diagonal",
  region: {
    lat: { min: -56, max: 72 },
    lng: { min: -179, max: -30 },
  },
  //     lat: { min: -56, max: 72 },
  //     lng: { min: -179, max: -30 },
  // countries: [
  //   "FRA",
  //   "NOR",
  //   "GBR",
  //   "DEU",
  //   "ESP",
  //   "DNK",
  //   "ITA",
  //   "PRT",
  //   "CHE",
  //   "FIN",
  //   "SWE",
  //   "SVN",
  //   "HRV",
  //   "ROU",
  //   "EST",
  //   "LTU",
  //   "LUX",
  //   "MNE",
  //   "AUT",
  //   "POL",
  //   "ISL",
  //   "NLD",
  //   "CZE",
  //   "GRC",
  //   "BEL",
  //   "HUN",
  //   "SVK",
  //   "SRB",
  //   "BIH",
  //   "ALB",
  //   "BGR",
  //   "MKD",
  //   "MLT",
  //   "CS-KM",
  //   "UKR",
  //   "BLR",
  //   "MDA",
  //   "LVA",
  // ],
});

fs.writeFileSync(
  join(__dirname, "..", "pages", "what-we-scout", "map.json"),
  mapJsonString
);
