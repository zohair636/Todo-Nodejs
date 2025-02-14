import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="bg-custom-purple-900 text-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
