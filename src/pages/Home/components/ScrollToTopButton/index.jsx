// components/ScrollToTopButton.js
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      icon={<FaArrowUp />}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      style={styles.floatingButton}
    />
  );
};

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    width: "50px",
    height: "50px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "24px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000, // Adicionado zIndex para garantir que o botão esteja no topo
  },
};

export default ScrollToTopButton;
