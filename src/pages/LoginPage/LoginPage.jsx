import s from "./LoginPage.module.css";
// import { useLocation, useNavigate } from "react-router";
// import { useAuth } from "../../hoc/AuthProvider";
import { useState } from "react";
import { Auth } from "./Auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
import useSignIn from "../../hooks/useSignIn";
import Loader from "../../components/ui";
import useSignUp from "../../hooks/useSignUp";

export const LoginPage = () => {
  const [tabName, setTabName] = useState("sign");
  // const [userSignUp, setUserSignUp] = useState({
  //   login: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   name: "",
  // });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [onChangeSignIn, handleSubmit, userSignIn, resetSignInForm] =
    useSignIn(setErrorMessage);
  const [onChangeSign, signUpSubmit, resetSignUpForm, userSignUp] = useSignUp(
    setErrorMessage,
    setIsLoading
  );
  // const [userSignIn, setUserSignIn] = useState({
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();
  // const location = useLocation();
  // const fromPage = location.state?.from?.pathname || "/";
  // const { login } = useAuth();

  const visiblePassword = () => {
    setIsVisible((prev) => !prev);
  };

  // const onChangeSign = (e) => {
  //   const { name, value } = e.target;
  //   setUserSignUp((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const onChangeSignIn = (e) => {
  //   const { name, value } = e.target;
  //   setUserSignIn((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await login(userSignIn.email, userSignIn.password);
  //     navigate(fromPage, { replace: true });
  //   } catch (error) {
  //     error.message === "Firebase: Error (auth/invalid-credential)." &&
  //       setErrorMessage("Incorrect email or password");
  //   }
  // };

  // const signUpSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name } = e.target;
  // try {
  //   const response = await fetch(
  //     "https://67f80d0c2466325443ebae62.mockapi.io/users",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userSignUp),
  //     }
  //   );

  //   if (!response.ok) {
  //     throw new Error(`HTTP error status! status: ${response.status}`);
  //   }
  //   const data = await response.json();
  //   console.log(data);
  // } catch (error) {
  //   console.log("Ошибка: ", error);
  // }

  //   createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
  //     .then(() => setIsLoading(true))
  //     .then(() => {
  //       setUserSignUp({
  //         login: "",
  //         email: "",
  //         phone: "",
  //         password: "",
  //         name: "",
  //       });
  //     })
  //     .catch((error) => {
  //       error.message === "Firebase: Error (auth/email-already-in-use)." &&
  //         setErrorMessage("Password or email is alrady in use");
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  const toggleActiveTab = (tabId) => {
    setTabName(tabId);
    setErrorMessage("");
    resetSignUpForm();
    resetSignInForm();
  };

  return (
    <main className={s.loginMain}>
      {isLoading && <Loader isVisible={isLoading} />}

      <img src="/public/images/logo.png" alt="" width="45%" />
      <Auth
        handleSubmit={handleSubmit}
        signUpSubmit={signUpSubmit}
        onChangeSign={onChangeSign}
        onChangeSignIn={onChangeSignIn}
        toggleActiveTab={toggleActiveTab}
        tab={tabName}
        userSignUp={userSignUp}
        userSignIn={userSignIn}
        isVisible={isVisible}
        errorMessage={errorMessage}
        visiblePassword={visiblePassword}
      />
    </main>
  );
};
