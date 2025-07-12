import Link from "next/link";
import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left">
            <img src="/assets/images/login/login.svg" alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
            <RegisterForm />
            <p className="text-center pb-4">
              Already have an account?{" "}
              <Link href="/login" className="text-[#FF3811]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
