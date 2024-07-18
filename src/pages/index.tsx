import Image from "next/image";
import localFont from "next/font/local";
import Clock from "@/components/Clock";
import WebContent from "@/components/WebContent";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";

const NeueMontreal = localFont({
  src: [
    {
      path: "../fonts/NeueMontreal/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NeueMontreal/NeueMontreal-Bold.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

const NavContent = ({
  setOpenNavMobile,
}: {
  setOpenNavMobile?: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (!router.isReady) return;

    setCurrentPath(router.asPath);
  }, [router.isReady, router]);

  return (
    <div
      className="flex flex-col side-menu sticky top-8"
      onClick={() => (setOpenNavMobile ? setOpenNavMobile(false) : {})}
    >
      <Link href="/">
        <div
          className={`side-menu--item pl-2 md:pl-0 ${
            currentPath === "/" ? "active" : ""
          }`}
        >
          home
        </div>
      </Link>
      <div className="side-menu--item pl-2 md:pl-0 cms">writing</div>
      <div className="side-menu--item pl-2 md:pl-0 cms">uniform</div>
      <Link href="#contact">
        <div
          className={`side-menu--item pl-2 md:pl-0 ${
            currentPath === "/#contact" ? "active" : ""
          }`}
        >
          contact
        </div>
      </Link>
    </div>
  );
};

export default function Home() {
  const [isOpenNavMobile, setOpenNavMobile] = useState(false);

  return (
    <main className={`${NeueMontreal.className}`}>
      <div className="container max-w-[1300px] mx-auto mb-10 md:my-10">
        <div className="grid grid-cols-1 md:grid-cols-12 relative">
          <div className="col-span-2 pl-0 md:pl-3 hidden md:block">
            <NavContent />
          </div>
          <div className="sticky top-0 z-10 flex flex-col md:hidden bg-[#fff] border-b-[1px]">
            <div className="flex justify-between items-center py-2 border-b-[1px] border-b-[#000] px-5">
              <div
                className="p-1 py-0 bg-[#000] text-[#fff] text-[14px]"
                onClick={() => setOpenNavMobile(!isOpenNavMobile)}
              >
                menu
              </div>
              <div className="flex justify-center item items-center gap-1 text-[12px]">
                <Image
                  src="/svg/eth.svg"
                  alt="eth_logo"
                  width={11}
                  height={11}
                />
                <Clock />
              </div>
            </div>
            {isOpenNavMobile && (
              <NavContent setOpenNavMobile={setOpenNavMobile} />
            )}
          </div>
          <div className="col-span-8 mx-auto flex flex-col items-center justify-center w-full uppercase content px-10 md:px-0">
            <WebContent />
          </div>
          <div className="col-span-2">
            <div className="justify-center item items-center gap-5 sticky top-8 clock hidden md:flex">
              <Image src="/svg/eth.svg" alt="eth_logo" width={23} height={23} />
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
