import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

const ModalContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => setIsOpen(!isOpen);

  return (
    <ModalContext.Provider value={{ isOpen, onToggleModal }}>{children}</ModalContext.Provider>
  );
};

const ModalButton = ({ children }) => {
  const { onToggleModal } = useContext(ModalContext);

  return <div onClick={onToggleModal}>{children}</div>;
};

const ModalContent = () => {
  const { isOpen } = useContext(ModalContext);

  return isOpen ? <div>hell0 wor1d!</div> : null;
};

const Container = ModalContainer;
const Button = ModalButton;
const Content = ModalContent;

export { Container, Button, Content };
