"use client";
import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import foguete from "../../assets/foguete.gif";
import observador from "../../assets/observador.gif";
import meuVideo from "../../assets/videoabout.mp4"; // Importa o vídeo da pasta de assets

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
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
            <Image
              boxSize="3rem"
              src={observador} // Substitua pelo URL do seu GIF
              alt="Visão"
            />
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
            <Image
              boxSize="3rem"
              src={foguete} // Substitua pelo URL do seu GIF
              alt="Missão"
            />
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
            operacional, sendo um recurso essencial para freelancers, agências e
            empresas.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
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
      </Flex>
      <Flex flex={1} position="relative" zIndex={1}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "relative", 
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100px 0px 100px 0px", // Mantém o formato da borda
            border: "2px solid blue.400", // Borda do vídeo
            boxShadow: "0 0 10px blue.400", // Sombra azul
          }}
        >
          <source
            src={meuVideo} // Usa o vídeo importado
            type="video/mp4"
          />
        </video>
      </Flex>
    </Stack>
  );
}
