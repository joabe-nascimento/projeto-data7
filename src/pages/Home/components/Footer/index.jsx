"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import data71 from "../../../../assets/data71.png";

const Logo = (props) => {
  return <img src={data71} alt="Logo" width={150} height={32} {...props} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("gray.200", "gray.800")}
      borderRadius="full"
      w={10}
      h={10}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.3s ease"
      _hover={{
        bg: useColorModeValue("gray.300", "gray.700"),
        transform: "scale(1.1)",
      }}
      aria-label={label}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// Links da navbar
const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Serviços", href: "/services" },
  { label: "Contatos", href: "/contact" },
];

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      py={6}
      px={8}
    >
      <Container maxW="container.lg">
        <Stack spacing={6} align="center" justify="center">
          <Logo />

          <SimpleGrid columns={[2, 2, 4]} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
              <Link
                key={navItem.label}
                href={navItem.href}
                fontSize="md"
                color={useColorModeValue("blue.500", "blue.300")}
                _hover={{
                  textDecoration: "underline",
                  transform: "scale(1.1)",
                }}
                transition="all 0.2s ease"
              >
                {navItem.label}
              </Link>
            ))}
          </SimpleGrid>

          <Stack direction="row" spacing={8} justify="center">
            <SocialButton label="Twitter" href="https://twitter.com">
              <FaTwitter size={20} />
            </SocialButton>
            <SocialButton label="Instagram" href="https://instagram.com">
              <FaInstagram size={20} />
            </SocialButton>
            <SocialButton label="YouTube" href="https://youtube.com">
              <FaYoutube size={20} />
            </SocialButton>
          </Stack>

          <Text fontSize="sm" textAlign="center">
            <Link
              href="/privacy"
              color={useColorModeValue("blue.500", "blue.300")}
            >
              Privacy Policy
            </Link>
            {" | "}
            <Link
              href="/terms"
              color={useColorModeValue("blue.500", "blue.300")}
            >
              Terms of Service
            </Link>
          </Text>

          <Text fontSize="sm" textAlign="center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
