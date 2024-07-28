"use client";
import { Container } from "@chakra-ui/react";
import Cards from "../../../../components/cards";
import AboutSection from "../../../../components/about";
import Services from "../../../../components/services";
import Contact from "../../../../components/contact";

const MainContent = () => (
  <>
    <Container maxW={"1200px"} px={4} py={8}>
      <Cards />
    </Container>
    <Container maxW={"1200px"} px={4} py={8}>
      <AboutSection />
    </Container>
    <Container maxW={"1200px"} px={4} py={16}>
      <Services />
    </Container>
    <Container maxW={"100%"} px={0} py={16}>
      <Contact />
    </Container>
  </>
);

export default MainContent;
