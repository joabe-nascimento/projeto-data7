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

const HeroSection = () => (
  <Flex
    w={"full"}
    h={"100vh"}
    backgroundImage={
      "url(https://img.freepik.com/fotos-gratis/homem-afro-americano-trabalhando-em-computador-criado-com-tecnologia-generative-ai_185193-110054.jpg?t=st=1722556586~exp=1722560186~hmac=9f6222ffb08792a556ae209c6f807a4bbeb3cac516cfd0f973b3bdbdcabf8692&w=826)"
    }
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
  >
    <VStack
      w={"full"}
      alignItems={"left"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
            Bem vindos <br /> a Data7
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
