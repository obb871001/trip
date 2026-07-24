import { HStack, Box } from "@chakra-ui/react";
import { FiMapPin, FiExternalLink } from "react-icons/fi";

const STYLES = {
  gmap: { bg: "rgba(56,189,248,0.15)", color: "#7DD3FC", icon: <FiMapPin size={13} /> },
  amap: { bg: "rgba(255,255,255,0.08)", color: "#E2E8F0", icon: <FiMapPin size={13} /> },
  blog: { bg: "rgba(234,179,8,0.15)", color: "#FCD34D", icon: <FiExternalLink size={13} /> },
};

export default function MapLinks({ links = [] }) {
  if (!links.length) return null;
  return (
    <HStack gap={2} flexWrap="wrap" mt={2.5}>
      {links.map(([type, label, href], i) => {
        const s = STYLES[type] || STYLES.blog;
        return (
          <Box
            as="a"
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            fontSize="12.5px"
            fontWeight="700"
            px={3}
            py={1.5}
            rounded="full"
            bg={s.bg}
            color={s.color}
            transition="transform .15s ease"
            _hover={{ transform: "translateY(-2px)" }}
          >
            {s.icon}
            {label}
          </Box>
        );
      })}
    </HStack>
  );
}
