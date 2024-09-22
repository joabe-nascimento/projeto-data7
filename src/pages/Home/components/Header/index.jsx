"use client";
import { useState } from "react";
import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  IconButton,
  chakra,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

// Importe suas imagens
import carroselimg1 from "../../../../assets/carroselimg1.webp";
import carroselimg2 from "../../../../assets/carroselimg2.webp";

const images = [carroselimg1, carroselimg2]; // Array com suas imagens

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const whatsappNumber = "+5575999194533";
  const whatsappMessage =
    "Olá, gostaria de mais informações sobre seus serviços.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Flex w={"full"} h={"100vh"} position={"relative"} overflow={"hidden"}>
      {/* Carrossel de imagens */}
      <Box
        w="full"
        h="100vh"
        bgImage={`url(${images[currentSlide]})`}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        transition="background-image 0.8s ease-in-out"
        position="absolute"
        top={0}
        left={0}
      ></Box>

      {/* Navegação do carrossel */}
      <IconButton
        aria-label="Previous Slide"
        icon={<ArrowBackIcon boxSize={6} />}
        onClick={handlePrevSlide}
        position="absolute"
        top="50%"
        left="20px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="rgba(255, 255, 255, 0.2)"
        _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
        _active={{ bg: "rgba(255, 255, 255, 0.4)" }}
        color="white"
        boxShadow="lg"
        rounded="full"
        backdropFilter="blur(5px)"
        transition="all 0.3s"
      />
      <IconButton
        aria-label="Next Slide"
        icon={<ArrowForwardIcon boxSize={6} />}
        onClick={handleNextSlide}
        position="absolute"
        top="50%"
        right="20px"
        transform="translateY(-50%)"
        zIndex={2}
        bg="rgba(255, 255, 255, 0.2)"
        _hover={{ bg: "rgba(255, 255, 255, 0.3)" }}
        _active={{ bg: "rgba(255, 255, 255, 0.4)" }}
        color="white"
        boxShadow="lg"
        rounded="full"
        backdropFilter="blur(5px)"
        transition="all 0.3s"
      />

      {/* Conteúdo principal */}
      <VStack
        w={"full"}
        alignItems={"left"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        position={"relative"}
        zIndex={1}
      >
        <Container maxW={"1200px"} px={12} py={8}>
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              as="h1"
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
            >
              Bem-vindos <br /> à DATA7
            </Text>

            <Text
              as="h2"
              color={"white"}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
            >
              A Data7 oferece serviços e produtos de TI para diversas empresas.
              Vendemos e implantamos sistemas ERP, equipamentos SAT e
              certificados digitais. Também desenvolvemos sites de alto impacto,
              aplicativos e bots de atendimento ao cliente. Nenhum projeto é
              grande ou pequeno demais para nós!
            </Text>
            <Stack direction={"row"}>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                bg={"blue.400"}
                rounded={"15px 15px 15px"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Fale Conosco
              </Button>
            </Stack>
          </Stack>
        </Container>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
