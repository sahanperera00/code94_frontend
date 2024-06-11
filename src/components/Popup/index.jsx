import React from "react";
import Alert from "../../assets/icons/alert.svg";
import Button from "../Button";

export default function Popup({ show, setShow }) {
  return (
    <div
      className={`absolute w-screen h-screen bg-[#00000090] top-0 left-0 flex justify-center items-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="relative bg-white w-[32vw] h-[40vh] rounded-xl flex flex-col justify-center items-center gap-5">
        <img src={Alert} alt="Alert" className="w-15 h-15" />
        <p className="uppercase text-2xl font-semibold">Are you sure?</p>
        <p className="text-lg font-medium">
          You will not be able to undo this action if you proceed!
        </p>
        <div className="flex gap-5">
          <Button
            type="secondary"
            className="px-8 font-medium"
            onClick={() => {
              setShow(false);
            }}
          >
            Cancel
          </Button>
          <Button type="primary" className="px-8 font-medium">
            Delete
          </Button>
        </div>
        <Button
          className="absolute font-bold top-3 right-5"
          onClick={() => {
            setShow(false);
          }}
        >
          x
        </Button>
      </div>
    </div>
  );
}
