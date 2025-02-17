import { JSX } from "react";

export type LoginType = {
  id: string;
  label: string;
  register: string;
  placeholder: string;
  type: string;
  icon?: JSX.Element;
  password_icon?: JSX.Element;
};

export type RegisterData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};
