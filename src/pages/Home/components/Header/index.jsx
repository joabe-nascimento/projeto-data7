"use client";
import { useState, useEffect } from "react";
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
  Badge,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Importe suas imagens
import carroselimg1 from "../../../../assets/carroselimg1.webp";
import carroselimg2 from "../../../../assets/carroselimg2.webp";

// Componentes animados
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionStack = motion(Stack);
const MotionBadge = motion(Badge);

const images = [carroselimg1, carroselimg2]; // Array com suas imagens

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Cores dinâmicas baseadas no tema
  const accentColor = useColorModeValue("blue.500", "blue.300");

  useEffect(() => {
    setIsVisible(true);

    // Mudar slides automaticamente a cada 7 segundos
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

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

  // Indicadores dos slides
  const renderIndicators = () => {
    return (
      <Flex
        position="absolute"
        bottom="30px"
        width="100%"
        justify="center"
        zIndex={2}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            as="button"
            onClick={() => setCurrentSlide(index)}
            h="3px"
            w={index === currentSlide ? "30px" : "15px"}
            bg={index === currentSlide ? "blue.400" : "whiteAlpha.700"}
            mx={1}
            transition="all 0.3s ease"
            borderRadius="full"
          />
        ))}
      </Flex>
    );
  };

  return (
    <Box position={"relative"} height="100vh" overflow={"hidden"}>
      {/* Fundo com gradiente */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-r, blackAlpha.800, transparent, blackAlpha.700)"
        zIndex={2}
      />

      {/* Carrossel de imagens */}
      <Box
        w="full"
        h="100vh"
        bgImage={`url(${images[currentSlide]})`}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        transition="background-image 1.2s ease-in-out"
        position="absolute"
        top={0}
        left={0}
      />

      {/* Navegação do carrossel */}
      <IconButton
        aria-label="Previous Slide"
        icon={<ArrowBackIcon boxSize={6} />}
        onClick={handlePrevSlide}
        position="absolute"
        top="50%"
        left="20px"
        transform="translateY(-50%)"
        zIndex={3}
        bg="rgba(0, 0, 0, 0.2)"
        _hover={{ bg: "rgba(0, 0, 0, 0.4)", transform: "translateY(-50%) scale(1.1)" }}
        _active={{ bg: "rgba(0, 0, 0, 0.5)" }}
        color="white"
        boxShadow="lg"
        rounded="full"
        size="lg"
        backdropFilter="blur(10px)"
        transition="all 0.3s ease"
      />

      <IconButton
        aria-label="Next Slide"
        icon={<ArrowForwardIcon boxSize={6} />}
        onClick={handleNextSlide}
        position="absolute"
        top="50%"
        right="20px"
        transform="translateY(-50%)"
        zIndex={3}
        bg="rgba(0, 0, 0, 0.2)"
        _hover={{ bg: "rgba(0, 0, 0, 0.4)", transform: "translateY(-50%) scale(1.1)" }}
        _active={{ bg: "rgba(0, 0, 0, 0.5)" }}
        color="white"
        boxShadow="lg"
        rounded="full"
        size="lg"
        backdropFilter="blur(10px)"
        transition="all 0.3s ease"
      />

      {/* Indicadores do carrossel */}
      {renderIndicators()}

      {/* Conteúdo principal */}
      <Container
        maxW={"1400px"}
        h="100vh"
        display="flex"
        alignItems="center"
        position="relative"
        zIndex={3}
      >
        <VStack
          w={"full"}
          alignItems={"flex-start"}
          spacing={{ base: 6, md: 10 }}
          pt={{ base: 20, md: 0 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            mb={{ base: 0, md: 0 }}
          >
            <MotionHeading
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              lineHeight={"shorter"}
              color="white"
            >
              <MotionText
                display="block"
                mb={2}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Bem-vindos
              </MotionText>
              <MotionText
                as="span"
                display="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                à{" "}
                <Text
                  as="span"
                  color="blue.400"
                >
                  DATA7
                </Text>
              </MotionText>
            </MotionHeading>
          </MotionBox>

          <MotionText
            maxW={"800px"}
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            color="whiteAlpha.900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A Data7 oferece serviços e produtos de TI para diversas empresas.
            Vendemos e implantamos sistemas ERP, equipamentos SAT e
            certificados digitais. Também desenvolvemos sites de alto impacto,
            aplicativos e bots de atendimento ao cliente.
          </MotionText>

          <MotionStack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align={{ base: "center", md: "initial" }}
            alignSelf={{ base: "center", md: "initial" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              bg={"blue.400"}
              color={"white"}
              size="lg"
              fontSize={{ base: "md", md: "lg" }}
              px={8}
              py={7}
              rounded="full"
              rightIcon={<FaArrowRight />}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
                bg: "blue.600"
              }}
              transition="all 0.3s ease"
            >
              Fale Conosco
            </Button>

            <Button
              as="a"
              href="#services"
              bg="whiteAlpha.300"
              color="white"
              _hover={{
                bg: "whiteAlpha.500",
                transform: "translateY(-5px)",
              }}
              size="lg"
              fontSize={{ base: "md", md: "lg" }}
              px={8}
              py={7} rounded="full"
              backdropFilter="blur(10px)"
              transition="all 0.3s ease"
            >
              Nossos Serviços
            </Button>
          </MotionStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
