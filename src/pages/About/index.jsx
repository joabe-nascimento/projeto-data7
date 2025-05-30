import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  Container,
  useColorModeValue,
  Icon,
  Divider,
  Badge,
  HStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRocket, FaEye, FaGem, FaArrowRight } from "react-icons/fa";
import foguete from "../../assets/foguete.gif";
import observador from "../../assets/observador.gif";
import valor from "../../assets/valor.gif";
import meuVideo from "../../assets/videoabout.mp4";
import Footer from "../Home/components/Footer";
import AboutParallaxBackground from "./components/aboutbackgroundComponents";
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import FeedbackButton from "../Home/components/FeedbackStates";

// Componente com animação usando framer-motion
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

/**
 * AboutPage - Componente principal da página Sobre Nós
 * Exibe informações sobre a empresa, incluindo visão, missão e valores
 */
export default function AboutPage() {
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

  return (
    <Box
      bgGradient={bgGradient}
      minH="100vh"
      backgroundAttachment="fixed"
    >
      {/* Seção principal com conteúdo sobre a empresa */}
      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} pt={{ base: "100px", md: "120px" }}>
        {/* Cabeçalho da página */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          mb={{ base: 8, md: 12 }}
          textAlign="center"
        >
          <Badge
            colorScheme="blue"
            fontSize={{ base: "sm", md: "md" }}
            px={3}
            py={1}
            borderRadius="full"
            mb={3}
          >
            DATA7 TECNOLOGIA
          </Badge>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            mb={4}
          >
            <Text as="span" position="relative" zIndex={1}>
              Sobre{" "}
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
                Nós
              </Text>
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={subtitleColor}
            maxW="800px"
            mx="auto"
          >
            Conheça nossa história, valores e o que nos motiva a criar soluções tecnológicas inovadoras.
          </Text>
        </MotionBox>

        {/* Conteúdo principal */}
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 12, md: 16, lg: 20 }}
          align="center"
          justify="center"
          w="full"
          mb={{ base: 16, md: 20 }}
        >
          {/* Coluna de texto com informações da empresa */}
          <MotionFlex
            flex={1}
            direction="column"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Cards de informação */}
            <Stack spacing={8}>
              <CompanyInfoCard
                icon={FaEye}
                gifIcon={observador}
                title="Nossa Visão"
                delay={0.3}
                accentColor={accentColor}
                cardBg={cardBg}
                textColor={textColor}
                subtitleColor={subtitleColor}
              >
                Ser líderes no desenvolvimento de tecnologias que transformam negócios e impulsionam o crescimento sustentável, criando novas possibilidades para empresas de todos os tamanhos.
              </CompanyInfoCard>

              <CompanyInfoCard
                icon={FaRocket}
                gifIcon={foguete}
                title="Nossa Missão"
                delay={0.5}
                accentColor={accentColor}
                cardBg={cardBg}
                textColor={textColor}
                subtitleColor={subtitleColor}
              >
                Entregar soluções tecnológicas que superem as expectativas dos clientes, promovendo inovação contínua e melhorando a eficiência operacional, sendo um recurso essencial para freelancers, agências e empresas.
              </CompanyInfoCard>

              <CompanyInfoCard
                icon={FaGem}
                gifIcon={valor}
                title="Nossos Valores"
                delay={0.7}
                accentColor={accentColor}
                cardBg={cardBg}
                textColor={textColor}
                subtitleColor={subtitleColor}
              >
                Integridade, inovação e colaboração são os pilares que sustentam nosso trabalho. Acreditamos que atuar com ética, buscar constantemente soluções criativas e trabalhar em equipe são fundamentais para alcançar nossos objetivos e superar os desafios.
              </CompanyInfoCard>
            </Stack>

            {/* Botão de contato */}
            <MotionBox
              mt={10}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              alignSelf={{ base: "center", lg: "flex-start" }}
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
                  bg: "blue.600"
                }}
                transition="all 0.3s ease" d
              >
                Fale Conosco
              </Button>
            </MotionBox>
          </MotionFlex>

          {/* Coluna com vídeo */}
          <MotionFlex
            flex={1}
            justify="center"
            align="center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MotionBox
              w="full"
              maxW="600px"
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="2xl"
              position="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overlay decorativo */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                width="100px"
                height="100px"
                borderRadius="full"
                bg={`${accentColor}40`}
                zIndex={0}
              />
              <Box
                position="absolute"
                bottom="-30px"
                left="-30px"
                width="150px"
                height="150px"
                borderRadius="full"
                bg={`${accentColor}20`}
                zIndex={0}
              />

              {/* Vídeo */}
              <Box
                borderRadius="3xl"
                overflow="hidden"
                position="relative"
                zIndex={1}
                border="3px solid"
                borderColor={`${accentColor}50`}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                >
                  <source src={meuVideo} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </Box>
            </MotionBox>
          </MotionFlex>
        </Stack>
      </Container>

      {/* Componentes adicionais */}
      <AboutParallaxBackground />
      <Footer />
      <FeedbackButton />
      <ScrollToTopButton />
    </Box>
  );
}

/**
 * CompanyInfoCard - Componente de card para informações da empresa
 */
function CompanyInfoCard({ icon, gifIcon, title, children, delay, accentColor, cardBg, textColor, subtitleColor }) {
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
      _hover={{
        boxShadow: "xl",
        transform: "translateY(-5px)"
      }}
    >
      {/* Elemento decorativo */}
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
          <MotionImage
            src={gifIcon}
            alt={title}
            boxSize="40px"
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
        {children}
      </Text>
    </MotionBox>
  );
}