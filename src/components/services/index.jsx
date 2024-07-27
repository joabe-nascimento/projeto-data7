"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import botdebatepapo from "../../assets/bot-de-bate-papo.gif";
import codificacao from "../../assets/codificacao.gif";
import estruturadaweb from "../../assets/estrutura-da-web.gif";
import ferramentasdereparacao from "../../assets/ferramentas-de-reparacao.gif";
import localnaredeinternet from "../../assets/local-na-rede-internet.gif";
import redenanuvem from "../../assets/rede-na-nuvem.gif";

const Card = ({ heading, description, iconSrc, mt, mb }) => {
  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      w={"full"}
      borderWidth="1px" // Ajusta a largura da borda
      borderColor="blue.400" // Define a cor da borda
      borderRadius="30px 0px 30px 0px" // Bordas arredondadas apenas nos cantos esquerdo
      overflow="hidden"
      p={5}
      bg="white"
      boxShadow="lg"
      mt={mt} // Define a margem superior
      mb={mb} // Define a margem inferior
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.02)",
        transition: "0.3s",
      }}
    >
      <Stack align={"start"} spacing={4} h="full">
        <Flex
          w={{ base: "12", md: "16" }}
          h={{ base: "12", md: "16" }}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg="transparent" // Remove o fundo cinza do ícone
        >
          <Image
            src={iconSrc}
            alt="Icon"
            boxSize={{ base: "40px", md: "70px" }}
            objectFit="contain"
          />
        </Flex>
        <Box>
          <Heading size="md" fontSize={{ base: "lg", md: "larger" }} mb={5}>
            {heading}
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>{description}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Services() {
  const cardMarginTop = useBreakpointValue({ base: 0, md: -28 });
  const cardMarginBottom = useBreakpointValue({ base: 0, md: 28 });

  return (
    <Box p={{ base: 4, sm: 6, md: 8, lg: 10 }} bg="white">
      <Stack spacing={6} as={Container} maxW={"6xl"} textAlign={"left"}>
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
              height: "4px",
              zIndex: -1,
            }}
          >
            Serviços
          </Text>
        </Heading>
      </Stack>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gap={10} justify="center">
          <Card
            heading={"Sistemas ERP"}
            iconSrc={estruturadaweb}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Criação de Sites"}
            iconSrc={codificacao}
            mt={cardMarginTop}
            mb={cardMarginBottom}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Manutenção de PC e Notebooks"}
            iconSrc={ferramentasdereparacao}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Backup de Dados"}
            iconSrc={redenanuvem}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Rede de Computadores"}
            iconSrc={localnaredeinternet}
            mt={cardMarginTop}
            mb={cardMarginBottom}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
          <Card
            heading={"Bots de Atendimento"}
            iconSrc={botdebatepapo}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
