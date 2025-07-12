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
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
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
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    produto: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificação dos campos obrigatórios
    if (!form.nome || !form.telefone || !form.email || !form.produto) {
      toast({
        title: "Preencha todos os campos obrigatórios.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_vmhaqqw",
        "template_ltxyr3s",
        {
          name: form.nome,
          phone: form.telefone,
          email: form.email,
          service: form.produto,
          message: form.mensagem,
        },
        "DyAJLKDUMpsFJ-M-T"
      )
      .then((response) => {
        toast({
          title: "Solicitação enviada com sucesso!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setForm({ nome: "", telefone: "", email: "", produto: "", mensagem: "" });
        setLoading(false);
        onClose();
      })
      .catch((error) => {
        console.error("Erro EmailJS:", error);
        toast({
          title: "Ocorreu um erro ao enviar a solicitação.",
          description: error?.text || error?.message || "Erro desconhecido.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
        setLoading(false);
      });
  };

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

          {/* Botão de contato centralizado que abre o modal */}
          <MotionFlex
            justify="center"
            mt={{ base: 12, md: 16 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
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
              onClick={onOpen}
            >
              Solicite um Orçamento
            </Button>
          </MotionFlex>

          {/* Modal com formulário */}
          <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign="center" color={accentColor} fontWeight={800}>
                Solicite um Orçamento
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Box as="form" onSubmit={handleSubmit}>
                  <FormControl isRequired mb={3}>
                    <FormLabel>Nome*</FormLabel>
                    <Input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required />
                  </FormControl>
                  <FormControl isRequired mb={3}>
                    <FormLabel>Telefone*</FormLabel>
                    <Input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(99) 99999-9999" required />
                  </FormControl>
                  <FormControl isRequired mb={3}>
                    <FormLabel>E-mail*</FormLabel>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" required />
                  </FormControl>
                  <FormControl isRequired mb={3}>
                    <FormLabel>Qual produto deseja orçamento?*</FormLabel>
                    <Select name="produto" value={form.produto} onChange={handleChange} placeholder="Selecione o produto" required>
                      {products.map((p, i) => (
                        <option key={i} value={p.title}>{p.title}</option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl mb={3}>
                    <FormLabel>Mensagem</FormLabel>
                    <Textarea name="mensagem" value={form.mensagem} onChange={handleChange} placeholder="Descreva sua necessidade" rows={3} />
                  </FormControl>
                  <ModalFooter px={0} pb={0}>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      size="lg"
                      w="100%"
                      isLoading={loading}
                      loadingText="Enviando..."
                      fontWeight={700}
                      fontSize={{ base: "md", md: "lg" }}
                      rightIcon={<Icon as={FaArrowRight} />}
                    >
                      Enviar Orçamento
                    </Button>
                  </ModalFooter>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
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
