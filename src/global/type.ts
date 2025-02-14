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
