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
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import Footer from "../Home/components/Footer";
import MapComponent from "../../components/mapsComponents";
import ScrollToTopButton from "../Home/components/ScrollToTopButton";
import FeedbackButton from "../Home/components/FeedbackStates";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();
  const layout = useBreakpointValue({ base: "column", md: "row" });

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

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box
        maxW="6xl"
        mx="auto"
        p={6}
        mt={40} // Mantém a margem superior para desktop
        mb={8}
        flex="1"
        display="flex"
        flexDirection={layout}
        gap={6}
        flexWrap="wrap" // Permite o wrap do conteúdo em telas menores
      >
        {/* Informações de Contato à esquerda */}
        <Box
          flex={{ base: "1 1 100%", md: "1" }}
          p={{ base: 3, md: 4 }} // Ajusta o padding interno para telas menores
          borderWidth={1}
          borderRadius="lg"
          boxShadow="md"
          bg="gray.50"
          mb={{ base: 6, md: 0 }} // Adiciona margem inferior no mobile
        >
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={4}>
            Informações de Contato
          </Heading>
          <VStack spacing={{ base: 4, md: 4 }} align="start">
            <HStack spacing={{ base: 3, md: 3 }}>
              <Icon
                as={FaEnvelope}
                color="blue.500"
                boxSize={{ base: 5, md: 6 }}
              />
              <Text
                fontSize={{ base: "sm", md: "lg", lg: "xl" }} // Diminuindo a fonte para telas menores
                color="gray.600"
              >
                Email: geovan.bastos@data7ti.com.br
              </Text>
            </HStack>
            <HStack spacing={{ base: 3, md: 3 }}>
              <Icon
                as={FaPhone}
                color="blue.500"
                boxSize={{ base: 5, md: 6 }}
              />
              <Text
                fontSize={{ base: "sm", md: "lg", lg: "xl" }} // Diminuindo a fonte para telas menores
                color="gray.600"
              >
                Telefone: +55 75 99919-4533
              </Text>
            </HStack>
          </VStack>
        </Box>
        {/* Formulário à direita */}
        <Box flex={{ base: "1 1 100%", md: "1" }} p={{ base: 3, md: 4 }}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={4}>
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
              Entre em Contato
            </Text>
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="nome" mb={4} isInvalid={errors.nome}>
              <FormLabel fontSize={{ base: "md", md: "lg" }}>Nome</FormLabel>
              <Input
                type="text"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                size={{ base: "sm", md: "md" }}
              />
              {errors.nome && (
                <FormErrorMessage fontSize="sm">{errors.nome}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="contato" mb={4} isInvalid={errors.contato}>
              <FormLabel fontSize={{ base: "md", md: "lg" }}>
                E-mail ou WhatsApp
              </FormLabel>
              <Input
                type="text"
                placeholder="Seu e-mail ou WhatsApp"
                value={formData.contato}
                onChange={handleChange}
                size={{ base: "sm", md: "md" }}
              />
              {errors.contato && (
                <FormErrorMessage fontSize="sm">
                  {errors.contato}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="mensagem" mb={4} isInvalid={errors.mensagem}>
              <FormLabel fontSize={{ base: "md", md: "lg" }}>
                Mensagem
              </FormLabel>
              <Textarea
                placeholder="Sua mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                size={{ base: "sm", md: "md" }}
              />
              {errors.mensagem && (
                <FormErrorMessage fontSize="sm">
                  {errors.mensagem}
                </FormErrorMessage>
              )}
            </FormControl>
            <Button
              colorScheme="blue"
              type="submit"
              w="full"
              size={{ base: "md", md: "lg" }} // Ajusta o tamanho do botão para telas menores
              borderRadius="30px"
              boxShadow="0px 0px 8px rgba(0, 0, 0, 0.1)"
              transition="background-color 0.3s ease, transform 0.3s ease"
              _hover={{
                backgroundColor: "#0056b3",
                transform: "scale(1.05)",
              }}
              _focus={{
                boxShadow: "outline",
              }}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Box>
      <MapComponent />
      <Footer />
      <FeedbackButton />
      <ScrollToTopButton /> {/* Adicionar o botão de "subir" */}
    </Box>
  );
};

export default Contact;
