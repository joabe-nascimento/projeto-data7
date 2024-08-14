import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaHeadset } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Serviços", href: "/services" },
  {
    label: "Contatos",
    href: "/contact",
    children: [
      {
        label: "Telefone",
        href: "tel:+5575991016263",
        icon: FaPhone,
      },
      {
        label: "E-mail",
        href: "mailto:suporte@exemplo.com",
        icon: FaEnvelope,
      },
      {
        label: "Suporte",
        href: "https://glpi.exemplo.com",
        icon: FaHeadset,
      },
    ],
  },
];

export const DesktopNav = () => {
  const navigate = useNavigate();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const handleClick = (href) => {
    if (href.startsWith("/")) {
      // Navegar para a rota interna e rolar para o topo
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Lidar com links externos ou ações especiais
      window.location.href = href;
    }
  };

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} position="relative">
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"lg"}
                fontWeight={600}
                color={linkColor}
                position="relative"
                cursor="pointer" // Mostra a mãozinha
                _before={{
                  content: "''",
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  width: "100%",
                  height: "2px",
                  backgroundColor: linkHoverColor,
                  transform: "scaleX(0)",
                  transformOrigin: "bottom right",
                  transition: "transform 0.6s ease",
                }}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  _before: {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                }}
                transition={"all 0.3s ease"}
                onClick={() => handleClick(navItem.href)}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <Box
                      p={2}
                      fontSize={"lg"}
                      fontWeight={600}
                      color={linkColor}
                      display={"flex"}
                      alignItems={"center"}
                      position="relative"
                      cursor="pointer" // Mostra a mãozinha
                      _before={{
                        content: "''",
                        position: "absolute",
                        bottom: "-4px",
                        left: "0",
                        width: "100%",
                        height: "2px",
                        backgroundColor: linkHoverColor,
                        transform: "scaleX(0)",
                        transformOrigin: "bottom right",
                        transition: "transform 0.3s ease",
                      }}
                      _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                        _before: {
                          transform: "scaleX(1)",
                          transformOrigin: "bottom left",
                        },
                      }}
                      transition={"all 0.2s ease"}
                      onClick={() => handleClick(child.href)}
                      key={child.label}
                    >
                      <Icon as={child.icon} mr={2} /> {child.label}
                    </Box>
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
