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
            <Text as="span" whiteSpace="pre-wrap">
              {heading}
            </Text>
          </Heading>
          <Box
            textAlign="left" // Justifica o texto
            mt={5}
            fontWeight={400}
            fontSize={"large"}
            color={"blue.700"}
          >
            {description}
          </Box>
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
              <>
                Nossa equipe de especialistas de suporte terá o prazer em
                responder a todas as suas perguntas e desejos em relação aos
                nossos serviços e produtos.
                <br />
                Aqui está uma segunda linha de descrição.
              </>
            }
            href={"#"}
            borderRadius={"50px 0px 0px"}
            bgColor="white"
            textColor="blue.800"
            showButton={false}
          />

          <Card
            heading={"Segurança"}
            iconSrc={escudo}
            description={
              <>
                Implementamos medidas de segurança físicas para evitar sabotagem
                interna ou roubo de nossa infraestrutura, o que garante a
                entrega de serviços confiáveis e seguros a você.
                <br /> Aqui está uma segunda linha de descrição.
              </>
            }
            href={"#"}
            bgColor="white"
            textColor="blue.800"
            showButton={false}
          />

          <Card
            heading={"Desenvolvimento"}
            iconSrc={html}
            description={
              <>
                O principal objetivo é criar um processo que possa ser usado
                como modelo e facilmente replicado em outros departamentos ou
                divisões, em várias empresas e negócios.
              </>
            }
            href={"#"}
            borderRadius={"0px 0px 50px"}
            bgColor="white"
            textColor="blue.800"
            showButton={false}
          />
          <Box ml={6}>
            <Card
              heading={
                <Text as="span" textAlign={"left"}>
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
