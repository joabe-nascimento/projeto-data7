import { Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { StarIcon, CheckCircleIcon, TimeIcon, AtSignIcon } from "@chakra-ui/icons";

const FeedbackStats = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-evenly"
      p={{ base: 2, md: 4 }}
      px={{ base: 4, md: 6 }}
      textAlign="center"
    >
      <Stack
        spacing={3}
        align="center"
      >
        <Icon as={CheckCircleIcon} boxSize={{ base: 8, md: 12 }} color="teal.400" />
        <Heading fontSize={{ base: "lg", md: "xl" }}>
          Atendimento Personalizado
        </Heading>
        <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
          Foco total nas necessidades do cliente
        </Text>
      </Stack>

      <Stack
        spacing={3}
        align="center"
      >
        <Icon as={TimeIcon} boxSize={{ base: 8, md: 12 }} color="orange.400" />
        <Heading fontSize={{ base: "lg", md: "xl" }}>
          Anos de Experiência
        </Heading>
        <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
          História marcada por qualidade e confiança
        </Text>
      </Stack>

      <Stack
        spacing={3}
        align="center"
      >
        <Icon as={AtSignIcon} boxSize={{ base: 8, md: 12 }} color="blue.400" />
        <Heading fontSize={{ base: "lg", md: "xl" }}>
          Padrão de Excelência
        </Heading>
        <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
          Compromisso com resultados superiores
        </Text>
      </Stack>

      <Stack
        spacing={3}
        align="center"
      >
        <Icon as={StarIcon} boxSize={{ base: 8, md: 12 }} color="yellow.400" />
        <Heading fontSize={{ base: "lg", md: "xl" }}>
          Avaliação de Clientes
        </Heading>
        <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
          Confiança e satisfação garantidas
        </Text>
      </Stack>
    </Flex>
  );
};

export default FeedbackStats;
