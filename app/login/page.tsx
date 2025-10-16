"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import bgimg from "../../assets/bgImage.png";
import logo from "../../assets/Logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }, []);

  const handleLogin = () => {
    const newErrors = { email: "", password: "" };
    let hasError = false;

    if (!email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      router.push("/phone-number");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src={bgimg}
        alt="Background"
        fill
        priority
        className="absolute inset-0 object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 -z-10" />

      <div className="w-full max-w-sm rounded-xl sm:bg-[#222B45]/90 py-12 px-8 text-center sm:shadow-2xl sm:backdrop-blur-md">
        <div className="mb-6 flex justify-center">
          <Image
            src={logo}
            alt="Logo"
            width={270}
            height={50}
            className="object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold text-white mb-1">Welcome</h2>
        <p className="text-gray-300 mb-6 text-base">
          The #1 Crypto IRA Platform in America
        </p>

        {/* Email Field */}
        <div className="relative mb-3">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            className={`peer w-full rounded-lg border-2 bg-transparent px-3 pt-5 pb-2 text-sm text-white outline-none transition-all
              ${
                errors.email
                  ? "border-red-500 placeholder-red-400 focus:border-red-500"
                  : "border-gray-400 focus:border-[#7EA842]"
              }`}
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={`absolute left-3 transition-all duration-200
              ${
                email || errors.email
                  ? "top-1 text-xs"
                  : "top-3.5 text-gray-400 text-sm"
              }
              ${
                errors.email
                  ? "text-red-500"
                  : "peer-focus:text-[#7EA842] text-gray-300"
              }`}
          >
            Email address
          </label>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password)
                setErrors((prev) => ({ ...prev, password: "" }));
            }}
            className={`peer w-full rounded-lg border-2 bg-transparent px-3 pt-5 pb-2 text-sm text-white outline-none transition-all
              ${
                errors.password
                  ? "border-red-500 placeholder-red-400 focus:border-red-500"
                  : "border-gray-400 focus:border-[#7EA842]"
              }`}
            placeholder=" "
          />
          <label
            htmlFor="password"
            className={`absolute left-3 transition-all duration-200
              ${
                password || errors.password
                  ? "top-1 text-xs"
                  : "top-3.5 text-gray-400 text-sm"
              }
              ${
                errors.password
                  ? "text-red-500"
                  : "peer-focus:text-[#7EA842] text-gray-300"
              }`}
          >
            Password
          </label>
          <button
            type="button"
            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-200 transition"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.password}
            </p>
          )}
        </div>

        <div className="text-left mb-6">
          <a
            href="#forgot"
            className="text-blue-400 text-sm hover:underline hover:text-blue-300"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className="w-full rounded-md bg-[#7EA842] py-2 font-semibold text-white hover:bg-[#6a9539] transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
