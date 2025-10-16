"use client";

import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import bgimg from "../assets/bgImage.png";
import logo from "../assets/Logo.png";
import signupImg from "../assets/signInImg.png";

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-between min-h-screen w-full overflow-hidden"
    >
      <Image
        src={bgimg}
        alt="Background pattern"
        fill
        priority
        quality={100}
        className="absolute inset-0 -z-10 object-cover"
      />

      <div className="absolute inset-0 -z-10" />

      <header role="banner" className="w-full flex justify-center pt-6">
        <div className="relative w-52 h-12 md:w-72">
          <Image
            src={logo}
            alt="iTrustCapital Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      <section className="relative mx-auto mt-6 flex max-w-md items-center justify-center px-4 pb-3 sm:bg-[#8f9bb37a] backdrop-blur-md rounded-xl shadow-md sm:w-full">
        <div className="max-w-sm w-full py-8 text-center space-y-4 relative">
          <div
            className="pointer-events-none absolute -right-24 top-0 h-full w-72 rotate-[20deg] bg-[color:var(--brand-800)]/30 blur-[0.5px]"
            aria-hidden
          />

          <div className="relative mx-auto mt-2 mb-6 h-52 w-52">
            <Image
              src={signupImg}
              alt="App preview on phone"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          <h2 className="text-base font-semibold text-white">
            Welcome to iTrustCapital
          </h2>
          <p className="text-sm text-white">
            The #1 Crypto IRA Platform in <br /> America
          </p>

          <p className="px-4 text-sm text-white">
            By accessing the platform, you agree to our{" "}
            <a
              href="#tos"
              className="font-medium underline underline-offset-2 text-blue-300"
            >
              Terms of Service
            </a>
            .
          </p>

          <div className="mx-auto mt-4 flex max-w-xs flex-col gap-3 w-[230px]">
            <button
              type="button"
              className="h-10 rounded-lg bg-[#7AB4FB] text-white transition hover:bg-[#6aa0e6]"
              aria-label="Log in to your account"
              onClick={() => router.push("/login")}
            >
              Log In
            </button>
            <button
              type="button"
              className="h-10 rounded-lg bg-[#7EA842] text-white transition hover:bg-[#6d9339]"
              aria-label="Create a new account"
            >
              Open Account
            </button>
          </div>

          <p className="pt-1 text-xs text-gray-200 flex gap-1 items-center justify-center">
            Need a new verification email?{" "}
            <a
              className="text-blue-300 underline underline-offset-2 hover:text-blue-400"
              href="#resend"
            >
              Click here to resend.
            </a>
          </p>
        </div>
      </section>

      <footer
        role="contentinfo"
        className="text-center text-xs text-gray-400 space-y-1 mt-10 mb-20"
      >
        <p className="opacity-80">Copyright © 2025 ITC 2.0</p>
        <p className="opacity-70">
          <a
            className="underline underline-offset-2 hover:text-gray-200"
            href="#terms"
          >
            Terms
          </a>{" "}
          |{" "}
          <a
            className="underline underline-offset-2 hover:text-gray-200"
            href="#privacy"
          >
            Privacy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
