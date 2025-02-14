import LoginForm from "../components/Forms/LoginForm";
import { HeadingText } from "../global/text";

const Login = () => {
  return (
    <>
      <h1>{HeadingText.auth.LOGIN_WELCOME}</h1>
      <p>{HeadingText.auth.LOGIN_DESCRIPTION}</p>
      <LoginForm />
    </>
  );
};

export default Login;
