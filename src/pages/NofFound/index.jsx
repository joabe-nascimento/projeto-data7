import React from "react";

const UnderConstruction = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Em Construção</h1>
        <h2 style={styles.subtitle}>
          Estamos Trabalhando para Trazer Novidades
        </h2>
        <p style={styles.message}>
          O site está em construção. Estamos trabalhando duro para criar algo
          incrível. Por favor, volte mais tarde para conferir as atualizações!
        </p>
        <a href="/" style={styles.link}>
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "0 20px",
  },
  content: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "64px",
    margin: "0",
    color: "#ff6b6b",
  },
  subtitle: {
    fontSize: "24px",
    margin: "10px 0",
    color: "#333",
  },
  message: {
    fontSize: "18px",
    margin: "20px 0",
    color: "#666",
  },
  link: {
    fontSize: "16px",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default UnderConstruction;
