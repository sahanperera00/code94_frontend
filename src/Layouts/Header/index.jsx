import React, { useState } from "react";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="container mx-auto bg-[#] pt-14 flex justify-end items-center gap-5">
      <div className="relative flex items-center">
        <p className="uppercase font-bold">Admin</p>
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </Button>
        <Dropdown show={show} setShow={setShow} />
      </div>
      <div className="w-[58px] h-[58px] bg-[#001eb9] rounded-full relative">
        <div className="absolute bottom-1 right-1 w-[8px] h-[8px] bg-[#3df265] rounded-full"></div>
      </div>
    </div>
  );
}
