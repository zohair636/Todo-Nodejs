import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginHelperFunction } from "../../helpers/AuthHelper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthButton from "../Buttons/AuthButton";
import { ButtonText } from "../../global/text";
import { LoginData } from "../../global/type";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/TanstackQueryHook";

const schema = z.object({
  email: z.string().email("Please enter valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userLogin = LoginHelperFunction(showPassword);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { loginMutation, loginPending } = useLogin();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: LoginData) => {
    const email = data.email;
    const password = data.password;
    loginMutation({ email, password });
  };

  return (
    <div className="mt-4">
      {userLogin.map((item) => (
        <form
          key={item.register}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col my-1"
        >
          <label className="text-sm font-[Inter-Regular]">{item.label}</label>
          <div className="flex justify-between items-center border border-secondary rounded-lg p-2 my-1 w-96">
            <div className="flex items-center gap-1">
              <p className="text-secondary mx-1">{item.icon}</p>
              <input
                {...register(item.register as "email" | "password", {
                  required: true,
                })}
                placeholder={item.placeholder}
                type={item.type}
                className="outline-0 bg-transparent w-full"
              />
            </div>
            <p
              onClick={handleShowPassword}
              className="text-secondary cursor-pointer mx-2"
            >
              {item.password_icon}
            </p>
          </div>
          {errors[item.register as "email" | "password"] && (
            <p className="text-red-600 text-xs">
              {errors[item.register as "email" | "password"]?.message}
            </p>
          )}
        </form>
      ))}
      {/* forgot password button */}
      <Link to="/forgot-password">
        <AuthButton
          label={ButtonText.auth.FORGOT_PASSWORD}
          className="text-white text-sm float-right font-[Inter-Regular] rounded-lg hover:underline duration-200 mt-2 cursor-pointer"
        />
      </Link>
      {/* login button */}
      <AuthButton
        label={ButtonText.auth.LOGIN}
        isLoading={loginPending}
        onClick={handleSubmit(onSubmit)}
        className="bg-custom-purple-800/60 hover:bg-custom-purple-800/70 text-white font-[Inter-Regular] w-full rounded-lg p-2 mt-3 duration-200 cursor-pointer"
      />
      {/* register button */}
      <Link to="/auth/register">
        <AuthButton
          label={ButtonText.auth.REGISTER_FOLLOW_ON}
          className="text-white text-sm text-center font-[Inter-Regular] w-full rounded-lg duration-200 mt-3 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default LoginForm;
