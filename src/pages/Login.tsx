import LoginForm from "../components/Forms/LoginForm";
import { HeadingText } from "../global/text";

const Login = () => {
  return (
    <>
      <h1 className="text-xl text-center font-[Inter-Medium]">{HeadingText.auth.LOGIN_WELCOME}</h1>
      <p className="text-sm text-secondary text-center">{HeadingText.auth.LOGIN_DESCRIPTION}</p>
      <LoginForm />
    </>
  );
};

export default Login;
