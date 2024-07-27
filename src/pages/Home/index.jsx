"use client";

import {
  Button,
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import GridListWith from "../../components/cards";
import WithSubnavigation from "../../components/navigation";
import SplitScreen from "../../components/section";
import Services from "../../components/services";

export default function WithBackgroundImage() {
  return (
    <>
      <WithSubnavigation />
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          alignItems={"left"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Container maxW={"1200px"} px={12} py={8}>
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
              >
                Bem vindos <br /> a Data7
              </Text>

              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
              >
                Bem vindos ao TI
              </Text>
              <Stack direction={"row"}>
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
          </Container>
        </VStack>
      </Flex>
      <Container maxW={"1200px"} px={4} py={8}>
        <GridListWith />
      </Container>
      <Container maxW={"1200px"} px={4} py={8}>
        <SplitScreen />
      </Container>
      <Container maxW={"1200px"} px={4} py={16}>
        <Services />
      </Container>
    </>
  );
}
