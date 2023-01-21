import { Header } from "../../components";
import React from "react";
import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <div className="h-[900px] bg-tertiary bg-img bg-[url('/assets/avatar.png')] bg-no-repeat bg-center bg-contain overflow-x-hidden">
      <Header />

      <div className="h-full w-[50.5%] bg-primary-light opacity-80 animate-bounce-finite translate-x-[100%]">
        <div className="h-full flex flex-col items-center justify-center ">
          <div>
            <p className="text-text-dark font-bold uppercase text-xs ml-3 animate-re-appear">
              need an awesome
            </p>
            <p className="text-text-dark font-thin uppercase text-9xl leading-[6.5rem]">
              <span className=" block animate-appearSlideRight">frontend</span>
              <span className="block animate-appearSlideToLeft">
                developer?
              </span>
            </p>
            <Image
              width={250}
              height={250}
              alt="signature"
              src="/assets/signature.png"
              className="h-48 object-cover animate-re-appear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
