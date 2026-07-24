import { Box, Text } from "@chakra-ui/react";
import { FiAlertTriangle, FiCloudRain } from "react-icons/fi";
import Reveal from "./Reveal";

const KINDS = {
  warn: { bg: "rgba(255,247,237,0.85)", border: "#f7d4ad", color: "#b45309", icon: <FiAlertTriangle size={16} /> },
  rain: { bg: "rgba(238,244,251,0.85)", border: "#c5d9ef", color: "#2f6bd6", icon: <FiCloudRain size={16} /> },
};

export default function NoticeBox({ kind = "warn", title, rows }) {
  const s = KINDS[kind];
  return (
    <Reveal>
      <Box bg={s.bg} border="1px solid" borderColor={s.border} rounded="18px" p={4} mb={3.5} backdropFilter="blur(10px)">
        <Text display="flex" alignItems="center" gap={2} fontWeight="900" color={s.color} mb={1.5}>
          {s.icon}
          {title}
        </Text>
        {rows.map(([b, t], i) => (
          <Text key={i} fontSize="13.5px" my={1}>
            {b && (
              <Box as="b" color={s.color} fontWeight="700">
                {b}
              </Box>
            )}
            {b ? "　" : ""}
            {t}
          </Text>
        ))}
      </Box>
    </Reveal>
  );
}
