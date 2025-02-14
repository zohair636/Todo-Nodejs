import React from "react";

const AuthButton = ({
  label,
  isLoading,
  className,
  onClick,
}: {
  label: string;
  isLoading: boolean;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {isLoading ? "" : label}
      </button>
    </div>
  );
};

export default AuthButton;
