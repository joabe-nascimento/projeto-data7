import { Button, Heading, Stack, Text } from "@chakra-ui/react";

const FeedbackHeader = () => {
  return (
    <Stack
      spacing={6}
      w={"full"}
      maxW={"lg"}
      ml={{ base: 0, md: 12 }}
      mb={{ base: 6, md: 0 }}
    >
      <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
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
            height: "4px",
            zIndex: -1,
          }}
        >
          Oportunidade de Serviços
        </Text>
        <br />
      </Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={4}>
        <Button
          bg={"blue.400"}
          rounded={"15px 0px 15px"}
          color={"white"}
          _hover={{ bg: "blue.500" }}
        >
          Fale Conosco
        </Button>
      </Stack>
    </Stack>
  );
};

export default FeedbackHeader;
