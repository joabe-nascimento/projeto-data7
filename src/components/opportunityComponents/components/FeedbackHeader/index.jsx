import { Button, Heading, Stack, Text, Box, Badge, useColorModeValue, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Componentes com animação
const MotionStack = motion(Stack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBadge = motion(Badge);
const MotionButton = motion(Button);

const FeedbackHeader = () => {
  // Número de telefone e mensagem
  const whatsappNumber = "+5575999194533";
  const whatsappMessage = "Olá, gostaria de saber mais sobre seus serviços.";

  // Link para o WhatsApp com o número e a mensagem
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Cores dinâmicas baseadas no tema
  const accentColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("gray.700", "gray.100");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");

  return (
    <MotionStack
      spacing={{ base: 6, md: 8 }}
      w={"full"}
      maxW={"lg"}
      ml={{ base: 0, md: 12 }}
      mb={{ base: 6, md: 0 }}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Box>
        <MotionBadge
          colorScheme="blue" 
          fontSize={{ base: "sm", md: "md" }} 
          px={3} 
          py={1} 
          borderRadius="full"
          mb={3}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          SOLUÇÕES PERSONALIZADAS
        </MotionBadge>
        
        <MotionHeading 
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          mb={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text as="span" position="relative" zIndex={1} color={textColor}>
            Oportunidade de{" "}
            <Text 
              as="span" 
              color={accentColor}
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: `${accentColor}30`,
                zIndex: -1,
                borderRadius: "2px",
              }}
            >
              Serviços
            </Text>
          </Text>
        </MotionHeading>
        
        <MotionText
          fontSize={{ base: "md", md: "lg" }}
          color={subtitleColor}
          maxW="600px"
          mb={6}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Oferecemos soluções personalizadas para impulsionar seu negócio com tecnologia de ponta. 
          Nossa equipe especializada está pronta para atender às suas necessidades específicas.
        </MotionText>
      </Box>
      
      <MotionButton
        as="a"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        bg={accentColor}
        color={"white"}
        size="lg"
        fontSize={{ base: "md", md: "lg" }}
        px={8}
        py={7}
        rounded="full"
        rightIcon={<Icon as={FaArrowRight} />}
        _hover={{ 
          transform: "translateY(-5px)",
          boxShadow: "xl",
          bg: "blue.600"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        Fale Conosco
      </MotionButton>
    </MotionStack>
  );
};

export default FeedbackHeader;
