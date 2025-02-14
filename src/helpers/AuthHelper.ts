import { v4 as uuidv4 } from "uuid";
import { LoginType } from "../global/type";
import {
  InputRegisterText,
  InputTypeText,
  LabelText,
  PlaceholderText,
} from "../global/text";
import { emailIcon, eyeIcon, locIcon } from "../global/icons";

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
      type: InputTypeText.PASSWORD,
      icon: locIcon.lock,
      password_icon: isVisible ? eyeIcon.eye_on : eyeIcon.eye_off,
    },
  ];
};

export { LoginHelperFunction };
