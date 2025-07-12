"use client";

import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { Parallax } from "react-parallax";

export default function SectionAvaliacoes() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Parallax
      blur={0}
      bgImage="https://images.pexels.com/photos/6803551/pexels-photo-6803551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      bgImageAlt="Imagem de fundo com efeito parallax"
      strength={500}
    >
      <Flex
        w={"full"}
        h={isMobile ? "40vh" : "50vh"}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundRepeat={"no-repeat"}
      >
        <VStack
          w={"full"}
          h={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          align={"center"}
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
            <Button
              as="a"
              href="https://wa.me/5575998142613?text=Olá, gostaria de conversar sobre os serviços."
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="whatsapp"
              leftIcon={<FaWhatsapp />}
              size="md"
              borderRadius="full"
              _hover={{
                transform: "scale(1.1)",
                bg: "green.600",
              }}
              transition="all 0.3s ease-in-out"
              aria-label="Fale Conosco no WhatsApp"
            >
              Fale Conosco no WhatsApp
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </Parallax>
  );
}
