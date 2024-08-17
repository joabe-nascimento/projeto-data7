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
      bgImage="https://images.pexels.com/photos/6803551/pexels-photo-6803551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
