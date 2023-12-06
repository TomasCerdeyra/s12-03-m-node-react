import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { Button, Tooltip } from "@nextui-org/react";
import TooltipContent from "./TooltipContent";
function IconTooltip({ labelTitle, data }) {
  return (
    <>
      <section className="flex gap-2">
        <p>{labelTitle}</p>
        <Tooltip
          showArrow
          placement="right"
          content={<TooltipContent labelTitle={labelTitle} data={data} />}
          classNames={{
            base: [
              // arrow color
              "before:bg-neutral-400 dark:before:bg-white",
            ],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black  bg-moradoActivo",
            ],
          }}
    
        >
          <button>
            <IoIosInformationCircle />
          </button>
        </Tooltip>
      </section>
    </>
  );
}
export default IconTooltip;
