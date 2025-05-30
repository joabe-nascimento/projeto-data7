import { Box, Flex, Text, Heading, Icon, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// Componentes com animação
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const AtendimentoPersonalizado = () => {
  // Cores dinâmicas baseadas no tema
  const iconBgColor = useColorModeValue("blue.50", "blue.900");
  const iconColor = useColorModeValue("blue.500", "blue.300");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("blue.500", "blue.300");

  return (
    <MotionBox
      bg={cardBg}
      borderRadius="lg"
      p={6}
      boxShadow="lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "xl",
        transition: { duration: 0.2 }
      }}
      border={`1px solid ${accentColor}`}
      position="relative"
      overflow="hidden"
    >
      {/* Elemento decorativo no canto superior */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="5px"
        height="50%"
        bg={accentColor}
        borderBottomRightRadius="md"
      />

      <Flex align="center" mb={4}>
        <MotionFlex
          bg={iconBgColor}
          p={3}
          borderRadius="full"
          mr={4}
          align="center"
          justify="center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20
          }}
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon as={FaCheckCircle} boxSize={6} color={iconColor} />
          </motion.div>
        </MotionFlex>
        
        <Heading 
          as="h3" 
          fontSize="xl" 
          fontWeight="700"
          color={headingColor}
        >
          Atendimento Personalizado
        </Heading>
      </Flex>
      
      <Text fontSize="md" color={textColor} ml={14}>
        Foco total nas necessidades do cliente, garantindo soluções sob medida para cada desafio.
        Nossa equipe está preparada para entender seu negócio e oferecer o melhor serviço.
      </Text>
      
      <Box mt={4} ml={14}>
        <Text fontSize="sm" fontWeight="500" color={accentColor}>
          Compromisso com sua satisfação
        </Text>
      </Box>
    </MotionBox>
  );
};

export default AtendimentoPersonalizado;