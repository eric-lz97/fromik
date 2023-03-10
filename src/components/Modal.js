import { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(value);
    props.setItems((prev) => [...prev, value]);
    props.setIsOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      <div className="darkBG" onClick={() => props.setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="formModal">
            <label className="heading">{props.heading}</label>
            <input
              value={value}
              id="mInput"
              onChange={handleChange}
              className="modalInput"
              name="mInput"
            />
            <button onClick={handleSave} className="saveBtn">
              Save
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
