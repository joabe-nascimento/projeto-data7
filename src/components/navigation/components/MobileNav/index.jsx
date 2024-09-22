import { Stack, useColorModeValue } from "@chakra-ui/react";
import { MobileNavItem } from "../MobileSubNav";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Serviços", href: "/services" },
  { label: "Produtos", href: "/products" },
  { label: "Contatos", href: "/contact" },
];

export const MobileNav = ({ onToggle }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      rounded={"15px 0px 15px"}
      mt={2}
      display={{ md: "none" }}
      spacing={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onToggle={onToggle} />
      ))}
    </Stack>
  );
};
