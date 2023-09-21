import React from "react";

export const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col h-[1013px] items-start justify-around gap-[10px] relative bg-[#111111]">
      <div className="absolute w-[182px] h-[29px] top-[239px] left-[98px] bg-[#79a779]" />
      <div className="absolute w-[157px] top-[241px] left-[112px] [font-family:'Inconsolata-Regular',Helvetica] font-normal text-[#fcfcfb] text-[18px] tracking-[4.32px] leading-[22.7px]">
        HI! EVERYONE
      </div>
      <div className="inline-flex flex-col h-[507px] items-start justify-center gap-[41px] px-[100px] py-0 relative">
        <div className="relative w-fit [font-family:'Noto_IKEA_Latin-Bold',Helvetica] font-bold text-[#fcfcfb] text-[108px] tracking-[-4.32px] leading-[119.9px]">
          Architecture
          <br />
          playground
        </div>
        <p className="relative self-stretch [font-family:'Noto_IKEA_Latin-Regular',Helvetica] font-normal text-[#fcfcfb] text-[24px] tracking-[0.48px] leading-[47.5px]">
          Hej! This is my playground space where I will play with different aspects of my passions. Which happily
          coincide with my job.
        </p>
      </div>
    </div>
  );
};