import { Box, Flex, Text } from "@chakra-ui/react";

// 行程分頁切換列（sticky）
export default function TripTabs({ trips, activeId, onChange }) {
  return (
    <Flex
      position="sticky"
      top="0"
      zIndex={20}
      gap={1.5}
      p={2}
      mb={4}
      bg="rgba(10,26,43,0.72)"
      backdropFilter="blur(18px)"
      border="1px solid rgba(255,255,255,0.09)"
      rounded="18px"
      boxShadow="0 18px 40px -26px rgba(0,0,0,0.9)"
    >
      {trips.map((t) => {
        const active = t.id === activeId;
        return (
          <Box
            as="button"
            type="button"
            key={t.id}
            onClick={() => onChange(t.id)}
            aria-pressed={active}
            flex="1"
            px={2}
            py={2.5}
            rounded="13px"
            lineHeight="1.35"
            transition="background .18s ease, color .18s ease"
            color={active ? "white" : "#9DB4C6"}
            style={active ? { background: "linear-gradient(135deg,#0EA5E9,#6366F1)" } : undefined}
            boxShadow={active ? "0 10px 22px -12px rgba(0,0,0,0.9)" : "none"}
            _hover={{ color: active ? "white" : "#DCE9F3" }}
          >
            <Text fontWeight="800" fontSize="14px">
              {t.tab}
            </Text>
            <Text fontWeight="700" fontSize="11.5px" opacity={active ? 0.85 : 0.7}>
              {t.tabSub}
            </Text>
          </Box>
        );
      })}
    </Flex>
  );
}
