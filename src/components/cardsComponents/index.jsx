"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import assistentevirtual from "../../assets/assistente-virtual.gif";
import escudo from "../../assets/escudo.gif";
import html from "../../assets/html.gif";

// Componentes animados
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Card = ({
  heading,
  description,
  iconSrc,
  href,
  borderRadius,
  bgColor,
  textColor,
  showButton,
  minW,
  isCenterAligned,
  delay = 0,
  height,
}) => {
  return (
    <MotionBox
      maxW={{ base: "full", md: "275px" }}
      minW={minW}
      w={"full"}
      borderWidth="1px"
      rounded={borderRadius}
      overflow="hidden"
      p={6}
      bg={bgColor}
      border="1px solid rgba(255, 255, 255, 0.3)"
      boxShadow="lg"
      position="relative"
      zIndex={10} // Aumentado para garantir que fique em primeiro plano
      mx={0} // Remove margem automática para alinhamento correto
      height={height || { base: "auto", md: "360px" }} // Usa altura personalizada ou padrão
      display="flex"
      flexDirection="column"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      _hover={{ 
        transform: "translateY(-8px)",
        boxShadow: "xl",
        transition: "all 0.3s ease" 
      }}
    >
      <Stack align={"start"} spacing={4} textAlign="left" flex="1">
        {iconSrc && (
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            rounded={"full"}
            bg={useColorModeValue("blue.50", "blue.900")}
            border="none"
            boxShadow="md"
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Image src={iconSrc} alt={heading} boxSize="50px" objectFit="cover" />
            </motion.div>
          </Flex>
        )}
        <Box flex="1" display="flex" flexDirection="column">
          <Heading size="md" color={textColor} mb={4}>
            <Text as="span" whiteSpace="pre-wrap">
              {heading}
            </Text>
          </Heading>
          <Box
            textAlign="left"
            fontWeight={400}
            fontSize={"md"}
            color={textColor}
            opacity={0.9}
            flex="1" // Faz a descrição ocupar o espaço disponível
          >
            {description}
          </Box>
        </Box>
        {showButton && (
          <Button
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant={"solid"}
            colorScheme={"blue"}
            size={"md"}
            alignSelf="flex-start"
            bg="white"
            color="blue.400"
            rounded={"15px 0px 15px 0px"}
            px={6}
            mt="auto" // Coloca o botão no final do card
            _hover={{ bg: "gray.100", color: "blue.500", transform: "translateY(-2px)" }}
            transition="all 0.3s ease"
          >
            Clique aqui
          </Button>
        )}
      </Stack>
    </MotionBox>
  );
};

export default function GridListWith() {
  // Cores dinâmicas baseadas no tema
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const accentTextColor = useColorModeValue("blue.700", "blue.300");
  const accentColor = useColorModeValue("blue.500", "blue.300");

  // Dados dos cards principais
  const serviceCards = [
    {
      heading: "Suporte",
      iconSrc: assistentevirtual,
      description: "Nossa equipe de especialistas de suporte terá o prazer em responder a todas as suas perguntas e desejos em relação aos nossos serviços e produtos. Aqui está uma segunda linha de descrição.",
      borderRadius: "50px 0px 0px 0px",
      delay: 0.2,
    },
    {
      heading: "Segurança",
      iconSrc: escudo,
      description: "Implementamos medidas de segurança físicas para evitar sabotagem interna ou roubo de nossa infraestrutura, o que garante a entrega de serviços confiáveis e seguros a você. Aqui está uma segunda linha de descrição.",
      borderRadius: "0px",
      delay: 0.3,
    },
    {
      heading: "Desenvolvimento",
      iconSrc: html,
      description: "O principal objetivo é criar um processo que possa ser usado como modelo e facilmente replicado em outros departamentos ou divisões, em várias empresas e negócios.",
      borderRadius: "0px 0px 50px 0px",
      delay: 0.4,
    }
  ];

  return (
    <Box 
      p={{ base: 4, md: 0 }} 
      position="relative" 
      zIndex={10} // Aumentado para garantir que fique em primeiro plano
      mt={{ base: "-40px", md: "-60px", lg: "-150px" }} // Ajustado para posicionar corretamente
    >
      <Container maxW={"1400px"}>
        <Box position="relative">
          {/* Cards principais em grade - incluindo o Agendar uma Reunião na mesma linha */}
          <HStack
            spacing={{ base: 8, lg: 4 }} 
            alignItems="flex-start" // Alinha ao topo para melhor posicionamento
            width="full" 
            justifyContent="center"
            flexWrap={{ base: "wrap", lg: "nowrap" }}
          >
            {/* Coluna dos 3 cards principais */}
            <Box width={{ base: "100%", lg: "75%" }}>
              <HStack 
                spacing={0} 
                alignItems="stretch" 
                width="full"
                display={{ base: "flex", md: "flex" }}
                flexDirection={{ base: "column", md: "row" }}
              >
                {serviceCards.map((card, index) => (
                  <Box 
                    key={index} 
                    flex="1" 
                    minW={{ base: "100%", md: "0" }}
                  >
                    <Card
                      heading={card.heading}
                      iconSrc={card.iconSrc}
                      description={card.description}
                      href={"#"}
                      borderRadius={card.borderRadius}
                      bgColor={cardBg}
                      textColor={accentTextColor}
                      showButton={false}
                      delay={card.delay}
                    />
                  </Box>
                ))}
              </HStack>
            </Box>
            
            {/* Botão "Agendar uma Reunião" ao lado */}
            <Box 
              width={{ base: "100%", lg: "25%" }}
              display="flex"
              justifyContent="center"
              alignItems={{ base: "center", lg: "flex-start" }}
              mt={{ base: 0, lg: "30px" }} // Ajuste fino para alinhar verticalmente
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                width={{ base: "250px", md: "250px" }}
                zIndex={10} // Garantindo que fique em primeiro plano
              >
                <Card
                  heading={
                    <Text as="span" textAlign={"left"}>
                      Agendar uma
                      <br />
                      Reunião
                    </Text>
                  }
                  href={"https://meet.google.com/your-meet-id"}
                  borderRadius={"30px 0px 30px 0px"}
                  bgColor={accentColor}
                  textColor="white"
                  description=""
                  showButton={true}
                  isCenterAligned={true}
                  height={{ base: "auto", md: "220px" }} // Altura menor para este card
                />
              </MotionBox>
            </Box>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
