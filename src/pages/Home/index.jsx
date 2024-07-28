"use client";

import HeroSection from "./components/Header";
import MainContent from "./components/Main";
import NavbarComponent from "./components/Navbar";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <MainContent />
    </>
  );
}
