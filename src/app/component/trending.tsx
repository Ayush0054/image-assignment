import { Menubar } from "@/components/ui/menubar";
import React from "react";

function Trending() {
  return (
    <div className=" p-1 bg-white/20 w-[400px] m-10  backdrop-blur-lg drop-shadow-xl flex gap-2  justify-center  border-white/20 border-4 rounded-xl ">
      <h1 className=" text-white font-semibold">Trending:</h1>
      <span className=" text-slate-100">flowers,love, forest,river</span>
    </div>
  );
}

export default Trending;
