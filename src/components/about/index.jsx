import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import foguete from "../../assets/foguete.gif";
import observador from "../../assets/observador.gif";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
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
                zIndex: -1,
              }}
            >
              Sobre Nós
            </Text>
            <br />{" "}
          </Heading>
          <Stack spacing={2} direction="row" align="center">
            <Image
              boxSize="3rem"
              src={observador} // Substitua pelo URL do seu GIF
              alt="Visão"
            />
            <Text
              fontWeight={"600"}
              fontSize={"20"}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Nossa Visão
            </Text>
          </Stack>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for contract work.
            It&apos;s perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack spacing={2} direction="row" align="center">
            <Image
              boxSize="3rem"
              src={foguete} // Substitua pelo URL do seu GIF
              alt="Visão"
            />
            <Text
              fontWeight={"600"}
              fontSize={"20"}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Nossa Missão
            </Text>
          </Stack>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for contract work.
            It&apos;s perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              bg={"blue.400"}
              rounded={"15px 0px 15px"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Create Project
            </Button>
            <Button
              rounded={"full"}
              bg={"blackAlpha.400"}
              color={"white"}
              _hover={{ bg: "blackAlpha.500" }}
            >
              How It Works
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
