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
import emailjs from "emailjs-com";
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
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
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
    if (!form.nome || !form.telefone || !form.email || !form.servico) {
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
        "service_ddx8gkm",
        "template_ltxyr3s",
        {
          name: form.nome,
          phone: form.telefone,
          email: form.email,
          service: form.servico,
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
        setForm({ nome: "", telefone: "", email: "", servico: "", mensagem: "" });
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

  // Dados dos serviços
  const services = [
    {
      title: "Criação de Sites e Aplicações Pontuais",
      icon: codificacao,
      description:
        "Oferecemos serviços completos de criação de sites, desenvolvendo páginas responsivas, otimizadas para SEO e com design moderno, atendendo às necessidades específicas do seu negócio.",
    },
    {
      title: "Backup de Dados",
      icon: redenanuvem,
      description:
        "Garantimos a segurança dos seus dados com soluções avançadas de backup, oferecendo armazenamento seguro e recuperação rápida em caso de perda ou falha no sistema.",
    },
    {
      title: "Bots de Atendimento",
      icon: botdebatepapo,
      description:
        "Desenvolvemos bots de atendimento personalizados que automatizam a comunicação com os clientes, proporcionando respostas rápidas e precisas, melhorando a experiência do usuário e otimizando o atendimento.",
    },
    // Novos serviços adicionados
    {
      title: "Consultoria em BI",
      icon: localnaredeinternet, // Você pode substituir por um ícone mais adequado
      description:
        "Otimize as decisões da sua empresa de forma ágil, tenha controle financeiro preciso, conhecimento profundo dos seus cliente e monte estratégias que reduzem custos e aumentem suas vendas.",
    },
    {
      title: "Terceirização de CPD",
      icon: ferramentasdereparacao, // Você pode substituir por um ícone mais adequado
      description:
        "Cuidamos da sua infraestrutura de TI com segurança, agilidade e suporte especializado.",
    },
    {
      title: "Desenvolvimento de APIs",
      icon: estruturadaweb, // Você pode substituir por um ícone mais adequado
      description:
        "Conectamos sistemas e otimizamos fluxos de trabalho com soluções de APIs e integrações sob medida.",
    },
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
                Serviços
              </Text>
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={subtitleColor}
            maxW="800px"
            mx="auto"
          >
            Soluções tecnológicas completas para impulsionar o seu negócio com eficiência e inovação.
          </Text>
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
                    <FormLabel>Qual serviço deseja orçamento?*</FormLabel>
                    <Select name="servico" value={form.servico} onChange={handleChange} placeholder="Selecione o serviço" required>
                      {services.map((s, i) => (
                        <option key={i} value={s.title}>{s.title}</option>
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
 * ServiceCard - Componente de card para serviços
 */
function ServiceCard({ title, icon, description, delay, accentColor, cardBg, textColor, subtitleColor }) {
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