"use client";
import { Container } from "@chakra-ui/react";
import Cards from "../../../../components/cardsComponents";
import Contact from "../../../../components/connectmessageComponents";
import SectionAvaliacoes from "../../../../components/contactbackgroundComponents";
// Removendo a importação desnecessária do componente de navegação
import Feedback from "../../../../components/opportunityComponents";
import Avaliacoes from "../../../../components/ratingComponents";

const sections = [
  { component: Cards, maxW: "1200px", px: 4, py: 8 },
  { component: Contact, maxW: "100%", px: 0, py: 16 },
  { component: Feedback, maxW: "100%", px: 0, py: 16 },
  { component: Avaliacoes, maxW: "1200px", px: 4 },
  { component: SectionAvaliacoes, maxW: "100%", px: 0, py: 15 },
  // Removida a linha que causava a duplicação da navbar
];

const MainContent = () => (
  <>
    {sections.map(({ component: Component, maxW, px, py }, index) => (
      <Container key={index} maxW={maxW} px={px} py={py}>
        <Component />
      </Container>
    ))}
  </>
);

export default MainContent;
