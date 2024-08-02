"use client";

import { Flex, Stack } from "@chakra-ui/react";
import FeedbackHeader from "./components/FeedbackHeader";
import FeedbackImage from "./components/FeedbackImage";
import FeedbackStats from "./components/FeedbackStats";

// Definindo as cores azul mais forte e mais suave
const strongBlue = "rgba(0, 82, 204, 0.9)"; // Azul mais forte
const lightBlue = "rgba(0, 153, 255, 0.5)"; // Azul mais suave
const backgroundTransparency = "0.9";

export default function Feedback() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "column" }}
      background={`linear-gradient(135deg, ${strongBlue} 0%, ${lightBlue} 100%)`}
      backgroundSize={"cover"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        flex={1}
        align={"center"}
        justify={"center"}
        p={{ base: 6, md: 12 }}
        bgColor={`rgba(255, 255, 255, ${backgroundTransparency})`}
        borderRadius={"0px 0px 15px 15px"}
        boxShadow={"lg"}
      >
        <FeedbackHeader />
        <FeedbackImage />
      </Flex>
      <FeedbackStats />
    </Stack>
  );
}
