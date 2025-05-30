import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  FormErrorMessage,
  useToast,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  useBreakpointValue,
  Container,
  SimpleGrid,
  Badge,
  Flex,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import Footer from "../Home/components/Footer";
import MapComponent from "../../components/mapsComponents";
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import FeedbackButton from "../Home/components/FeedbackStates";
import SectionSoluctions from "../../components/featuresComponents/components/soluctionsbackgroundComponents";

// Componentes com animação
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();
  
  // Cores dinâmicas baseadas no tema
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.50, white, blue.50)",
    "linear(to-br, gray.900, blue.900, gray.900)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");

  const validate = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = "O nome é obrigatório.";
    if (!formData.contato) {
      newErrors.contato = "O e-mail ou WhatsApp é obrigatório.";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.contato) &&
      !/^\d{10,15}$/.test(formData.contato)
    ) {
      newErrors.contato = "O e-mail ou WhatsApp é inválido.";
    }
    if (!formData.mensagem) newErrors.mensagem = "A mensagem é obrigatória.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const sendEmail = () => {
    const templateParams = {
      from_name: formData.nome,
      from_contact: formData.contato,
      message: formData.mensagem,
    };

    emailjs
      .send(
        "service_vmhaqqw",
        "template_ltxyr3s",
        templateParams,
        "DyAJLKDUMpsFJ-M-T"
      )
      .then(
        (response) => {
          console.log(
            "Email enviado com sucesso!",
            response.status,
            response.text
          );
          toast({
            title: "Formulário enviado.",
            description: "Obrigado pelo seu contato! Entraremos em breve.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        },
        (error) => {
          console.log("Erro ao enviar email:", error);
          toast({
            title: "Erro ao enviar formulário.",
            description:
              "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      sendEmail();
      setFormData({
        nome: "",
        contato: "",
        mensagem: "",
      });
    }
  };

  // Dados de contato
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "E-mail",
      value: "geovan.bastos@data7ti.com.br",
      link: "mailto:geovan.bastos@data7ti.com.br"
    },
    {
      icon: FaPhone,
      title: "Telefone",
      value: "+55 75 99919-4533",
      link: "tel:+5575999194533"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+55 75 99919-4533",
      link: "https://wa.me/5575999194533"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Localização",
      value: "Sede da União Médica",
      link: "#map"
    }
  ];

  return (
    <Box
      bgGradient={bgGradient}
      minH="100vh"
      backgroundAttachment="fixed"
    >
      {/* Seção principal com conteúdo sobre contato */}
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
              Entre em{" "}
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
                Contato
              </Text>
            </Text>
          </Heading>
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color={subtitleColor}
            maxW="800px"
            mx="auto"
          >
            Estamos prontos para atender suas necessidades e responder todas as suas dúvidas.
          </Text>
        </MotionBox>

        {/* Grid com informações de contato e formulário */}
        <SimpleGrid 
          columns={{ base: 1, lg: 2 }} 
          spacing={{ base: 8, lg: 16 }}
          mb={{ base: 16, md: 20 }}
        >
          {/* Coluna de informações de contato */}
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <VStack spacing={5} align="stretch">
              <Heading 
                as="h2" 
                fontSize={{ base: "2xl", md: "3xl" }}
                color={textColor}
                mb={2}
              >
                Informações de Contato
              </Heading>
              <Text color={subtitleColor} mb={4}>
                Entre em contato conosco através de um dos canais abaixo, ou preencha o formulário e retornaremos o mais breve possível.
              </Text>
              
              {/* Cards de informações de contato */}
              {contactInfo.map((info, index) => (
                <ContactInfoCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  value={info.value}
                  link={info.link}
                  delay={0.3 + index * 0.1}
                  accentColor={accentColor}
                  cardBg={cardBg}
                  textColor={textColor}
                  subtitleColor={subtitleColor}
                />
              ))}
            </VStack>
          </MotionBox>
          
          {/* Coluna do formulário */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box
              bg={cardBg}
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              boxShadow="lg"
              position="relative"
              overflow="hidden"
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
              
              <VStack spacing={5} align="stretch">
                <Heading 
                  as="h2" 
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color={textColor}
                  mb={2}
                >
                  Envie sua Mensagem
                </Heading>
                
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4}>
                    <FormControl id="nome" isInvalid={errors.nome}>
                      <FormLabel color={textColor}>Nome</FormLabel>
                      <Input
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="1px solid"
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        _hover={{
                          borderColor: accentColor,
                        }}
                        _focus={{
                          borderColor: accentColor,
                          boxShadow: `0 0 0 1px ${accentColor}`,
                        }}
                      />
                      {errors.nome && (
                        <FormErrorMessage>{errors.nome}</FormErrorMessage>
                      )}
                    </FormControl>
                    
                    <FormControl id="contato" isInvalid={errors.contato}>
                      <FormLabel color={textColor}>E-mail ou WhatsApp</FormLabel>
                      <Input
                        type="text"
                        placeholder="Seu e-mail ou número do WhatsApp"
                        value={formData.contato}
                        onChange={handleChange}
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="1px solid"
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        _hover={{
                          borderColor: accentColor,
                        }}
                        _focus={{
                          borderColor: accentColor,
                          boxShadow: `0 0 0 1px ${accentColor}`,
                        }}
                      />
                      {errors.contato && (
                        <FormErrorMessage>{errors.contato}</FormErrorMessage>
                      )}
                    </FormControl>
                    
                    <FormControl id="mensagem" isInvalid={errors.mensagem}>
                      <FormLabel color={textColor}>Mensagem</FormLabel>
                      <Textarea
                        placeholder="Digite sua mensagem aqui..."
                        value={formData.mensagem}
                        onChange={handleChange}
                        minH="150px"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="1px solid"
                        borderColor={useColorModeValue("gray.200", "gray.600")}
                        _hover={{
                          borderColor: accentColor,
                        }}
                        _focus={{
                          borderColor: accentColor,
                          boxShadow: `0 0 0 1px ${accentColor}`,
                        }}
                      />
                      {errors.mensagem && (
                        <FormErrorMessage>{errors.mensagem}</FormErrorMessage>
                      )}
                    </FormControl>
                    
                    <Button
                      mt={4}
                      w="full"
                      bg={accentColor}
                      color="white"
                      rightIcon={<Icon as={FaPaperPlane} />}
                      type="submit"
                      size="lg"
                      rounded="full"
                      _hover={{
                        transform: "translateY(-5px)",
                        boxShadow: "xl",
                        bg: "blue.600",
                      }}
                      transition="all 0.3s ease"
                    >
                      Enviar Mensagem
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>

      {/* Mapa - Ajustado para ocupar toda a largura */}
      <Box id="map" mb={10} width="100%">
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            overflow="hidden"
            borderRadius="xl"
            boxShadow="xl"
            width="100%"
          >
            <MapComponent />
          </MotionBox>
        </Container>
      </Box>

      {/* Componentes adicionais */}
      <SectionSoluctions />
      <Footer />
      <FeedbackButton />
      <ScrollToTopButton />
    </Box>
  );
};

/**
 * ContactInfoCard - Componente de card para informações de contato
 */
function ContactInfoCard({ icon, title, value, link, delay, accentColor, cardBg, textColor, subtitleColor }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      as="a"
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      bg={cardBg}
      borderRadius="lg"
      p={4}
      boxShadow="md"
      position="relative"
      overflow="hidden"
      display="block"
      textDecoration="none"
      _hover={{ 
        boxShadow: "lg",
        transform: "translateY(-3px)"
      }}
    >
      <HStack spacing={4}>
        <Flex
          align="center"
          justify="center"
          borderRadius="full"
          bg={`${accentColor}20`}
          p={3}
          w="50px"
          h="50px"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon as={icon} boxSize={5} color={accentColor} />
          </motion.div>
        </Flex>
        
        <Box>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={textColor}
            mb={1}
          >
            {title}
          </Text>
          <Text
            fontSize="md"
            color={subtitleColor}
          >
            {value}
          </Text>
        </Box>
      </HStack>
    </MotionBox>
  );
}

export default Contact;
