import React from "react";
import "./modal.css";
import { ImCross } from "react-icons/im";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal_Background">
      <div className="modalContainer">
        <button className="closemodelButton" onClick={() => closeModal(false)}>
          <ImCross />
        </button>
        <h1 className="modal_heading">Add Coupon</h1>

        <form>
          <div className="modal_inputfeild">
            <label htmlFor="store name">Store Name:</label>
            <input type="text" placeholder="Store Name" />
          </div>
          <div className="modal_inputfeild">
            <label htmlFor="store title">Store Title:</label>
            <input type="text" placeholder="Store Title" />
          </div>
          <div className="modal_inputfeild">
            <label htmlFor="store description">Store Description:</label>
            <textarea rows="3">Store Description</textarea>
          </div>
          <div className="modal_inputfeild">
            <label htmlFor="store name">Store Image:</label>
            <input type="date" placeholder="Store Image" />
          </div>
          <div className="modal_inputfeild">
            <label htmlFor="store name">Store Image:</label>
            <input type="file" placeholder="Store Image" />
          </div>
          <div className="modal_inputfeild">
            <label htmlFor="store url">Store URL:</label>
            <input type="url" placeholder="Store URL" />
          </div>

          <div className="modalButtons">
            <button>Add Coupon</button>
            <button onClick={() => closeModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
