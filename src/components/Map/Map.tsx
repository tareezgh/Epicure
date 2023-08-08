import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { MapIcon } from "./style";

const MapComponent = () => {
  const customIcon = new Icon({
    iconUrl: require("../../assets/map-icon.png"),
    iconSize: [45, 45], // size of the icon
  });

  const markers = [
    {
      latitude: 32.070827330819874,
      longitude: 34.787682429159084,
      popUp: "Claro",
    },
    {
      latitude: 32.066910855785544,
      longitude: 34.78205452838259,
      popUp: "Kab Kem",
    },
    {
      latitude: 32.07062148145425,
      longitude: 34.78694942760815,
      popUp: "Messa",
    },
    {
      latitude: 32.07138151266008,
      longitude: 34.787461615950306,
      popUp: "Tiger Lilly",
    },
  ];

  return (
    <>
      <MapContainer
        center={[32.06823723362243, 34.783579881141655]}
        zoom={16}
        style={{ height: "582px", width: "1184px" }}
      >
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <TileLayer
          attribution="Google Maps"
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          // url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        {/* Mapping through the markers */}
        {markers.map((marker, key: number) => (
          <Marker
            key={key}
            position={[marker.latitude, marker.longitude]}
            icon={customIcon}
          >
            <Popup>{<MapIcon>{marker.popUp}</MapIcon>}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default MapComponent;
