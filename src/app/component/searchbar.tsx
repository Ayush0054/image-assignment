import React from "react";
import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import icon from "./public/searchnormal1.svg";
function Searchbar() {
  return (
    <Menubar className="p-8 bg-white/20 w-[900px] m-10  backdrop-blur-lg drop-shadow-xl flex justify-between  border-white/20 border-4 rounded-xl ">
      <div className=" flex items-center gap-3">
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Iconsax/Linear/searchnormal1">
            <path
              id="Vector"
              d="M19.9219 20.3906L18.1406 18.6094M10.5703 19.5C11.6814 19.5 12.7816 19.2812 13.8082 18.8559C14.8347 18.4307 15.7674 17.8075 16.5531 17.0218C17.3388 16.2362 17.962 15.3035 18.3872 14.2769C18.8124 13.2504 19.0312 12.1502 19.0312 11.0391C19.0312 9.92796 18.8124 8.82773 18.3872 7.8012C17.962 6.77467 17.3388 5.84195 16.5531 5.05628C15.7674 4.27061 14.8347 3.64738 13.8082 3.22218C12.7816 2.79697 11.6814 2.57812 10.5703 2.57813C8.32633 2.57813 6.17426 3.46954 4.58753 5.05628C3.00079 6.64301 2.10938 8.79508 2.10938 11.0391C2.10937 13.283 3.00079 15.4351 4.58753 17.0218C6.17426 18.6086 8.32633 19.5 10.5703 19.5Z"
              stroke="white"
              stroke-width="1.33594"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>

        <div className="border-l-2">
          <input
            className=" p-2 rounded-lg ml-2 placeholder-white font-semibold bg-transparent border-none outline-none   text-white "
            placeholder="Search"
          />
        </div>
      </div>
      <div className=" flex gap-6 items-center  ">
        <Button
          variant="outline"
          className=" text-white text-xl border-white border-2 bg-transparent"
        >
          GO!
        </Button>
      </div>
    </Menubar>
  );
}

export default Searchbar;
