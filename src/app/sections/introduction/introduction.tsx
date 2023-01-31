import { Header } from "../../components";
import React from "react";
import Image from "next/image";

export const IntroductionSection = () => {
  return (
    <>
      <Header />
      <div className="h-[90vh] md:h-[900px] bg-tertiary bg-img bg-[url('/assets/avatar.png')] bg-no-repeat bg-center bg-cover md:bg-contain relative overflow-hidden">
        <div className="h-full w-full md:w-[50.5%] bg-primary-light opacity-95 md:opacity-80 md:animate-bounce-finite md:translate-x-[100%] absolute top-0">
          <div className="h-full flex flex-col items-center justify-center ">
            <div>
              <p className="text-text-dark font-bold uppercase text-xs md:ml-3 animate-re-appear">
                need an awesome
              </p>
              <p className="text-text-dark font-thin uppercase text-6xl leading-[3.5rem] xl:text-8xl xl:leading-[5rem]">
                <span className=" block animate-appearSlideRight">
                  frontend
                </span>
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
    </>
  );
};
