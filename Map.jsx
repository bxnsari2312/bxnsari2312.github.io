import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const markers = [
  {
    markerOffset: 15,
    name: "Toronto",
    coordinates: [-79.3832, 43.6532]
  }
];

const MapChart = () => {
  const [touchedCities, setTouchedCities] = useState([]);

  const handleCityClick = (name) => {
    if (touchedCities.includes(name)) {
      setTouchedCities(touchedCities.filter((city) => city !== name));
    } else {
      setTouchedCities([...touchedCities, name]);
    }
  };

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400
      }}
      style={{ width: "150%", height: "100%", marginTop: "70px", transform: "translateY(250px)" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isTouched = touchedCities.includes(geo.properties.name);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isTouched ? "#44473b" : "#EAEAEC"}
                stroke="#D6D6DA"
                onClick={() => handleCityClick(geo.properties.name)}
              />
            );
          })
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g fill={touchedCities.includes(name) ? "#44473b" : "#c05741"} stroke="none">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "Comic Sans MS", fill: "#c66136"}}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
