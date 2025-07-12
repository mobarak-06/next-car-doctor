"use client"
import React from "react";

const LoginForm = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        <h1 className="text-5xl font-bold pb-6 text-center">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-[#FF3811]">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
