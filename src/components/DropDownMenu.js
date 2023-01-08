import React, { useState } from "react";
import Modal from "./Modal";
import { AiOutlinePlusCircle } from "react-icons/ai";

const DropDownMenu = (props) => {
  // const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <label htmlFor="formSelect" className="formLabel">
        {props.label}
      </label>
      <select
        id="formSelect"
        disabled={props.disable}
        name={props.name}
        className="formSelect"
      >
        <option>{props.optionItem}</option>
        {props.items?.map((item, index) => (
          <option className="formOption" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {!props.disable ? (
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
          className="plusCircle"
        >
          <AiOutlinePlusCircle size={"35px"} />
        </button>
      ) : (
        ""
      )}
      {isOpen ? (
        <Modal
          heading={props.label}
          setItems={props.setItems}
          setIsOpen={setIsOpen}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default DropDownMenu;
