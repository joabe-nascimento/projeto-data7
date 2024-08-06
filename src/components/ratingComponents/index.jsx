import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa"; // Importando ícones de aspas
import axios from "axios"; // Importando axios

const Card = ({ description, mt, mb }) => {
  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      w={"full"}
      borderWidth="1px" // Ajusta a largura da borda
      borderColor="blue.400" // Define a cor da borda
      borderRadius="30px 0px 30px 0px" // Bordas arredondadas apenas nos cantos esquerdo
      overflow="hidden"
      p={5}
      bg="blue.600"
      boxShadow="lg"
      mt={mt} // Define a margem superior
      mb={mb} // Define a margem inferior
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.02)",
        transition: "0.3s",
      }}
    >
      <Stack align={"start"} spacing={4} h="full">
        <Box>
          <Heading
            size="md"
            fontSize={{ base: "lg", md: "larger" }}
            mb={5}
            color={"white"}
          >
            <FaQuoteLeft style={{ fontSize: "2em" }} />{" "}
            {/* Aumentando o tamanho do ícone */}
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={"white"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Avaliacoes() {
  const [feedbacks, setFeedbacks] = useState([]);
  const cardMarginTop = useBreakpointValue({ base: 0, md: -15 });
  const cardMarginBottom = useBreakpointValue({ base: 0, md: 15 });

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("https://api-data7.onrender.com/api/feedback");
        // Limita os feedbacks a 3
        setFeedbacks(response.data.slice(0, 3));
      } catch (error) {
        console.error("Erro ao buscar feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <Box p={{ base: 4, sm: 6, md: 8, lg: 10 }} bg="white">
      <Stack spacing={6} as={Container} maxW={"6xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
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
            Avaliações
          </Text>
        </Heading>
      </Stack>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gap={10} justify="center">
          {feedbacks.map((feedback) => (
            <Card
              key={feedback._id} // Use o ID gerado pelo MongoDB
              mt={cardMarginTop}
              mb={cardMarginBottom}
              description={feedback.feedback}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
