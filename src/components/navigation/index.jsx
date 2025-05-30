import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Image,
  Button,
  HStack,
  Container,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { DesktopNav } from "../../components/navigation/components/DesktopNav";
import { MobileNav } from "../../components/navigation/components/MobileNav";
import data71 from "../../assets/data71.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Componentes com animação
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  
  // WhatsApp link configuration
  const whatsappNumber = "+5575999194533";
  const whatsappMessage = "Olá, gostaria de mais informações sobre seus serviços.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Controle de scroll para mudança visual da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cores dinâmicas baseadas no tema e estado de scroll
  const navbarBg = useColorModeValue(
    scrolled 
      ? "rgba(255, 255, 255, 0.95)" 
      : "rgba(255, 255, 255, 0.9)",
    scrolled 
      ? "rgba(26, 32, 44, 0.95)" 
      : "rgba(26, 32, 44, 0.9)"
  );

  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");

  // Tamanho responsivo do logo
  const logoSize = useBreakpointValue({ 
    base: "40px", 
    md: scrolled ? "45px" : "50px" 
  });

  // Tamanho e padding da navbar baseados no scroll
  const navbarHeight = useBreakpointValue({ 
    base: scrolled ? "60px" : "70px", 
    md: scrolled ? "70px" : "80px" 
  });

  const navbarPadding = scrolled ? 2 : { base: 2, md: 4 };
  const navbarMargin = scrolled ? 2 : 4;
  const navbarShadow = scrolled ? "xl" : "lg";
  const borderRadius = scrolled ? "2xl" : "full";

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={999}
      margin={navbarMargin}
      transition={"all 0.3s ease"}
    >
      <Container maxW="1400px" mx="auto">
        <MotionFlex
          bg={navbarBg}
          color={useColorModeValue("gray.700", "white")}
          minH={navbarHeight}
          py={navbarPadding}
          px={{ base: 4, md: 8 }}
          borderBottom={0}
          borderStyle={"solid"}
          align={"center"}
          justify={"space-between"}
          backdropFilter="blur(20px)"
          boxShadow={navbarShadow}
          borderRadius={borderRadius}
          transition="all 0.4s ease"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          _hover={{
            boxShadow: "2xl",
            transform: "translateY(2px)",
          }}
          border="1px solid"
          borderColor={borderColor}
        >
          {/* Logo com animação */}
          <MotionFlex 
            align={"center"} 
            justify={{ base: "start" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/">
              <Flex align="center">
               
                <Text
                  fontWeight="bold"
                  fontSize={{base: "lg", md: "xl"}}
                  ml={2}
                  display={{ base: "none", sm: "block" }}
                  color={useColorModeValue("blue.600", "blue.300")}
                  letterSpacing="tight"
                >
                  DATA7
                </Text>
              </Flex>
            </Link>
          </MotionFlex>
          
          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            <DesktopNav />
            
            {/* Contact button on desktop */}
            <MotionButton
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              size={scrolled ? "md" : "md"}
              fontSize={scrolled ? "sm" : "md"}
              fontWeight={600}
              color="white"
              bg="blue.500"
              leftIcon={<FaWhatsapp />}
              _hover={{
                bg: "blue.600",
              }}
              _active={{
                bg: "blue.700",
              }}
              borderRadius="full"
              px={6}
              py={scrolled ? 5 : 6}
              transition="all 0.3s ease"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              boxShadow="md"
            >
              Fale Conosco
            </MotionButton>
          </HStack>
          
          {/* Mobile Navigation Toggle com animação melhorada */}
          <MotionBox
            flex={{ base: "auto", md: "auto" }}
            display={{ base: "flex", md: "none" }}
            justify={"flex-end"}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              _hover={{ bg: useColorModeValue("gray.200", "gray.700"), transform: "scale(1.1)" }}
              _active={{ bg: useColorModeValue("gray.300", "gray.600") }}
              borderRadius="full"
              size="lg"
              transition="all 0.2s"
              boxShadow={isOpen ? "md" : "none"}
            />
          </MotionBox>
        </MotionFlex>
      </Container>

      {/* Mobile Navigation Menu com animação melhorada */}
      <Collapse in={isOpen} animateOpacity>
        <Box 
          mx={4}
          mt={2}
          bg={useColorModeValue("white", "gray.800")}
          rounded="lg"
          boxShadow="xl"
          overflow="hidden"
          border="1px solid"
          borderColor={borderColor}
        >
          <MobileNav onToggle={onToggle} />
        </Box>
      </Collapse>
    </Box>
  );
}
