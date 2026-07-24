import { Box } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const Blob = motion.div;

const BLOBS = [
  { size: 520, top: -150, left: -110, color: "#0EA5E9", delay: 0 },
  { size: 460, top: -60, right: -90, color: "#8B5CF6", delay: -4 },
  { size: 420, top: "44%", left: "32%", color: "#06B6D4", delay: -8 },
  { size: 380, top: "70%", right: "4%", color: "#FB7185", delay: -12 },
];

export default function AuroraBackground() {
  const reduce = useReducedMotion();
  const animate = reduce
    ? {}
    : { x: [0, 38, -28, 0], y: [0, 26, 18, 0], scale: [1, 1.07, 0.95, 1] };

  return (
    <Box
      position="fixed"
      inset="0"
      zIndex={-2}
      overflow="hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 100% 0%, #0d2a44 0%, #0a1d31 46%, #060F1A 100%)",
      }}
    >
      {BLOBS.map((b, i) => (
        <Blob
          key={i}
          animate={animate}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          style={{
            position: "absolute",
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.38,
            mixBlendMode: "screen",
            background: b.color,
          }}
        />
      ))}
      {/* 暗角壓低邊緣，讓內容更聚焦 */}
      <Box
        position="absolute"
        inset="0"
        style={{ background: "radial-gradient(130% 100% at 50% 0%, transparent 55%, rgba(3,8,15,0.55) 100%)" }}
      />
    </Box>
  );
}
