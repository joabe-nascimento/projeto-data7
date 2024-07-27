import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import assistentevirtual from "../../assets/assistente-virtual.gif";
import escudo from "../../assets/escudo.gif";
import html from "../../assets/html.gif";

const Card = ({
  heading,
  description,
  iconSrc,
  href,
  borderRadius,
  bgColor,
  textColor,
  showButton,
  minW,
}) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      minW={minW}
      w={"full"}
      borderWidth="1px"
      rounded={borderRadius}
      overflow="hidden"
      p={5}
      bg={bgColor}
      border="1px solid rgba(255, 255, 255, 0.3)"
      boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
      mb={16}
    >
      <Stack align={"start"} spacing={4} textAlign="left">
        {iconSrc && (
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            rounded={"full"}
            bg="transparent"
            border="none"
            boxShadow="none"
          >
            <Image src={iconSrc} alt="Icon" boxSize="50px" objectFit="cover" />
          </Flex>
        )}
        <Box>
          <Heading size="md" color={textColor}>
            <Text whiteSpace="pre-wrap">{heading}</Text>
          </Heading>
          <Text mt={1} fontSize={"sm"} color={textColor}>
            {description}
          </Text>
        </Box>
        {showButton && (
          <Button
            as="a"
            href={href}
            variant={"solid"}
            colorScheme={"blue"}
            size={"sm"}
            alignSelf="flex-start" // Alinhando o botão à esquerda
            bg="white" // Cor do fundo do botão
            color="blue.400" // Cor do texto do botão
            borderRadius={"15px 0px 15px 0px"}
            _hover={{ bg: "gray.100", color: "blue.500" }} // Estilo ao passar o mouse
          >
            Clique aqui
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default function GridListWith() {
  return (
    <Box p={4}>
      <Container maxW={"1xl"} mt={8}>
        <Flex
          position={"static"}
          marginTop={"-150px"}
          flexWrap="wrap"
          gap={0}
          justify="center"
          align="flex-start"
        >
          <Card
            heading={"Suporte"}
            iconSrc={assistentevirtual}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
            borderRadius={"50px 0px 0px"}
            bgColor="white"
            textColor="black"
            showButton={false}
          />
          <Card
            heading={"Segurança"}
            iconSrc={escudo}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
            bgColor="white"
            textColor="black"
            showButton={false}
          />
          <Card
            heading={"Desenvolvimento"}
            iconSrc={html}
            description={
              "Lorem ipsum dolor sit amet catetur, adipisicing elit."
            }
            href={"#"}
            borderRadius={"0px 0px 50px"}
            bgColor="white"
            textColor="black"
            showButton={false}
          />
          <Box ml={6}>
            <Card
              heading={
                <Text textAlign={"left"}>
                  Agendar uma
                  <br />
                  Reunião
                </Text>
              }
              href={"#"}
              borderRadius={"30px 0px 30px 0px"}
              minW={{ base: "full", md: "250px" }} // Define a largura mínima do cartão
              bgColor="blue.400"
              textColor="white"
              description=""
              showButton={true}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
