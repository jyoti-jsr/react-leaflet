import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import "./styles.scss";

export default function App() {
  const data = {
    error: false,
    data: [
      {
        id: 4,
        name: "eClever",
        img: null,
        location: "Friedrichstraße 24",
        country: "Germany",
        city: "Dresden",
        postal_code: "01067",
        latitude: "51.05841628596515",
        longitude: "13.723198680313617",
        no_of_charger: 1,
        capacity: "3.7",
        power_supplier: "SachsenEnergie",
        status: "Active"
      },
      {
        id: 3,
        name: "Test 123",
        img: null,
        location:
          "Nadelöhr, Henfstädt, Feldstein, Landkreis Hildburghausen, Thuringia, 98660, Germany",
        country: "Germany",
        city: "Henfstädt",
        postal_code: "98660",
        latitude: "50.50457656746242",
        longitude: "10.590820312500002",
        no_of_charger: 2,
        capacity: "65",
        power_supplier: "Demo",
        status: "Active"
      },
      {
        id: 2,
        name: "Test Station 12",
        img: null,
        location:
          "Eichenbergweg, Jävenitz, Gardelegen, Altmarkkreis Salzwedel, Saxony-Anhalt, 39638, Germany",
        country: "Germany",
        city: "Jävenitz",
        postal_code: "39638",
        latitude: "52.50106428521538",
        longitude: "11.513671875000002",
        no_of_charger: 4,
        capacity: "52",
        power_supplier: "Demo",
        status: "Active"
      },
      {
        id: 1,
        name: "Test Station",
        img: null,
        location: "Brandenburg, 16835, Germany",
        country: "Germany",
        city: "Brandenburg",
        postal_code: "16835",
        latitude: "52.97995933859745",
        longitude: "12.919921875000002",
        no_of_charger: 4,
        capacity: "50",
        power_supplier: "Test",
        status: "Active"
      }
    ],
    message: "success"
  };
  return (
    <MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
        {data?.data.map((obj) => (
          <>
            <Marker
              position={[obj.latitude, obj.longitude]}
              key={obj.id}
            ></Marker>
          </>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
