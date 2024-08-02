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
              "Desenvolvemos e implementamos sistemas ERP (Enterprise Resource Planning) personalizados que otimizam a gestão empresarial, integrando todos os processos da sua empresa em uma única plataforma eficiente.  "
            }
          />
          <Card
            heading={"Criação de Sites"}
            iconSrc={codificacao}
            mt={cardMarginTop}
            mb={cardMarginBottom}
            description={
              "Oferecemos serviços completos de criação de sites, desenvolvendo páginas responsivas, otimizadas para SEO e com design moderno, atendendo às necessidades específicas do seu negócio."
            }
          />
          <Card
            heading={"Manutenção de PC e Notebooks"}
            iconSrc={ferramentasdereparacao}
            description={
              "Realizamos manutenção preventiva e corretiva de PCs e notebooks, incluindo a troca de peças, limpeza, formatação, instalação de softwares e solução de problemas técnicos."
            }
          />
          <Card
            heading={"Backup de Dados"}
            iconSrc={redenanuvem}
            description={
              "Garantimos a segurança dos seus dados com soluções avançadas de backup, oferecendo armazenamento seguro e recuperação rápida em caso de perda ou falha no sistema."
            }
          />
          <Card
            heading={"Rede de Computadores"}
            iconSrc={localnaredeinternet}
            mt={cardMarginTop}
            mb={cardMarginBottom}
            description={
              "Projetamos, instalamos e mantemos redes de computadores eficientes e seguras, garantindo conectividade estável e alta performance para sua empresa."
            }
          />
          <Card
            heading={"Bots de Atendimento"}
            iconSrc={botdebatepapo}
            description={
              "Desenvolvemos bots de atendimento personalizados que automatizam a comunicação com os clientes, proporcionando respostas rápidas e precisas, melhorando a experiência do usuário e otimizando o atendimento."
            }
          />
        </Flex>
      </Container>
    </Box>
  );
}
