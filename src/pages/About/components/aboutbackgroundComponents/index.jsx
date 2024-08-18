"use client";

import {
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Parallax } from "react-parallax";

export default function SectionParallaxImage() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Parallax
      blur={0}
      bgImage="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg"
      bgImageAlt="Imagem de fundo"
      strength={500} // Ajuste o valor para controlar a intensidade do efeito de paralaxe
    >
      <Flex
        w={"full"}
        h={isMobile ? "40vh" : "50vh"} // Ajusta a altura para dispositivos móveis
        backgroundSize={"cover"} // Garante que a imagem cubra a área sem esticar
        backgroundPosition={"center center"} // Centraliza a imagem
        backgroundRepeat={"no-repeat"} // Evita a repetição da imagem
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          h={"full"} // Garante que o gradiente cubra a altura total
          align={"center"} // Centraliza o conteúdo
          spacing={4} // Adiciona espaço entre o texto e as bordas
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Text
              align={"center"}
              color={"white"}
              fontWeight={800}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
              p={4} // Adiciona padding ao texto para melhorar a legibilidade
            >
              Quem Somos
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </Parallax>
  );
}
