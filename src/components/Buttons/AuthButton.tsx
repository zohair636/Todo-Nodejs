import { SubmitLoader } from "../Loader";

const AuthButton = ({
  label,
  isLoading,
  className,
  onClick,
}: {
  label: string;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className={className}>
      {isLoading ? <SubmitLoader /> : label}
    </button>
  );
};

export default AuthButton;
