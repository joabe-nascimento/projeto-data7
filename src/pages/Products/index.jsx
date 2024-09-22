import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import {
  FaLaptop,
  FaLifeRing,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaCode,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";
import Footer from "../Home/components/Footer";
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import FeedbackButton from "../Home/components/FeedbackStates";

const ProductCard = ({ heading, description, features, icon, mt, mb }) => {
  return (
    <Box
      maxW={{ base: "full", md: "350px" }}
      w={"full"}
      borderWidth="1px"
      borderColor="blue.400"
      borderRadius="30px 0px 30px 0px"
      overflow="hidden"
      p={5}
      bg="white"
      boxShadow="lg"
      mt={mt}
      mb={mb}
      transition="transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease"
      _hover={{
        boxShadow: "2xl",
        transform: "rotate(5deg) scale(1.05) translateY(-10px)",
        transformOrigin: "center",
        backgroundColor: "white",
      }}
    >
      <Flex align="center" mb={4}>
        <Icon as={icon} boxSize={8} color="blue.400" mr={4} />
        <Heading
          size="md"
          fontSize={{ base: "lg", md: "larger" }}
          mb={5}
          color="blue.600"
        >
          {heading}
        </Heading>
      </Flex>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="gray.600"
        transition="color 0.4s ease"
        _hover={{ color: "gray.800" }}
        mb={3}
      >
        {description}
      </Text>
      <Stack spacing={2} ml={8}>
        {features.map((feature, index) => (
          <Text
            key={index}
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
            _before={{
              content: `"• "`,
              color: "blue.400",
              fontWeight: "bold",
            }}
          >
            {feature}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};

const Products = () => {
  const cardMarginTop = useBreakpointValue({ base: 0, md: 10 });
  const cardMarginBottom = useBreakpointValue({ base: 0, md: 10 });

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box p={{ base: 4, sm: 6, md: 8, lg: 10 }} bg="white" flex="1">
        <Stack
          spacing={6}
          as={Container}
          maxW={"6xl"}
          textAlign={"left"}
          paddingTop={"145px"}
          paddingLeft={{ base: "4", sm: "6", md: "9", lg: "10" }}
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
                height: "4px",
                zIndex: -1,
              }}
            >
              Produtos
            </Text>
          </Heading>
        </Stack>
        <Container maxW={"5xl"} mt={10} pt={5}>
          <Flex flexWrap="wrap" gap={10} justify="center">
            <ProductCard
              heading={"Locação de Computadores"}
              description={
                "Fornecemos soluções de locação de computadores para atender a qualquer necessidade, com equipamentos de última geração e suporte dedicado."
              }
              features={[
                "Equipamentos modernos",
                "Suporte técnico especializado",
                "Opções flexíveis de locação",
              ]}
              icon={FaLaptop}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
            <ProductCard
              heading={"Suporte de TI"}
              description={
                "Nosso suporte técnico especializado garante que seus sistemas funcionem perfeitamente, com resolução rápida e eficaz de problemas."
              }
              features={[
                "Atendimento 24/7",
                "Resolução rápida de problemas",
                "Suporte remoto e presencial",
              ]}
              icon={FaLifeRing}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
            <ProductCard
              heading={"Suporte de Servidores"}
              description={
                "Gerenciamos e otimizamos seus servidores para garantir desempenho ideal e alta disponibilidade, com manutenção proativa e suporte técnico."
              }
              features={[
                "Manutenção proativa",
                "Gerenciamento de desempenho",
                "Suporte técnico especializado",
              ]}
              icon={FaServer}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
            <ProductCard
              heading={"Banco de Dados"}
              description={
                "Oferecemos serviços completos de gerenciamento de banco de dados, garantindo integridade, segurança e disponibilidade das suas informações."
              }
              features={[
                "Gerenciamento de integridade",
                "Segurança de dados",
                "Alta disponibilidade",
              ]}
              icon={FaDatabase}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
            <ProductCard
              heading={"Dashboard PowerBi"}
              description={
                "Desenvolvemos dashboards interativos no PowerBi para oferecer insights detalhados e análises que ajudam na tomada de decisões estratégicas."
              }
              features={[
                "Dashboards interativos",
                "Análise detalhada de dados",
                "Apoio à tomada de decisões",
              ]}
              icon={FaChartLine}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
            <ProductCard
              heading={"Desenvolvimento de Software"}
              description={
                "Criamos soluções de software personalizadas para atender às necessidades específicas do seu negócio, com foco em inovação e eficiência."
              }
              features={[
                "Soluções personalizadas",
                "Foco em inovação",
                "Eficiência garantida",
              ]}
              icon={FaCode}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
            <ProductCard
              heading={"Infraestrutura de Rede"}
              description={
                "Projetamos e implementamos infraestrutura de rede, incluindo câmeras e roteadores, para garantir conectividade estável e segura."
              }
              features={[
                "Conectividade estável",
                "Infraestrutura de rede completa",
                "Segurança e monitoramento",
              ]}
              icon={FaNetworkWired}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
            <ProductCard
              heading={"Consultoria de TI"}
              description={
                "Oferecemos consultoria especializada para otimizar operações de TI e alinhar suas soluções tecnológicas com os objetivos de negócios."
              }
              features={[
                "Consultoria especializada",
                "Otimização de operações",
                "Alinhamento com objetivos de negócios",
              ]}
              icon={FaCogs}
              mt={cardMarginTop}
              mb={cardMarginBottom}
            />
          </Flex>
        </Container>
      </Box>
      <Footer />
      <FeedbackButton />
      <ScrollToTopButton /> {/* Adicionar o botão de "subir" */}
    </Box>
  );
};

export default Products;
