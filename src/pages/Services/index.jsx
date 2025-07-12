import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Flex,
  Icon,
  Button,
  Divider,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import estruturadaweb from "../../assets/estrutura-da-web.gif";
import codificacao from "../../assets/codificacao.gif";
import ferramentasdereparacao from "../../assets/ferramentas-de-reparacao.gif";
import redenanuvem from "../../assets/rede-na-nuvem.gif";
import localnaredeinternet from "../../assets/local-na-rede-internet.gif";
import botdebatepapo from "../../assets/bot-de-bate-papo.gif";
import Footer from "../Home/components/Footer";
import FeedbackButton from "../Home/components/FeedbackStates";
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import SectionSoluctions from "../../components/featuresComponents/components/soluctionsbackgroundComponents";
import GridListWithHeading from "../../components/featuresComponents";
import Orcamentos from "../../components/orcamentosComponents";

// Componentes com animação
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Services() {
  // Configuração do WhatsApp para contato
  const whatsappNumber = "+5575999194533";
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Cores dinâmicas baseadas no tema
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, white, blue.50)",
    "linear(to-br, gray.900, blue.900, gray.900)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");

  // Dados dos serviços atualizados
  const services = [
    {
      title: "Consultoria em BI",
      icon: estruturadaweb,
      description:
        "Painéis personalizados e análises estratégicas para gestores tomarem decisões baseadas em dados concretos.",
      badge: "Business Intelligence",
    },
    {
      title: "Terceirização de CPD",
      icon: ferramentasdereparacao,
      description:
        "Cuidamos da sua infraestrutura de TI com segurança, agilidade e suporte especializado.",
      badge: "Infraestrutura",
    },
    {
      title: "Desenvolvimento de APIs",
      icon: localnaredeinternet,
      description:
        "Conectamos sistemas e otimizamos fluxos de trabalho com soluções sob medida.",
      badge: "Integração",
    },
    {
      title: "Criação de Sites",
      icon: codificacao,
      description:
        "Desenvolvemos ferramentas ágeis e eficientes para resolver desafios específicos da sua operação.",
      badge: "Desenvolvimento",
    },
    {
      title: "Backup de Dados",
      icon: redenanuvem,
      description:
        "Garantimos a segurança dos seus dados com soluções avançadas de backup e recuperação.",
      badge: "Segurança",
    },
    {
      title: "Bots de Atendimento",
      icon: botdebatepapo,
      description:
        "Automatizamos a comunicação com clientes, proporcionando respostas rápidas e precisas.",
      badge: "Automação",
    },
  ];

  return (
    <Box bgGradient={bgGradient} minH="100vh" backgroundAttachment="fixed">
      {/* Seção principal com conteúdo sobre serviços */}
      <Container
        maxW="1400px"
        px={{ base: 4, md: 6, lg: 8 }}
        pt={{ base: "100px", md: "120px" }}
      >
        {/* Cabeçalho da página */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          <Stack spacing={3} align="center">
            <Badge
              colorScheme="blue"
              fontSize={{ base: "sm", md: "md" }}
              px={3}
              py={1}
              borderRadius="full"
            >
              DATA7 TECNOLOGIA
            </Badge>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              <Text as="span" position="relative" zIndex={1}>
                Nossos{" "}
                <Text
                  as="span"
                  color={accentColor}
                  position="relative"
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: `${accentColor}30`,
                    zIndex: -1,
                    borderRadius: "2px",
                  }}
                >
                  Serviços
                </Text>
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={subtitleColor}
              maxW="800px"
            >
              Soluções completas em Business Intelligence e Tecnologia da
              Informação para transformar dados em decisões inteligentes.
            </Text>
          </Stack>
        </MotionBox>

        {/* Grid de serviços */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          mb={{ base: 16, md: 20 }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 8, lg: 10 }}
            mt={10}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
                badge={service.badge}
                delay={0.2 + index * 0.1}
                accentColor={accentColor}
                cardBg={cardBg}
                textColor={textColor}
                subtitleColor={subtitleColor}
              />
            ))}
          </SimpleGrid>

          {/* Botão de contato centralizado */}
          <MotionFlex
            justify="center"
            mt={{ base: 12, md: 16 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              bg={accentColor}
              color="white"
              size="lg"
              fontSize={{ base: "md", md: "lg" }}
              px={8}
              py={7}
              rounded="full"
              rightIcon={<Icon as={FaArrowRight} />}
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
                bg: "blue.600",
              }}
              transition="all 0.3s ease"
            >
              Solicite um Orçamento
            </Button>
          </MotionFlex>
        </MotionBox>
      </Container>

      {/* Componentes adicionais */}
      <SectionSoluctions />
      <GridListWithHeading />
      <Orcamentos />
      <Footer />
      <FeedbackButton />
      <ScrollToTopButton />
    </Box>
  );
}

/**
 * ServiceCard - Componente de card para serviços
 */
function ServiceCard({
  title,
  icon,
  description,
  badge,
  delay,
  accentColor,
  cardBg,
  textColor,
  subtitleColor,
}) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      bg={cardBg}
      borderRadius="xl"
      p={6}
      boxShadow="lg"
      position="relative"
      overflow="hidden"
      height="100%"
      _hover={{
        boxShadow: "xl",
        transform: "translateY(-5px)",
      }}
    >
      {/* Badge no canto superior direito */}
      {badge && (
        <Badge
          position="absolute"
          top={4}
          right={4}
          colorScheme="blue"
          variant="subtle"
          px={2}
          py={1}
          borderRadius="md"
          fontSize="xs"
        >
          {badge}
        </Badge>
      )}

      {/* Elemento decorativo lateral */}
      <Box
        position="absolute"
        top={0}
        left={0}
        height="100%"
        width="4px"
        bg={accentColor}
        borderRadius="full"
      />

      <HStack spacing={4} mb={4} align="center">
        {/* Ícone animado */}
        <Flex
          align="center"
          justify="center"
          borderRadius="full"
          bg={`${accentColor}20`}
          p={3}
          w="60px"
          h="60px"
        >
          <motion.img
            src={icon}
            alt={title}
            style={{ width: "40px", height: "40px" }}
            whileHover={{ rotate: 10, scale: 1.1 }}
          />
        </Flex>

        <Box>
          <Heading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color={textColor}
          >
            {title}
          </Heading>
        </Box>
      </HStack>

      <Divider mb={4} opacity={0.2} />

      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={subtitleColor}
        lineHeight="tall"
      >
        {description}
      </Text>
    </MotionBox>
  );
}