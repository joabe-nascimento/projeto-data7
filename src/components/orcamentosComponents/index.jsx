"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orcamentos = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    projectDescription: "",
    startDate: "",
    endDate: "",
    comments: "",
  });

  const formWidth = useBreakpointValue({ base: "100%", md: "80%", lg: "70%" });
  const bgColor = useColorModeValue("gray.10", "gray.900");
  const boxShadow = useColorModeValue("md", "lg");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vmhaqqw",
        "template_ltxyr3s",
        formData,
        "DyAJLKDUMpsFJ-M-T"
      )
      .then((response) => {
        console.log("Success:", response);
        toast.success("Solicitação enviada com sucesso!");
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          serviceType: "",
          projectDescription: "",
          startDate: "",
          endDate: "",
          comments: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Ocorreu um erro ao enviar a solicitação.");
      });
  };

  return (
    <Box py={{ base: 4, sm: 6, md: 8 }} bg={bgColor}>
      <Container maxW={"8xl"}>
        <VStack spacing={10} width="100%">
          <Heading size="xl" textAlign="center" color="blue.600">
            Solicite um Orçamento Personalizado
          </Heading>
          <Text textAlign="center" fontSize="lg" color="gray.600" maxW="800px">
            Preencha o formulário abaixo para solicitar um orçamento
            personalizado para nossos serviços de TI. Nossa equipe entrará em
            contato com você em breve.
          </Text>
          <Box
            width={formWidth}
            borderWidth={1}
            borderColor="blue.300"
            borderRadius="xl"
            p={8}
            bg="white"
            boxShadow={boxShadow}
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: "scale(1.02)", boxShadow: "2xl" }}
          >
            <Heading size="lg" mb={6} textAlign="center">
              Formulário de Solicitação
            </Heading>
            <Stack spacing={5} as="form" onSubmit={handleSubmit}>
              <FormControl id="companyName" isRequired>
                <FormLabel>Nome da Empresa</FormLabel>
                <Input
                  placeholder="Nome da Empresa"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="contactName" isRequired>
                <FormLabel>Nome do Contato</FormLabel>
                <Input
                  placeholder="Nome do Contato"
                  value={formData.contactName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Telefone</FormLabel>
                <Input
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="serviceType" isRequired>
                <FormLabel>Tipo de Serviço</FormLabel>
                <Input
                  placeholder="Tipo de Serviço (ex. Desenvolvimento de Software)"
                  value={formData.serviceType}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="projectDescription" isRequired>
                <FormLabel>Descrição do Projeto/Serviço</FormLabel>
                <Textarea
                  placeholder="Descreva o projeto ou serviço desejado"
                  value={formData.projectDescription}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="startDate">
                <FormLabel>Data de Início Desejada</FormLabel>
                <Input
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="endDate">
                <FormLabel>Data de Término Desejada</FormLabel>
                <Input
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="comments">
                <FormLabel>Comentários Adicionais</FormLabel>
                <Textarea
                  placeholder="Adicione quaisquer perguntas ou comentários adicionais"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </FormControl>
              <Button 
          rounded={"15px 0px 15px"}
colorScheme="blue" size="lg" fontSize="md" type="submit">
                Enviar Solicitação
              </Button>
            </Stack>
          </Box>
        </VStack>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 99999 }}
      />
    </Box>
  );
};

export default Orcamentos;
