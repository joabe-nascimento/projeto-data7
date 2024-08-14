"use client";

import {
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Parallax } from "react-parallax";

export default function SectionAvaliacoes() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      bgImageAlt="Imagem de fundo"
      strength={300} // Ajuste o valor para controlar a intensidade do efeito de paralaxe
    >
      <Flex
        w={"full"}
        h={"50vh"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Text
              align={"center"}
              color={"white"}
              fontWeight={800}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            >
              Fale Conosco
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </Parallax>
  );
}
