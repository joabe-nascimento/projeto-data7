import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import foguete from "../../assets/foguete.gif";
import observador from "../../assets/observador.gif";
import valor from "../../assets/valor.gif";
import meuVideo from "../../assets/videoabout.mp4";
import Footer from "../Home/components/Footer"; // Certifique-se de que o caminho do Footer esteja correto

export default function SplitScreen() {
  // Número de telefone e mensagem
  const whatsappNumber = "+5575999194533"; // Substitua pelo número do WhatsApp desejado
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços.";

  // Link para o WhatsApp com o número e a mensagem
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        pt={{ base: "20", md: "24" }} // Ajusta o padding-top para adicionar mais espaço nas telas menores
        spacing={{ base: 4, md: 8 }} // Adiciona espaçamento entre as colunas
        maxW={"1200px"} // Define a largura máxima do Stack
        mx="auto" // Centraliza o Stack horizontalmente
        px={{ base: "4", md: "8" }} // Adiciona padding horizontal ao Stack
        py={{ base: "8", md: "16" }} // Adiciona padding vertical ao Stack
      >
        <Flex
          p={{ base: 4, md: 8 }}
          flex={1}
          align={"center"}
          justify={"center"}
          mt={{ base: "55", md: "0" }} // Adiciona margem superior para empurrar o conteúdo para baixo em telas menores
        >
          <Stack
            spacing={6}
            w={"full"}
            maxW={"lg"}
            paddingTop={{ base: "40px", md: "90px" }} // Ajusta o padding-top do Stack interno para telas menores
          >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                color={"gray.700"}
                fontWeight={"800"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Sobre Nós
              </Text>
              <br />{" "}
            </Heading>
            <Stack spacing={2} direction="row" align="center">
              <Image boxSize="3rem" src={observador} alt="Visão" />
              <Text
                fontWeight={"600"}
                fontSize={"20"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Nossa Visão
              </Text>
            </Stack>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Ser líderes no desenvolvimento de tecnologias que transformam
              negócios e impulsionam o crescimento sustentável, criando novas
              possibilidades para empresas de todos os tamanhos.
            </Text>
            <Stack spacing={2} direction="row" align="center">
              <Image boxSize="3rem" src={foguete} alt="Missão" />
              <Text
                fontWeight={"600"}
                fontSize={"20"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Nossa Missão
              </Text>
            </Stack>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Entregar soluções tecnológicas que superem as expectativas dos
              clientes, promovendo inovação contínua e melhorando a eficiência
              operacional, sendo um recurso essencial para freelancers, agências
              e empresas.
            </Text>
            {/* Nova Seção para Valores */}
            <Stack spacing={2} direction="row" align="center">
              <Image boxSize="3rem" src={valor} alt="Valores" />
              <Text
                fontWeight={"600"}
                fontSize={"20"}
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Nossos Valores
              </Text>
            </Stack>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Integridade, inovação e colaboração são os pilares que sustentam
              nosso trabalho. Acreditamos que atuar com ética, buscar
              constantemente soluções criativas e trabalhar em equipe são
              fundamentais para alcançar nossos objetivos e superar os desafios.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
        </Flex>
        <Flex
          flex={1}
          position="relative"
          zIndex={1}
          justify={"center"}
          align={"center"}
          py={{ base: "10", md: "0" }} // Adiciona padding vertical para telas menores
          mt={{ base: "10", md: "0" }} // Adiciona margem superior para empurrar o vídeo para baixo em telas menores
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%", // Ajusta a largura do vídeo
              height: "auto", // Mantém a proporção do vídeo
              maxWidth: "800px", // Define a largura máxima do vídeo
              borderRadius: "100px 0px 100px 0px",
              border: "2px solid blue.400",
              boxShadow: "0 0 10px blue.400",
            }}
          >
            <source src={meuVideo} type="video/mp4" />
          </video>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
}
