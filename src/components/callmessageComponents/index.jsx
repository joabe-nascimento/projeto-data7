"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Contact() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      w={"full"}
      h={"70vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Text
            align={"center"}
            color={"white"}
            fontWeight={800}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            Vamos conversar e entender as suas necessidades?
          </Text>
          {isMobile ? (
            <Stack direction={"column"} align={"center"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
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
                bg={"blue.900"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.700" }}
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
                marginRight={"-20px"}
                bg={"blue.400"}
                rounded={"30px 0px 0px 30px"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
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
                paddingRight={30}
                marginLeft={"-20px"}
                bg={"blue.900"}
                rounded={"0px 30px 30px 0px"}
                color={"white"}
                _hover={{ bg: "blue.700" }}
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
  );
}
