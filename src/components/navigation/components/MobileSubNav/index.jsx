import {
  Stack,
  Box,
  Collapse,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const MobileNavItem = ({ label, children, href, onToggle }) => {
  const { isOpen, onToggle: toggleCollapse } = useDisclosure();
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleNavClick = (path) => {
    navigate(path); // Navega para a rota
    onToggle(); // Fecha o menu
  };

  return (
    <Stack
      spacing={4}
      onClick={children ? toggleCollapse : () => handleNavClick(href)}
    >
      <Box
        as="a"
        py={2}
        justifyContent="space-between"
        alignItems="center"
        borderRadius={"md"}
        _hover={{
          textDecoration: "none",
          transform: "scale(1.05)",
          transition: "transform 0.3s ease",
          bg: useColorModeValue("gray.100", "gray.700"), // Adiciona fundo no hover
        }}
        transition={"all 0.3s ease"}
        p={3}
        cursor="pointer" // Adiciona cursor pointer
        onClick={() => handleNavClick(href ?? "#")} // Use handleNavClick para navegação
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          fontSize={"lg"}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
          borderRadius={"md"}
          bg={useColorModeValue("white", "gray.800")}
          p={2}
        >
          {children &&
            children.map((child) => (
              <Box
                key={child.label}
                py={2}
                borderRadius={"md"}
                _hover={{
                  textDecoration: "none",
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                  bg: useColorModeValue("gray.100", "gray.700"), // Adiciona fundo no hover
                }}
                cursor="pointer" // Adiciona cursor pointer
                onClick={() => handleNavClick(child.href)}
              >
                <Text fontSize={"md"}>{child.label}</Text>
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
