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
import { Link } from "react-router-dom"; // Import do Link do React Router

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
  <Box
  position={"fixed"}
  top={0}
  left={{ base: 0, md: "50%" }}  // No desktop, centraliza a navbar
  transform={{ base: "none", md: "translateX(-50%)" }}  // Ajuste de centralização no desktop
  width={{ base: "100%", md: "calc(100% - 48px)" }}  // Largura responsiva, fixa no desktop
  maxWidth={{ md: "1200px" }}  // Limita a largura máxima no desktop
  borderRadius={"30px"}
  boxShadow={"lg"}
  zIndex={99999999}
  margin={4}
  transition={"all 0.3s ease"}
>
  <Flex
    maxH={{ base: "20px", md: "100px" }}  // Altura máxima ajustada para modo desktop e responsivo
    bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)")}
    color={useColorModeValue("gray.600", "white")}
    minH={{ base: "50px", md: "60px" }}  // Altura mínima ajustada para modo desktop e responsivo
    py={{ base: 2, md: 4 }}  // Padding vertical ajustado para modo desktop e responsivo
    px={{ base: 3, md: 8 }}  // Padding lateral ajustado para modo desktop e responsivo
    borderBottom={1}
    borderStyle={"solid"}
    borderColor={useColorModeValue("gray.200", "gray.900")}
    align={"center"}
    justify={"center"}
    backdropFilter={"blur(10px)"}
    borderRadius={"30px"}
    width={"100%"}  // Garante que o Flex ocupe toda a largura do Box
  >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
          align={"center"}
          w={"100%"}
          maxW={"6xl"}
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
                height={{ base: "120px", md: "250px" }} // Altura da logo reduzida no responsivo
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
      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}
