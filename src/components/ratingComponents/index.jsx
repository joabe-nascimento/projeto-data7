import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Card = ({ description, mt, mb }) => {
  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      w={"full"}
      borderWidth="1px"
      borderColor="blue.400"
      borderRadius="30px 0px 30px 0px"
      overflow="hidden"
      p={5}
      bg="blue.600"
      boxShadow="lg"
      mt={mt}
      mb={mb}
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
            <FaQuoteLeft style={{ fontSize: "2em" }} />
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardMarginTop = useBreakpointValue({ base: 0, md: -15 });
  const cardMarginBottom = useBreakpointValue({ base: 0, md: 15 });

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          "https://api-data7.onrender.com/api/feedback"
        );
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Erro ao buscar feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 3;
      return newIndex >= feedbacks.length ? prevIndex : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  // Slice feedbacks to show only 3 cards at a time
  const visibleFeedbacks = feedbacks.slice(currentIndex, currentIndex + 3);

  // Determine if the right arrow should be disabled
  const isNextDisabled = currentIndex + 3 >= feedbacks.length;

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
      <Container maxW={"5xl"} mt={12} position="relative">
        <Flex flexWrap="wrap" gap={10} justify="center">
          {visibleFeedbacks.map((feedback) => (
            <Card
              key={feedback._id}
              mt={cardMarginTop}
              mb={cardMarginBottom}
              description={feedback.feedback}
            />
          ))}
        </Flex>
        <IconButton
          icon={<FaArrowLeft />}
          aria-label="Previous"
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          onClick={handlePrev}
          isDisabled={currentIndex === 0} // Disable button when on the first page
        />
        <IconButton
          icon={<FaArrowRight />}
          aria-label="Next"
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          onClick={handleNext}
          isDisabled={isNextDisabled} // Disable button if no more feedbacks to show
        />
      </Container>
    </Box>
  );
}
