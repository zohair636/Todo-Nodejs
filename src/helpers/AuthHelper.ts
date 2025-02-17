import { v4 as uuidv4 } from "uuid";
import { LoginType } from "../global/type";
import {
  InputRegisterText,
  InputTypeText,
  LabelText,
  PlaceholderText,
} from "../global/text";
import { emailIcon, eyeIcon, locIcon, userIcon } from "../global/icons";

const RegisterHelperFunction = (isVisible: boolean): LoginType[] => {
  return [
    {
      id: uuidv4(),
      label: LabelText.auth.FULL_NAME,
      register: InputRegisterText.FULL_NAME,
      placeholder: PlaceholderText.auth.FULL_NAME,
      type: InputTypeText.TEXT,
      icon: userIcon.user,
    },
    {
      id: uuidv4(),
      label: LabelText.auth.EMAIL,
      register: InputRegisterText.EMAIL,
      placeholder: PlaceholderText.auth.EMAIL,
      type: InputTypeText.EMAIL,
      icon: emailIcon.email,
    },
    {
      id: uuidv4(),
      label: LabelText.auth.PASSWORD,
      register: InputRegisterText.PASSWORD,
      placeholder: PlaceholderText.auth.PASSWORD,
      type: isVisible ? InputTypeText.TEXT : InputTypeText.PASSWORD,
      icon: locIcon.lock,
      password_icon: isVisible ? eyeIcon.eye_on : eyeIcon.eye_off,
    },
    {
      id: uuidv4(),
      label: LabelText.auth.CONFIRM_PASSWORD,
      register: InputRegisterText.CONFIRM_PASSWORD,
      placeholder: PlaceholderText.auth.CONFIRM_PASSWORD,
      type: isVisible ? InputTypeText.TEXT : InputTypeText.PASSWORD,
      icon: locIcon.lock,
      password_icon: isVisible ? eyeIcon.eye_on : eyeIcon.eye_off,
    },
  ];
};

const LoginHelperFunction = (isVisible: boolean): LoginType[] => {
  return [
    {
      id: uuidv4(),
      label: LabelText.auth.EMAIL,
      register: InputRegisterText.EMAIL,
      placeholder: PlaceholderText.auth.EMAIL,
      type: InputTypeText.EMAIL,
      icon: emailIcon.email,
    },
    {
      id: uuidv4(),
      label: LabelText.auth.PASSWORD,
      register: InputRegisterText.PASSWORD,
      placeholder: PlaceholderText.auth.PASSWORD,
      type: isVisible ? InputTypeText.TEXT : InputTypeText.PASSWORD,
      icon: locIcon.lock,
      password_icon: isVisible ? eyeIcon.eye_on : eyeIcon.eye_off,
    },
  ];
};

const ForgotPasswordHelperFunction = (isVisible: boolean): LoginType[] => {
  return [
    {
      id: uuidv4(),
      label: LabelText.auth.EMAIL,
      register: InputRegisterText.EMAIL,
      placeholder: PlaceholderText.auth.EMAIL,
      type: InputTypeText.EMAIL,
      icon: emailIcon.email,
    },
    {
      id: uuidv4(),
      label: LabelText.auth.PASSWORD,
      register: InputRegisterText.PASSWORD,
      placeholder: PlaceholderText.auth.PASSWORD,
      type: isVisible ? InputTypeText.TEXT : InputTypeText.PASSWORD,
      icon: locIcon.lock,
      password_icon: isVisible ? eyeIcon.eye_on : eyeIcon.eye_off,
    },
  ];
};

export {
  RegisterHelperFunction,
  LoginHelperFunction,
  ForgotPasswordHelperFunction,
};
