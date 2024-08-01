"use client";

import { Flex, Stack } from "@chakra-ui/react";
import FeedbackHeader from "./components/FeedbackHeader";
import FeedbackImage from "./components/FeedbackImage";
import FeedbackStats from "./components/FeedbackStats";

export default function Feedback() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "column" }}
      backgroundColor={"gray.200"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        flex={1}
        align={"center"}
        justify={"center"}
        p={{ base: 6, md: 12 }}
      >
        <FeedbackHeader />
        <FeedbackImage />
      </Flex>
      <FeedbackStats />
    </Stack>
  );
}
