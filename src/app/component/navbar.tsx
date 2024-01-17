import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <Menubar className="p-8 w-full bg-white/20  backdrop-blur-lg drop-shadow-xl flex justify-between  border-white/20 border-4 rounded-xl ">
      <h1 className=" font-semibold text-xl text-white">File</h1>
      <div className=" flex gap-6 items-center  ">
        <h1 className=" font-semibold text-xl text-white">Login</h1>
        <Button
          variant="outline"
          className=" text-white text-xl  border-white border-2 bg-transparent"
        >
          Create Account
        </Button>
      </div>
    </Menubar>
  );
}

export default Navbar;
