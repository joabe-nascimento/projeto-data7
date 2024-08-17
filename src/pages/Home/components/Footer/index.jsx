import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import data71 from "../../../../assets/data71.png";

const Logo = (props) => {
  return <img src={data71} alt="Logo" width={180} height={45} {...props} />;
};

const NAV_ITEMS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Serviços", href: "/services" },
  { label: "Contatos", href: "/contact" },
];

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("#001F3F", "#001F3F")}
      color="gray.200"
      py={12}
      px={6}
      mt={20}
    >
      <Container maxW="container.xl">
        <Stack align="center" mb={10}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Site Institucional
          </Text>
        </Stack>

        <SimpleGrid columns={[1, 3, 3]} spacing={10} mb={10}>
          {/* Seção de Links Rápidos */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color="white">
              Links Rápidos
            </Text>
            {NAV_ITEMS.map((navItem) => (
              <Link
                key={navItem.label}
                href={navItem.href}
                fontSize="md"
                _hover={{ color: "cyan.400", textDecoration: "none" }}
                transition="color 0.3s ease"
              >
                {navItem.label}
              </Link>
            ))}
          </Stack>

          {/* Seção de Contato */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color="white">
              Contato
            </Text>
            <Text fontSize="md">Telefone: +55 75 99919-4533</Text>
            <Text fontSize="md">Email: geovan.bastos@data7ti.com.br</Text>
            {/* <Text fontSize="md">Endereço: Rua Exemplo, 123 - São Paulo, SP</Text> */}
          </Stack>

          {/* Seção de Horário de Funcionamento */}
          <Stack spacing={4}>
            <Text fontSize="lg" fontWeight="bold" color="white">
              Horário de Funcionamento
            </Text>
            <Text fontSize="md">Segunda a Sexta: 8:00 - 18:00</Text>
            <Text fontSize="md">Sábado: 8:00 - 12:00</Text>
            <Text fontSize="md">Domingo: Fechado</Text>
          </Stack>
        </SimpleGrid>

        <Divider borderColor="gray.600" mb={8} />

        {/* Logo e Direitos Autorais */}
        <Stack spacing={4} align="center">
          <Logo />
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Data7. Todos os direitos reservados.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
