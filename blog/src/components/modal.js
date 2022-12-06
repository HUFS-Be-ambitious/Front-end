import React from "react";
 
function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          좋았어요
        </button>
        <button id="modalCloseBtn" onClick={closeModal}>
          보통이에요
        </button>
        <button id="modalCloseBtn" onClick={closeModal}>
          싫었어요
        </button>
        {props.children}
      </div>
    </div>
  );
}
 
export default Modal;
