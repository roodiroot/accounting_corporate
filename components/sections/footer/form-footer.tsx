"use client";

import { useState } from "react";

import { Icons } from "@/components/icons";
import InputPhoneMask from "@/components/ui/input-phone-mask";

const FormFooter = () => {
  const [phone, setPhone] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(phone);
        setPhone("");
      }}
      className="w-full max-w-sm h-12 rounded-full bg-[#3D3C3A] overflow-hidden flex items-center pr-2 py-3"
    >
      <InputPhoneMask
        setValue={setPhone}
        value={phone}
        className="pl-7 border-none outline-none h-full bg-inherit flex-1 text-white placeholder:text-[#636363]"
      />
      <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
        <Icons.link className=" stroke-primary" />
      </button>
    </form>
  );
};

export default FormFooter;
