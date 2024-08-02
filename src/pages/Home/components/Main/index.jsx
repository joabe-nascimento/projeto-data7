"use client";
import { Container } from "@chakra-ui/react";
import AboutSection from "../../../../components/about";
import Avaliacoes from "../../../../components/avaliacoes";
import Cards from "../../../../components/cards";
import Contact from "../../../../components/contact";
import SectionAvaliacoes from "../../../../components/faleconoscosecond";
import Feedback from "../../../../components/feedback";
import Services from "../../../../components/services";
import Footer from "../Footer";
import ContactFormWithSocialButtons from "../../../../components/formcontact";

const sections = [
  { component: Cards, maxW: "1200px", px: 4, py: 8 },
  { component: AboutSection, maxW: "1200px", px: 4, py: 8 },
  { component: Services, maxW: "1200px", px: 4, py: 16 },
  { component: Contact, maxW: "100%", px: 0, py: 16 },
  { component: Feedback, maxW: "100%", px: 0, py: 16 },
  { component: Avaliacoes, maxW: "1200px", px: 4 },
  { component: SectionAvaliacoes, maxW: "100%", px: 0, py: 16 },
  { component: ContactFormWithSocialButtons, maxW: "100%", px: 0, py: 15 },
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
