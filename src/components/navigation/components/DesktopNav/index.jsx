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
        href: "http://data7.ddns.com.br/glpi/",
        icon: FaHeadset,
      },
    ],
  },
];

export const DesktopNav = () => {
  const navigate = useNavigate();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  
  // Ajuste a transparência do fundo do Popover
  const popoverContentBgColor = useColorModeValue(
    "rgba(255, 255, 255, 0.9)", // Cor de fundo com mais opacidade para o modo claro
    "rgba(0, 0, 0, 0.9)"       // Cor de fundo com mais opacidade para o modo escuro
  );

  const handleClick = (href) => {
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
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
                p={1}
                fontSize={"md"}
                fontWeight={600}
                color={linkColor}
                position="relative"
                cursor="pointer"
                _before={{
                  content: "''",
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "100%",
                  height: "1px",
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
                bg={popoverContentBgColor} // Aplica a cor de fundo ajustada
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <Box
                      p={2}
                      fontSize={"md"}
                      fontWeight={600}
                      color={linkColor}
                      display={"flex"}
                      alignItems={"center"}
                      position="relative"
                      cursor="pointer"
                      _before={{
                        content: "''",
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                        width: "100%",
                        height: "1px",
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
