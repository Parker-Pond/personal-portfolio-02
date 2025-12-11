import React, { useEffect } from "react";
import type { JSX } from "react";
import "./modal.css";

interface ModalProps {
  children?: any;
  modal: boolean;
  toggleModal: () => void;
}

export default function Modal({ children, modal, toggleModal }: ModalProps): JSX.Element | null {
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [modal]);

  if (!modal) return null;

  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          {children }
          <button className="close-modal" onClick={toggleModal}>
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
}
