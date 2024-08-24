import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Parallax } from "react-parallax";

export default function Contact() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const phoneNumber = "+5575991016263"; // Substitua pelo número de telefone desejado
  const whatsappMessage = "Olá, gostaria de conversar sobre os serviços."; // Mensagem padrão do WhatsApp

  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=800"
      bgImageAlt="Imagem de fundo"
      strength={400} // Ajuste o valor para controlar a intensidade do efeito de paralaxe
      bgImageStyle={{ objectFit: 'cover' }} // Ajuste a imagem de fundo
    >
      <Flex
        w={"full"}
        h={useBreakpointValue({ base: "50vh", md: "60vh", lg: "70vh" })} // Altura ajustada para diferentes tamanhos de tela
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundAttachment={"fixed"} // Mantém a imagem de fundo fixa durante o scroll
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 6, lg: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Text
              align={"center"}
              color={"white"}
              fontWeight={800}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" })}
            >
              Vamos conversar e entender as suas necessidades?
            </Text>
            {isMobile ? (
              <Stack direction={"column"} align={"center"}>
                <Button
                  as="a"
                  href={`tel:${phoneNumber}`}
                  bgGradient="linear(to-r, blue.300, blue.500)"
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bgGradient: "linear(to-r, blue.400, blue.600)" }}
                  height={"50px"}
                  fontSize={"lg"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 60px",
                  }}
                >
                  Ligue Agora
                </Button>
                <Button
                  as="a"
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  bgGradient="linear(to-r, blue.800, blue.900)"
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bgGradient: "linear(to-r, blue.900, blue.700)" }}
                  height={"50px"}
                  fontSize={"lg"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 30px",
                  }}
                >
                  Mandar Mensagem
                </Button>
              </Stack>
            ) : (
              <Stack direction={"row"} align={"center"}>
                <Button
                  as="a"
                  href={`tel:${phoneNumber}`}
                  marginRight={"-20px"}
                  bgGradient="linear(to-r, blue.300, blue.500)"
                  rounded={"30px 0px 0px 30px"}
                  color={"white"}
                  _hover={{ bgGradient: "linear(to-r, blue.400, blue.600)" }}
                  height={"60px"}
                  fontSize={"lg"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 60px",
                  }}
                >
                  Ligue Agora
                </Button>
                <Flex
                  border={"6px solid white"}
                  zIndex={99999}
                  align={"center"}
                  justify={"center"}
                  w={"40px"}
                  h={"40px"}
                  bg={"white"}
                  color={"black"}
                  rounded={"full"}
                  fontWeight={"bold"}
                  mx={-2} // Ajuste de espaço entre os botões
                >
                  OU
                </Flex>
                <Button
                  as="a"
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  paddingRight={30}
                  marginLeft={"-20px"}
                  bgGradient="linear(to-r, blue.800, blue.900)"
                  rounded={"0px 30px 30px 0px"}
                  color={"white"}
                  _hover={{ bgGradient: "linear(to-r, blue.900, blue.700)" }}
                  height={"60px"}
                  fontSize={"lg"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 30px",
                  }}
                >
                  Mandar Mensagem
                </Button>
              </Stack>
            )}
          </Stack>
        </VStack>
      </Flex>
    </Parallax>
  );
}
