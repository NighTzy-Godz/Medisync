import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserLogin } from "@/interfaces/user_interfaces";
import InputError from "@/components/ui/input_error";
import { toast } from "sonner";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();

  const handleFormSubmit = (data: UserLogin) => {
    toast.success("Login successful", {
      position: "top-center",
      duration: 3000,
    });
  };

  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="w-full sm:w-3/5 md:w-1/2 xl:w-2/5 2xl:w-1/3 mx-auto">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            <Link to="/" className=" flex items-center gap-1 text-gray-500">
              <IoIosArrowRoundBack className="text-2xl text-gray-500" />
              Back
            </Link>
          </div>
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
            <h1 className="mb-1 text-3xl text-gray-700">Sign in</h1>
            <p className="text-lg text-gray-500">
              Login here to access you account's information.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="grid w-full items-center gap-1.5 mb-5">
              <Label className="text-gray-500 text-base" htmlFor="email">
                E-mail
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                hasError={errors?.email}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is a required field",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email must be valid",
                  },
                  minLength: {
                    value: 5,
                    message: "Email must be at least 5 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Email must not exceed 100 characters",
                  },
                })}
              />
              {errors?.email && (
                <InputError msg={errors.email.message ?? "Invalid email"} />
              )}
            </div>
            <div className="grid w-full items-center gap-1.5 mb-3">
              <div className="flex justify-between w-full">
                <Label className="text-gray-500 text-base" htmlFor="password">
                  Password
                </Label>
                <Link
                  to="#"
                  className="text-blue-500 hover:underline font-sf_reg text-sm"
                >
                  Forgot password?
                </Link>
              </div>

              <Input
                type="password"
                id="password"
                placeholder="**********"
                hasError={errors?.password}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required field",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors?.password && (
                <InputError
                  msg={errors.password.message ?? "Invalid Passowrd"}
                />
              )}
            </div>
            <div className="items-center flex space-x-1 mb-5">
              <Checkbox className="w-5 h-5" id="terms1" />

              <Label className="text-lg text-gray-500">Remember Me</Label>
            </div>

            <div className="mb-2">
              <Button className="w-full h-10" variant="main">
                Sign In
              </Button>
            </div>
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
