import axios from "axios";

export const RegisterApi = async (
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const apiUrl = `${import.meta.env.VITE_BASE_URL}/login`;
    const headers = {
      "Content-Type": "application/json",
    };
    const params = {
      fullName,
      email,
      password,
      confirmPassword,
    };
    const response = await axios.post(apiUrl, params, { headers });
    const { payload } = response.data;

    return {
      payload,
    };
  } catch (error) {
    console.log(error);
  }
};

export const LoginApi = async (email: string, password: string) => {
  try {
    const apiUrl = `${import.meta.env.VITE_BASE_URL}/login`;
    const headers = {
      "Content-Type": "application/json",
    };
    const params = {
      email,
      password,
    };
    const response = await axios.post(apiUrl, params, { headers });
    const { payload } = response.data;

    return {
      payload,
    };
  } catch (error) {
    console.log(error);
  }
};
