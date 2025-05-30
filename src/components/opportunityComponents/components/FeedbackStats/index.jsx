import { Flex, Heading, Icon, Stack, Text, Box, useColorModeValue } from "@chakra-ui/react";
import { CheckCircleIcon, TimeIcon, AtSignIcon, StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

// Componentes com animação
const MotionStack = motion(Stack);
const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const FeedbackStats = () => {
  // Cores dinâmicas baseadas no tema
  const iconBgColor = useColorModeValue("blue.50", "blue.900");
  const iconColor = useColorModeValue("blue.500", "blue.300");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = useColorModeValue("blue.500", "blue.300");
  const highlightedCardBg = useColorModeValue("blue.50", "blue.900");

  // Dados dos stats
  const stats = [
    {
      icon: FaUserTie,
      title: "Atendimento Personalizado",
      description: "Foco total nas necessidades do cliente",
      delay: 0.2,
      isHighlighted: true,
      extendedDescription: "Cada cliente é único. Adaptamos nossas soluções para atender exatamente o que sua empresa precisa."
    },
    {
      icon: TimeIcon,
      title: "Anos de Experiência",
      description: "História marcada por qualidade e confiança",
      delay: 0.3,
    },
    {
      icon: AtSignIcon,
      title: "Padrão de Excelência",
      description: "Compromisso com resultados superiores",
      delay: 0.4,
    },
    {
      icon: StarIcon,
      title: "Avaliação de Clientes",
      description: "Confiança e satisfação garantidas",
      delay: 0.5,
    },
  ];

  return (
    <MotionFlex
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="space-evenly"
      p={{ base: 6, md: 8 }}
      gap={{ base: 8, md: 6 }}
      flexWrap={{ base: "wrap", xl: "nowrap" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {stats.map((stat, index) => (
        <MotionStack
          key={index}
          spacing={4}
          align="center"
          maxW={{ base: "full", md: "250px" }}
          bg={stat.isHighlighted ? highlightedCardBg : useColorModeValue("white", "gray.800")}
          p={6}
          borderRadius="xl"
          boxShadow={stat.isHighlighted ? "lg" : "md"}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: stat.delay }}
          whileHover={{ 
            y: -5,
            boxShadow: "xl",
            transition: { duration: 0.2 }
          }}
          border={stat.isHighlighted ? `1px solid ${accentColor}` : "none"}
          position="relative"
        >
          {stat.isHighlighted && (
            <Box 
              position="absolute" 
              top="-10px" 
              right="-10px"
              bg={accentColor} 
              color="white" 
              borderRadius="full" 
              fontSize="sm"
              px={3}
              py={1}
              fontWeight="bold"
            >
              Destaque
            </Box>
          )}
          
          <MotionBox
            bg={stat.isHighlighted ? accentColor : iconBgColor}
            p={3}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20, 
              delay: stat.delay + 0.1 
            }}
          >
            <Icon 
              as={stat.icon} 
              boxSize={{ base: 7, md: 9 }} 
              color={stat.isHighlighted ? "white" : iconColor} 
            />
          </MotionBox>
          
          <Heading 
            fontSize={{ base: "lg", md: "xl" }}
            color={headingColor}
            fontWeight="700"
            textAlign="center"
          >
            {stat.title}
          </Heading>
          
          <Text 
            color={textColor} 
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
          >
            {stat.description}
          </Text>

          {stat.extendedDescription && (
            <Text
              color={textColor}
              fontSize="sm"
              fontStyle="italic"
              textAlign="center"
              mt={2}
            >
              {stat.extendedDescription}
            </Text>
          )}
        </MotionStack>
      ))}
    </MotionFlex>
  );
};

export default FeedbackStats;
