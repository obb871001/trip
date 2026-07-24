import { Box } from "@chakra-ui/react";

const STYLES = {
  free: { bg: "rgba(16,185,129,0.16)", color: "#6EE7B7" },
  book: { bg: "rgba(249,115,22,0.18)", color: "#FDBA74" },
  opt: { bg: "rgba(148,163,184,0.18)", color: "#CBD5E1" },
  warn: { bg: "rgba(244,63,94,0.18)", color: "#FDA4AF" },
};

export default function Tag({ label, kind = "opt" }) {
  const s = STYLES[kind] || STYLES.opt;
  return (
    <Box
      as="span"
      display="inline-block"
      ml={2}
      fontSize="11px"
      fontWeight="700"
      px={2.5}
      py={0.5}
      rounded="full"
      verticalAlign="middle"
      bg={s.bg}
      color={s.color}
    >
      {label}
    </Box>
  );
}
