import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import {
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios"; // Importando axios

export default function FeedbackButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      alert("Por favor, digite seu feedback antes de enviar.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/api/feedback", {
        feedback: feedback.trim(),
      });

      console.log("Feedback enviado:", response.data);
      setFeedback(""); // Limpa o feedback após o envio
      onClose();
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
    }
  };

  return (
    <>
      <IconButton
        icon={<FaCommentDots />}
        onClick={onOpen}
        style={styles.floatingButton}
        aria-label="Open Feedback Modal"
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deixe o seu feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Digite seu feedback aqui..."
              size="md"
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Enviar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
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
  },
};
