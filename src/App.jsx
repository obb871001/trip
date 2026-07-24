import { Box } from "@chakra-ui/react";
import AuroraBackground from "./components/AuroraBackground";
import Itinerary from "./components/Itinerary";

export default function App() {
  return (
    <Box position="relative" minH="100dvh">
      <AuroraBackground />
      <Itinerary />
    </Box>
  );
}
