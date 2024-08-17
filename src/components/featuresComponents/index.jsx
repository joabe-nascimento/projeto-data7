"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";

// Dados de exemplo, substitua pelos reais
const features = [
  {
    id: 1,
    title: "Consultoria Estratégica",
    text: "Ajudamos a definir a estratégia ideal para seu negócio, garantindo que você esteja no caminho certo para o sucesso.",
  },
  {
    id: 2,
    title: "Análise de Dados",
    text: "Utilizamos análises avançadas para transformar dados brutos em insights valiosos que orientam suas decisões.",
  },
  {
    id: 3,
    title: "Desenvolvimento de Software Personalizado",
    text: "Criamos soluções de software sob medida que atendem às necessidades específicas e desafios do seu negócio.",
  },
  {
    id: 4,
    title: "Integração de Sistemas",
    text: "Garantimos que diferentes sistemas e plataformas funcionem juntos de forma eficiente e harmoniosa.",
  },
  {
    id: 5,
    title: "Treinamento e Capacitação",
    text: "Oferecemos treinamento para sua equipe, garantindo que todos estejam atualizados com as melhores práticas e tecnologias.",
  },
  {
    id: 6,
    title: "Suporte e Manutenção",
    text: "Proporcionamos suporte contínuo e manutenção para assegurar que seus sistemas funcionem sem problemas.",
  },
  {
    id: 7,
    title: "Segurança da Informação",
    text: "Implementamos medidas robustas para proteger seus dados e garantir a conformidade com as normas de segurança.",
  },
  {
    id: 8,
    title: "Gestão de Projetos",
    text: "Gerenciamos projetos tecnológicos do início ao fim, garantindo entregas no prazo e dentro do orçamento.",
  },
];

// Definição da animação de ondulação do gradiente
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export default function GridListWithHeading() {
  return (
    <Box
      marginBottom={"140px"}
      marginTop={"50px"}
      p={16}
      bgGradient="linear(to-r, blue.50, blue.200, blue.400)"
      backgroundSize="200% 200%"
      animation={`${gradientAnimation} 15s ease infinite`}
      position="relative"
      overflow="hidden"
      // Remover a borda e borda arredondada
      boxShadow="none" // Removendo a sombra
      borderRadius="0" // Removendo a borda arredondada
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Text color={"gray.600"} fontSize={"xl"}>
          Descubra como nossas soluções podem transformar seu negócio, trazendo
          inovação e eficiência.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
          {features.map((feature) => (
            <HStack
              key={feature.id}
              align={"start"}
              spacing={4}
              p={4}
              bg="white"
              borderRadius="10" // Removendo a borda arredondada dos itens
              boxShadow="lg" // Aplique uma sombra leve aos itens da lista
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "xl",
                bgGradient: "linear(to-r, blue.100, blue.300)",
              }}
            >
              <Box
                color={"blue.400"}
                transition="color 0.3s ease"
                _hover={{ color: "blue.600" }}
              >
                <Icon as={CheckIcon} boxSize={6} />
              </Box>
              <VStack align={"start"} spacing={2}>
                <Text
                  fontWeight={600}
                  fontSize={"lg"}
                  transition="color 0.3s ease"
                  _hover={{ color: "blue.600" }}
                >
                  {feature.title}
                </Text>
                <Text color={"gray.600"} fontSize={"md"}>
                  {feature.text}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
