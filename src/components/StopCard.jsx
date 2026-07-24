import { Box, Flex, Text, HStack } from "@chakra-ui/react";
import { TbCar } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import Reveal from "./Reveal";
import Tag from "./Tag";
import MapLinks from "./MapLinks";

// ── 時間軸尺寸 ──────────────────────────────
const LINE = "rgba(125,211,252,0.22)"; // 路線顏色
const RAIL_W = "52px";                  // 左側軌道欄寬
const LINE_X = "26px";                  // 路線中心 x
const DOT = 30;                         // 車站節點直徑
const DOT_TOP = 15;                     // 節點與卡片標題對齊的上緣位移
const CENTER = DOT_TOP + DOT / 2;       // 節點中心 y = 30
const RING = "#0a1a2b";                 // 節點外環（貼近底色）

function grad(g) {
  return `linear-gradient(135deg, ${g[0]}, ${g[1]})`;
}

function OptionCard({ opt }) {
  return (
    <Box h="100%" bg="rgba(255,255,255,0.05)" border="1px solid" borderColor="rgba(255,255,255,0.09)" rounded="14px" p={3.5}>
      <Text fontWeight="900" fontSize="15px" color="#EAF3FA">
        {opt.name}
        {opt.badge && <Tag label={opt.badge[0]} kind={opt.badge[1]} />}
      </Text>
      <Text fontSize="12.5px" color="#9DB4C6" mt={1}>
        {opt.desc}
      </Text>
      <MapLinks links={opt.links} />
    </Box>
  );
}

// 車站節點 + 上下路線段
function Rail({ gradient, node, isFirst, isLast, hasLeg }) {
  const showTop = !isFirst;
  const showBottom = hasLeg || !isLast;
  return (
    <Box position="relative" w={RAIL_W} flex="none">
      {showTop && (
        <Box position="absolute" left={LINE_X} top="0" h={`${CENTER}px`} w="2px" transform="translateX(-1px)" bg={LINE} />
      )}
      {showBottom && (
        <Box position="absolute" left={LINE_X} top={`${CENTER}px`} bottom="0" w="2px" transform="translateX(-1px)" bg={LINE} />
      )}
      <Flex
        position="absolute"
        top={`${DOT_TOP}px`}
        left={LINE_X}
        transform="translateX(-50%)"
        w={`${DOT}px`}
        h={`${DOT}px`}
        align="center"
        justify="center"
        rounded="full"
        color="white"
        fontFamily="num"
        fontWeight="800"
        fontSize="13px"
        style={{ background: grad(gradient), textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
        boxShadow={`0 0 0 4px ${RING}, 0 8px 18px -6px rgba(0,0,0,0.6)`}
      >
        {node}
      </Flex>
    </Box>
  );
}

// 交通段：路線上的車輛節點 + 標籤
function LegRow({ label }) {
  return (
    <Flex align="stretch">
      <Box position="relative" w={RAIL_W} flex="none">
        <Box position="absolute" left={LINE_X} top="0" bottom="0" w="2px" transform="translateX(-1px)" bg={LINE} />
        <Flex
          position="absolute"
          top="50%"
          left={LINE_X}
          transform="translate(-50%,-50%)"
          w="26px"
          h="26px"
          align="center"
          justify="center"
          rounded="full"
          bg={RING}
          border="2px solid"
          borderColor={LINE}
          color="#9DB4C6"
        >
          <TbCar size={14} />
        </Flex>
      </Box>
      <Flex flex="1" align="center" py="13px">
        <HStack
          gap={1.5}
          bg="rgba(255,255,255,0.05)"
          border="1px solid rgba(255,255,255,0.09)"
          rounded="full"
          px={3}
          py={1}
          color="#9DB4C6"
          fontSize="12.5px"
          fontWeight="700"
        >
          <Text>{label}</Text>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default function StopCard({ stop, node, isFirst, isLast }) {
  const { time, title, tags, meta, note, links, options, gradient, legAfter } = stop;

  return (
    <>
      <Flex align="stretch">
        <Rail gradient={gradient} node={node} isFirst={isFirst} isLast={isLast} hasLeg={!!legAfter} />

        <Box flex="1" minW="0" pb={legAfter ? "0" : "22px"}>
          <Reveal>
            <Box
              position="relative"
              bg="rgba(16,32,49,0.55)"
              backdropFilter="blur(16px)"
              border="1px solid rgba(255,255,255,0.09)"
              rounded="card"
              boxShadow="0 24px 50px -24px rgba(0,0,0,0.75)"
              p={4}
              overflow="hidden"
            >
              <HStack gap={2.5} mb={2} align="center" flexWrap="wrap">
                <Box
                  flex="none"
                  color="white"
                  fontFamily="num"
                  fontWeight="800"
                  fontSize="13px"
                  px={3}
                  py={1.5}
                  rounded="10px"
                  whiteSpace="nowrap"
                  style={{ background: grad(gradient) }}
                  boxShadow="0 8px 16px -8px rgba(0,0,0,0.6)"
                >
                  {time}
                </Box>
                <Text fontWeight="900" fontSize="19px" color="#EAF3FA" lineHeight="1.25">
                  {title}
                  {tags && tags.map((t, i) => <Tag key={i} label={t[0]} kind={t[1]} />)}
                </Text>
              </HStack>

              {meta &&
                meta.map(([k, v], i) => (
                  <Text key={i} fontSize="13.5px" color="#9DB4C6" my={0.5}>
                    <Box as="b" color="#DCE9F3" fontWeight="700" mr={2}>
                      {k}
                    </Box>
                    {v}
                  </Text>
                ))}

              {note && (
                <Box fontSize="13px" color="#FDA4AF" bg="rgba(244,63,94,0.12)" border="1px solid rgba(244,63,94,0.25)" rounded="10px" px={3} py={2} mt={2}>
                  {note}
                </Box>
              )}

              {links && <MapLinks links={links} />}

              {options && (
                <Box mt={3}>
                  <Swiper
                    modules={[FreeMode, Mousewheel]}
                    freeMode
                    mousewheel={{ forceToAxis: true }}
                    grabCursor
                    spaceBetween={12}
                    slidesPerView={1.05}
                    breakpoints={{ 640: { slidesPerView: 2.0 }, 1024: { slidesPerView: 2.2 } }}
                    style={{ overflow: "visible", paddingBottom: 4 }}
                  >
                    {options.map((opt, i) => (
                      <SwiperSlide key={i} style={{ height: "auto" }}>
                        <OptionCard opt={opt} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Box>
              )}
            </Box>
          </Reveal>
        </Box>
      </Flex>

      {legAfter && <LegRow label={legAfter} />}
    </>
  );
}
