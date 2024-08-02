import FeedbackButton from "./components/FeedbackStates";
import Footer from "./components/Footer";
import HeroSection from "./components/Header";
import MainContent from "./components/Main";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainContent />
      <Footer />
      <FeedbackButton /> {/* Usar o FeedbackButton */}
    </>
  );
}
