import RegisterForm from "../components/Forms/RegisterForm";
import { HeadingText } from "../global/text";

const Register = () => {
  return (
    <>
      <h1 className="text-xl text-center font-[Inter-Medium]">
        {HeadingText.auth.REGISTER_WELCOME}
      </h1>
      <p className="text-sm text-secondary text-center">
        {HeadingText.auth.REGISTER_DESCRIPTION}
      </p>
      <RegisterForm />
    </>
  );
};

export default Register;
