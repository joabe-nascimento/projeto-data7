import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { DesktopNav } from "../../components/navigation/components/DesktopNav";
import { MobileNav } from "../../components/navigation/components/MobileNav";
import data71 from "../../assets/data71.png";
import { Link } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      rounded={"30px"} // Cantos totalmente arredondados
      zIndex={999}
      margin={4}
      transition={"all 0.3s ease"}
    >
      <Box maxW="1100px" mx="auto">
        <Flex
          maxH={{ base: "50px", md: "60px" }} // Altura máxima reduzida
          bg={useColorModeValue(
            "rgba(255, 255, 255, 0.7)", // Modo claro com mais transparência
            "rgba(0, 0, 0, 0.5)" // Modo escuro com mais transparência
          )}
          color={useColorModeValue("gray.600", "white")}
          minH={{ base: "40px", md: "50px" }} // Altura mínima reduzida
          py={{ base: 1, md: 2 }} // Padding vertical reduzido
          px={{ base: 3, md: 2 }} // Padding lateral mantido
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          justify={"center"}
          rounded={"30px"} // Cantos totalmente arredondados
        >
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "space-between" }}
            align={"center"}
            w={"100%"}
          >
            <Flex
              align={"center"}
              justify={{ base: "center", md: "start" }}
              flex={{ base: "auto", md: 1 }}
            >
              <Link to="/">
                <Image
                  src={data71}
                  alt="Logo"
                  height={{ base: "80px", md: "150px" }} // Altura da logo ajustada
                  objectFit={"contain"}
                />
              </Link>
            </Flex>

            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
              justify={"flex-end"}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={5} h={5} />
                  ) : (
                    <HamburgerIcon w={6} h={6} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                transition={"background 0.3s ease"}
              />
            </Flex>

            <Flex
              flex={{ base: 1 }}
              justify={{ base: "center", md: "center" }}
              align={"center"}
              display={{ base: "none", md: "flex" }}
            >
              <Flex ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}
