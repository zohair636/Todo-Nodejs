import { useMutation } from "@tanstack/react-query";
import { LoginApi, RegisterApi } from "../api/PostAPI";

export const useRegister = () => {
  const { mutate: registerMutation, isPending: registerPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: async ({
      fullName,
      email,
      password,
      confirmPassword,
    }: {
      fullName: string;
      email: string;
      password: string;
      confirmPassword: string;
    }) => {
      const response = await RegisterApi(
        fullName,
        email,
        password,
        confirmPassword
      );
      return response?.payload || {};
    },
  });

  return {
    registerMutation,
    registerPending,
  };
};

export const useLogin = () => {
  const { mutate: loginMutation, isPending: loginPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await LoginApi(email, password);
      return response?.payload || {};
    },
  });

  return {
    loginMutation,
    loginPending,
  };
};
