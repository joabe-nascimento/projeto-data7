"use client";

import { Flex, Stack, Box, useColorModeValue, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FeedbackHeader from "./components/FeedbackHeader";
import FeedbackImage from "./components/FeedbackImage";
import FeedbackStats from "./components/FeedbackStats";

// Componente com animação
const MotionBox = motion(Box);

export default function Feedback() {
  // Cores dinâmicas baseadas no tema
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, white, blue.100)",
    "linear(to-br, gray.900, blue.900, gray.900)"
  );

  return (
    <Box
      as="section"
      id="services"
      py={{ base: 16, md: 24 }}
      bgGradient={bgGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Elementos decorativos */}
      <MotionBox
        position="absolute"
        top="-100px"
        right="-100px"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="blue.50"
        zIndex={0}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <MotionBox
        position="absolute"
        bottom="-150px"
        left="-150px"
        width="400px"
        height="400px"
        borderRadius="full"
        bg="blue.50"
        zIndex={0}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <Container maxW="1400px" position="relative" zIndex={1}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          mb={{ base: 16, md: 20 }}
          gap={{ base: 10, md: 0 }}
        >
          <FeedbackHeader />
          <FeedbackImage />
        </Flex>
        
        <Box mt={{ base: 12, md: 16 }}>
          <FeedbackStats />
        </Box>
      </Container>
    </Box>
  );
}
