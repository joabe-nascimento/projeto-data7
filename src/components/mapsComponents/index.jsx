import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Text, Button } from "@chakra-ui/react";
import L from "leaflet";
import { useEffect, useRef } from "react";

const CenterMapButton = ({ position }) => {
  const map = useMap();
  const centerMap = () => {
    map.setView(position, map.getZoom()); // Re-centra o mapa na posição do marcador
  };

  return (
    <Button onClick={centerMap} colorScheme="blue" size="md" boxShadow="md">
      Voltar para o marcador
    </Button>
  );
};

const MapComponent = () => {
  const position = [-12.251470538985206, -38.957845421040666];
  const mapRef = useRef(null);

  useEffect(() => {
    // Ajustar o estilo do marcador
    const markerIcon = new L.Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      shadowSize: [41, 41],
    });

    L.Marker.prototype.options.icon = markerIcon;
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%" // Ocupa 100% da largura do container pai
      height="500px" // Aumentando a altura do mapa para melhor visualização
      borderRadius="xl"
      overflow="hidden"
      position="relative"
      boxShadow="xl"
      mx={0} // Remove margem horizontal para ocupar toda largura
      px={0} // Remove padding horizontal
    >
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position}>
          <Tooltip direction="top" offset={[0, -35]} opacity={1} permanent>
            <Text fontWeight="bold">Sede da União Médica</Text>
          </Tooltip>
        </Marker>

        {/* Adicionando um título sempre visível sobre o mapa */}
        <Box
          position="absolute"
          top="10px"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          color="black"
          borderRadius="md"
          p={2}
          zIndex={1000}
          boxShadow="md"
        >
          <Text fontSize="lg" fontWeight="bold">
            Localização: Sede da União Médica
          </Text>
        </Box>

        <Box
          position="absolute"
          bottom="20px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={1000}
        >
          <CenterMapButton position={position} />
        </Box>
      </MapContainer>
    </Box>
  );
};

export default MapComponent;
