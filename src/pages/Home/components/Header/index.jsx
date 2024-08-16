"use client";
import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import imageheaderum from "../../../../assets/imageheaderum.jpg"; // Altere o caminho conforme necessário

const HeroSection = () => {
  // Número de telefone e mensagem
  const whatsappNumber = "+5575999194533"; // Substitua pelo número do WhatsApp desejado
  const whatsappMessage = "Olá, gostaria de mais informações sobre seus serviços.";

  // Link para o WhatsApp com o número e a mensagem
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      position={"relative"}
      overflow={"hidden"}
      bgImage={`url(${imageheaderum})`} // Define a imagem de fundo
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"} // Garante que a imagem cubra toda a área
    >
      {/* Conteúdo principal */}
      <VStack
        w={"full"}
        alignItems={"left"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"} // Gradiente para melhor legibilidade
        position={"relative"}
        zIndex={1} // Garantindo que o conteúdo fique sobre o fundo
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
                as="a"
                href={whatsappLink}
                target="_blank" // Abre o link em uma nova aba
                rel="noopener noreferrer"
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
};

export default HeroSection;
