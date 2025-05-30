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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight, FaLaptop, FaLifeRing, FaServer, FaDatabase, FaChartLine, FaCode, FaNetworkWired, FaCogs } from "react-icons/fa";
import Footer from "../Home/components/Footer";
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import FeedbackButton from "../Home/components/FeedbackStates";
import SectionSoluctions from "../../components/featuresComponents/components/soluctionsbackgroundComponents";
import GridListWithHeading from "../../components/featuresComponents";
import Orcamentos from "../../components/orcamentosComponents";

// Componentes com animação
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Products() {
  // Configuração do WhatsApp para contato
  const whatsappNumber = "+5575999194533";
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus produtos.";
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

  // Dados dos produtos
  const products = [
    {
      title: "Locação de Computadores",
      icon: FaLaptop,
      description:
        "Fornecemos soluções de locação de computadores para atender a qualquer necessidade, com equipamentos de última geração e suporte dedicado.",
      features: [
        "Equipamentos modernos",
        "Suporte técnico especializado",
        "Opções flexíveis de locação",
      ],
    },
    {
      title: "Suporte de TI",
      icon: FaLifeRing,
      description:
        "Nosso suporte técnico especializado garante que seus sistemas funcionem perfeitamente, com resolução rápida e eficaz de problemas.",
      features: [
        "Atendimento 24/7",
        "Resolução rápida de problemas",
        "Suporte remoto e presencial",
      ],
    },
    {
      title: "Suporte de Servidores",
      icon: FaServer,
      description:
        "Gerenciamos e otimizamos seus servidores para garantir desempenho ideal e alta disponibilidade, com manutenção proativa e suporte técnico.",
      features: [
        "Manutenção proativa",
        "Gerenciamento de desempenho",
        "Suporte técnico especializado",
      ],
    },
    {
      title: "Banco de Dados",
      icon: FaDatabase,
      description:
        "Oferecemos serviços completos de gerenciamento de banco de dados, garantindo integridade, segurança e disponibilidade das suas informações.",
      features: [
        "Gerenciamento de integridade",
        "Segurança de dados",
        "Alta disponibilidade",
      ],
    },
    {
      title: "Dashboard PowerBi",
      icon: FaChartLine,
      description:
        "Desenvolvemos dashboards interativos no PowerBi para oferecer insights detalhados e análises que ajudam na tomada de decisões estratégicas.",
      features: [
        "Dashboards interativos",
        "Análise detalhada de dados",
        "Apoio à tomada de decisões",
      ],
    },
    {
      title: "Desenvolvimento de Software",
      icon: FaCode,
      description:
        "Criamos soluções de software personalizadas para atender às necessidades específicas do seu negócio, com foco em inovação e eficiência.",
      features: [
        "Soluções personalizadas",
        "Foco em inovação",
        "Eficiência garantida",
      ],
    },
    {
      title: "Infraestrutura de Rede",
      icon: FaNetworkWired,
      description:
        "Projetamos e implementamos infraestrutura de rede, incluindo câmeras e roteadores, para garantir conectividade estável e segura.",
      features: [
        "Conectividade estável",
        "Infraestrutura de rede completa",
        "Segurança e monitoramento",
      ],
    },
    {
      title: "Consultoria de TI",
      icon: FaCogs,
      description:
        "Oferecemos consultoria especializada para otimizar operações de TI e alinhar suas soluções tecnológicas com os objetivos de negócios.",
      features: [
        "Consultoria especializada",
        "Otimização de operações",
        "Alinhamento com objetivos de negócios",
      ],
    }
  ];

  return (
    <Box
      bgGradient={bgGradient}
      minH="100vh"
      backgroundAttachment="fixed"
    >
      {/* Seção principal com conteúdo sobre produtos */}
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
                Produtos
              </Text>
            </Text>
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color={subtitleColor}
            maxW="800px"
            mx="auto"
          >
            Soluções completas em tecnologia para impulsionar seu negócio com eficiência e qualidade.
          </Text>
        </MotionBox>

        {/* Grid de produtos */}
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
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                icon={product.icon}
                description={product.description}
                features={product.features}
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
                bg: "blue.600"
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
 * ProductCard - Componente de card para produtos
 */
function ProductCard({ title, icon, description, features, delay, accentColor, cardBg, textColor, subtitleColor }) {
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
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon as={icon} boxSize={6} color={accentColor} />
          </motion.div>
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
        mb={4}
      >
        {description}
      </Text>

      {features && features.length > 0 && (
        <Box mt={2} pl={2}>
          {features.map((feature, idx) => (
            <HStack key={idx} spacing={2} mb={2} align="center">
              <Box 
                w={2} 
                h={2} 
                bg={accentColor} 
                borderRadius="full"
              />
              <Text 
                fontSize={{ base: "sm", md: "md" }} 
                color={subtitleColor}
              >
                {feature}
              </Text>
            </HStack>
          ))}
        </Box>
      )}
    </MotionBox>
  );
}
