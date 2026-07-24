import { Box, Container, Heading, Text, HStack } from "@chakra-ui/react";
import dayjs from "dayjs";

import { STOPS, TRIP_DATE } from "../data/itinerary";
import StopCard from "./StopCard";

function Countdown() {
  const days = dayjs(TRIP_DATE)
    .startOf("day")
    .diff(dayjs().startOf("day"), "day");
  let label = "7 / 25（六）· 高雄出發";
  if (days > 0) label = `出發倒數 ${days} 天 · 7/25（六）`;
  return (
    <HStack
      display="inline-flex"
      gap={2}
      bg="rgba(255,255,255,0.06)"
      border="1px solid"
      borderColor="rgba(125,211,252,0.28)"
      rounded="full"
      px={4}
      py={1.5}
      boxShadow="0 6px 18px -10px rgba(0,0,0,0.6)"
    >
      <Box
        w="7px"
        h="7px"
        rounded="full"
        bg="aurora.tropical"
        boxShadow="0 0 0 4px rgba(16,185,129,0.25)"
      />
      <Text fontWeight="700" fontSize="12.5px" color="#DCE9F3">
        {label}
      </Text>
    </HStack>
  );
}

export default function Itinerary() {
  let seq = 0;

  return (
    <Container maxW="760px" py={{ base: 5, md: 8 }} px={4}>
      {/* 標題（精簡，無 Hero） */}
      <Box textAlign="center" pt={2} pb={7}>
        <Countdown />
        <Heading
          as="h1"
          fontWeight="900"
          fontSize={{ base: "28px", md: "44px" }}
          mt={4}
          mb={1.5}
          color="#EAF3FA"
        >
          嘉義
          <Box
            as="span"
            display="inline-block"
            style={{
              backgroundImage:
                "linear-gradient(120deg,#38BDF8,#A78BFA 55%,#FB7185)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            一日行程
          </Box>
        </Heading>
        <Text color="#9DB4C6" fontSize="15px" fontWeight="500">
          第一站 天來美術館 → 收尾 桃城豆花
        </Text>
      </Box>

      {/* 路線時間軸 */}
      <Box mt={2} position="relative">
        {STOPS.map((stop, i) => {
          const optional = stop.id === "optional";
          if (!optional) seq += 1;
          return (
            <StopCard
              key={stop.id}
              stop={stop}
              node={optional ? "★" : seq}
              isFirst={i === 0}
              isLast={i === STOPS.length - 1}
            />
          );
        })}
      </Box>
    </Container>
  );
}
