// @ts-nocheck 
import { createContext, useState } from "react";

const ModalContext = createContext(
  {
    activeWindow:0
  }
);
const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState(1);
  const [data, setData] = useState(null);
  const [newZone, setNewZone] = useState(null);
  const [newElement, setNewElement] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const changeWindow = (window) => {
    setActiveWindow(window);
  };

  const updateData = (data) => {
    setData(data);
  };
  const addZoneData = (data) => {
    setNewZone(data);
  };

  const addNewElement = (data) => {
    setNewElement(data);
  };
  const contextValue = {
    isModalOpen,
    showModal,
    closeModal,
    changeWindow,
    activeWindow,
    updateData,
    data,
    addZoneData,
    newZone,
    addNewElement,
    newElement,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
