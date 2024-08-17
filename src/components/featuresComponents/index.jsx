"use client";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

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

export default function GridListWithHeading() {
  return (
    <Box
    marginBottom={"140px"}
      marginTop={"50px"}
      p={16}
      bgGradient="linear(to-r, gray.100, gray.300)"
    >
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Nossas Soluções</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Descubra como nossas soluções podem transformar seu negócio, trazendo
          inovação e eficiência.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={8}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"start"} spacing={4} p={4}>
              <Box color={"blue.400"}>
                <Icon as={CheckIcon} boxSize={6} />
              </Box>
              <VStack align={"start"} spacing={2}>
                <Text fontWeight={600} fontSize={"lg"}>
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
