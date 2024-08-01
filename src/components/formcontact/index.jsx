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
} from "@chakra-ui/react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      toast({
        title: "Formulário enviado.",
        description: "Obrigado pelo seu contato! Entraremos em breve.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        nome: "",
        contato: "",
        mensagem: "",
      });
    }
  };

  return (
    <Box maxW="2xl" mx="auto" p={4} mt={2}>
      <form onSubmit={handleSubmit}>
        <FormControl id="nome" mb={4} isInvalid={errors.nome}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {errors.nome && <FormErrorMessage>{errors.nome}</FormErrorMessage>}
        </FormControl>
        <FormControl id="contato" mb={4} isInvalid={errors.contato}>
          <FormLabel>E-mail ou WhatsApp</FormLabel>
          <Input
            type="text"
            placeholder="Seu e-mail ou WhatsApp"
            value={formData.contato}
            onChange={handleChange}
          />
          {errors.contato && (
            <FormErrorMessage>{errors.contato}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="mensagem" mb={4} isInvalid={errors.mensagem}>
          <FormLabel>Mensagem</FormLabel>
          <Textarea
            placeholder="Sua mensagem"
            value={formData.mensagem}
            onChange={handleChange}
          />
          {errors.mensagem && (
            <FormErrorMessage>{errors.mensagem}</FormErrorMessage>
          )}
        </FormControl>
        <Button colorScheme="teal" type="submit" w="full">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Formulario;
