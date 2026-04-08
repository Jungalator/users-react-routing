import { useState } from "react";
import { useAuth } from "../hoc/AuthProvider";
import { useLocation, useNavigate } from "react-router";

export default function useSignIn(setErrorMessage) {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { login } = useAuth();

  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  const onChangeSignIn = (e) => {
    const { name, value } = e.target;
    setUserSignIn((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(userSignIn.email, userSignIn.password);
      navigate(fromPage, { replace: true });
    } catch (error) {
      error.message === "Firebase: Error (auth/invalid-credential)." &&
        setErrorMessage("Incorrect email or password");
    }
  };

  const resetSignInForm = () => {
    setUserSignIn({
      email: "",
      password: "",
    });
  };

  return [onChangeSignIn, handleSubmit, userSignIn, resetSignInForm];
}
