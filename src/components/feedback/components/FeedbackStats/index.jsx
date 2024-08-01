import { Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

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
      >
        <Heading fontSize={{ base: "md", md: "2xl", lg: "3xl" }} mt={1}>
          + 300
        </Heading>
        <Text color="gray.600">Clientes Satisfeitos</Text>
      </Stack>
      <Stack
        spacing={1}
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 2, md: 4 }}
      >
        <Heading fontSize={{ base: "md", md: "2xl", lg: "3xl" }} mt={1}>
          + 19 anos
        </Heading>
        <Text color="gray.600">de Qualidade</Text>
      </Stack>
      <Stack
        spacing={1}
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 2, md: 4 }}
      >
        <Heading fontSize={{ base: "md", md: "2xl", lg: "3xl" }} mt={1}>
          100%
        </Heading>
        <Text color="gray.600">de Profissionalismo</Text>
      </Stack>
      <Stack spacing={1} textAlign="center" mb={{ base: 2, md: 4 }}>
        <Flex align="center" justify={{ base: "center", md: "left" }}>
          <Heading fontSize={{ base: "md", md: "2xl", lg: "3xl" }} mt={1}>
            5
          </Heading>
          <Icon
            paddingLeft={2}
            mt={1}
            as={StarIcon}
            color="yellow.400"
            mr={1}
            boxSize={{ base: 4, md: 9 }}
          />
        </Flex>
        <Text color="gray.600">Nota máxima</Text>
      </Stack>
    </Flex>
  );
};

export default FeedbackStats;
