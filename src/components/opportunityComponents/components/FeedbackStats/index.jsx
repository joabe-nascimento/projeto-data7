import { Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { StarIcon, CheckCircleIcon, TimeIcon, AtSignIcon } from "@chakra-ui/icons";

const FeedbackStats = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-around"
      p={{ base: 2, md: 4 }}
      px={{ base: 4, md: 6 }}
    >
      <Stack
        spacing={1}
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 2, md: 4 }}
        align="center"
      >
        <Icon as={CheckCircleIcon} boxSize={{ base: 6, md: 12 }} color="teal.400" />
        <Heading fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} mt={1}>
          Atendimento Personalizado
        </Heading>
        <Text color="gray.600">Foco total nas necessidades do cliente</Text>
      </Stack>
      <Stack
        spacing={1}
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 2, md: 4 }}
        align="center"
      >
        <Icon as={TimeIcon} boxSize={{ base: 6, md: 12 }} color="orange.400" />
        <Heading fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} mt={1}>
          Anos de Experiência
        </Heading>
        <Text color="gray.600">História marcada por qualidade e confiança</Text>
      </Stack>
      <Stack
        spacing={1}
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 2, md: 4 }}
        align="center"
      >
        <Icon as={AtSignIcon} boxSize={{ base: 6, md: 12 }} color="blue.400" />
        <Heading fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} mt={1}>
          Padrão de Excelência
        </Heading>
        <Text color="gray.600">Compromisso com resultados superiores</Text>
      </Stack>
      <Stack spacing={1} textAlign="center" mb={{ base: 2, md: 4 }} align="center">
        <Flex align="center" justify={{ base: "center", md: "left" }}>
          <Icon as={StarIcon} boxSize={{ base: 6, md: 12 }} color="yellow.400" />
          <Heading fontSize={{ base: "lg", md: "2xl", lg: "3xl" }} mt={1} ml={2}>
            Avaliação de Clientes
          </Heading>
        </Flex>
        <Text color="gray.600">Confiança e satisfação garantidas</Text>
      </Stack>
    </Flex>
  );
};

export default FeedbackStats;
