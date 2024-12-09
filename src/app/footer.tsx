import React from "react";

export const Footer = (): JSX.Element => {
  return (
    <div className="flex flex-col h-[84px] items-start justify-between relative">
      <div className="relative self-stretch w-full h-[150px] mr-[-2.00px]">
        <div className="relative w-[2014px] h-[150px] bg-[#1a1a1a]">
          <p className="absolute w-[356px] top-[57px] left-[1321px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#8c8c8c] text-[17px] tracking-[0.34px] leading-[36.1px]">
            L3M 20203
          </p>
        </div>
      </div>
    </div>
  );
};
