"use client";
import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import videoSrc from "../../../../assets/videoheader.mp4"; // Altere o caminho conforme necessário

const HeroSection = () => (
  <Flex w={"full"} h={"100vh"} position={"relative"} overflow={"hidden"}>
    {/* Vídeo de fundo */}
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto" // Garante que o vídeo é carregado automaticamente
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1, // Garantindo que o vídeo fique atrás dos outros elementos
      }}
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Conteúdo principal */}
    <VStack
      w={"full"}
      alignItems={"left"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      position={"relative"}
      zIndex={1} // Garantindo que o conteúdo fique sobre o vídeo
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
            Bem vindos <br /> a DATA7
          </Text>

          <Text
            as="h2"
            color={"white"}
            fontWeight={300}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            A Data7 oferece serviços e produtos de TI para diversas empresas.
            Vendemos e implantamos sistemas ERP, equipamentos SAT e certificados
            digitais. Também desenvolvemos sites de alto impacto, aplicativos e
            bots de atendimento ao cliente. Nenhum projeto é grande ou pequeno
            demais para nós!
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"15px 0px 15px"}
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

export default HeroSection;
