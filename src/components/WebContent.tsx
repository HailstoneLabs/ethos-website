import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Anchor from "./common/Anchor";

type Props = {};

const PixelFont = localFont({
  src: [
    {
      path: "../fonts/00BusinessHistory/00BusinessHistory-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function WebContent({}: Props) {
  return (
    <>
      <div className="py-[30px] pb-[80px] px-[50px] md:py-[100px] md:px-[80px]">
        <Image src="/svg/logo.svg" alt="ethos_logo" width={460} height={173} />
      </div>
      <div className="flex flex-col gap-6 md:max-w-[450px] lg:max-w-[620px]">
        <div className="flex flex-col gap-2">
          <h5 className="font-[500] text-[18px] md:text-[20px]">MISSION</h5>
          <p className="text-[14px] md:text-[20px]">
            To convey the spirit of companies reshaping the future of the
            internet.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-[500] text-[18px] md:text-[20px]">INFORMATION</h5>
          <p className="text-[14px] md:text-[20px]">
            Ethos is a marketing agency specializing in 0 to 1 marketing for
            web3 teams. When you work with us, you onboard a CMO and their team,
            and gain access to all of their capabilities, resources, and
            connections from working with 8+ web3 venture teams spanning a wide
            array of sectors, including L1 blockchains, Defi, AI, zero knowledge
            cryptography, and gaming.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-[500] text-[18px] md:text-[20px]">
          <p className="link-ud">
            Click 
            <Link
              href="https://i.kym-cdn.com/photos/images/original/002/210/781/82b.jpg"
              target="_blank"
            >
              here
            </Link>
             for more info
          </p>
        </div>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center font-[500] text-[18px] md:text-[24px]">
          <Anchor id="contact" />
          <div>
            <div className={`${PixelFont.className} text-[#1418FF]`}>
              <Link href="mailto:contact@3thos.xyz" className="">
                CONTACT@3THOS.XYZ
              </Link>
            </div>
            <div>LOCATION: ON_CHAIN</div>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <Link href="https://x.com/ethos_xyz" target="_blank">
              <Image src="/svg/x.svg" alt="x_svg" width={36} height={36} />
            </Link>
            <Link
              href="https://mirror.xyz/0x87B1fE8d775BE84A463BcD0386a05697dF052807"
              target="_blank"
            >
              <Image src="/svg/sc.svg" alt="sc_svg" width={36} height={36} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full my-10 gap-4 info md:mt-32">
        <div className="info-row text-[14px] md:text-[16px] lg:text-[20px]">
          <div className="info-row--left">ID</div>
          <div className="info-row--right">3THOS.XYZ</div>
        </div>
        <div className="info-row text-[14px] md:text-[16px] lg:text-[20px]">
          <div className="info-row--left">DEPARTMENT</div>
          <div className="info-row--right">MARKETING ABSTRACTION</div>
        </div>
        <div className="info-row text-[14px] md:text-[16px] lg:text-[20px]">
          <div className="info-row--left">TYPE</div>
          <div className="info-row--right">FULL STACK</div>
        </div>
        <div className="info-row text-[14px] md:text-[16px] lg:text-[20px]">
          <div className="info-row--left">LOCATION</div>
          <div className="info-row--right">ON_CHAIN</div>
        </div>
        <div className="info-row text-[14px] md:text-[16px] lg:text-[20px]">
          <div className="info-row--left">MADE WITH</div>
          <div className="info-row--right">
            <p>80% gm</p>
            <p>12% “STORYTELLING”</p>
            <p>5% TWITTER DOOM SCROLLING</p>
            <p>2% IT’S SO OVER / WE’RE SO BACK</p>
            <p>1% “ETH ALIGNED”</p>
          </div>
        </div>
        <div className="info-row md:mt-5 text-[14px] md:text-[16px] lg:text-[20px]">
          <div className="info-row--left">CLIENTS</div>
          <div className="info-row--right flex flex-col gap-2 md:gap-5">
            <p>MICHAEL EGOROV “INSPIRED” DEFI PROTOCOL</p>
            <p>FIRST <span className="line-through">REDACTED</span> ON SOLANA</p>
            <p>CHIP COMPANY (NOT POTATO)</p>
            <p>THE FASTEST ZKVM</p>
            <p>“first principles” crypto vc</p>
            <p>talent platform, but web 3</p>
            <p className="text-[#1418FF]">and more.</p>
          </div>
        </div>
      </div>
    </>
  );
}
