import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function useSignUp(setErrorMessage, setIsLoading) {
  const [userSignUp, setUserSignUp] = useState({
    login: "",
    email: "",
    phone: "",
    password: "",
    name: "",
  });

  const onChangeSign = (e) => {
    const { name, value } = e.target;
    setUserSignUp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signUpSubmit = async (e) => {
    e.preventDefault();
    const { name } = e.target;
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

    createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
      .then(() => setIsLoading(true))
      .then(() => {
        setUserSignUp({
          login: "",
          email: "",
          phone: "",
          password: "",
          name: "",
        });
      })
      .catch((error) => {
        error.message === "Firebase: Error (auth/email-already-in-use)." &&
          setErrorMessage("Password or email is alrady in use");
      })
      .finally(() => setIsLoading(false));
  };

  const resetSignUpForm = () => {
    setUserSignUp({
      login: "",
      email: "",
      phone: "",
      password: "",
      name: "",
    });
  };
  return [onChangeSign, signUpSubmit, resetSignUpForm, userSignUp];
}
