import s from "./LoginPage.module.css";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { Auth } from "./Auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const LoginPage = () => {
  const [tabName, setTabName] = useState("sign");
  const [userLogin, setUserLogin] = useState({
    login: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const user = {
      login: form.userName.value.trim(),
      password: form.userPassword.value.trim(),
    };

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const logInSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch(
    //     "https://67f80d0c2466325443ebae62.mockapi.io/users",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(userLogin),
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

    createUserWithEmailAndPassword(auth, userLogin.email, userLogin.password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error));
    setUserLogin("");
  };

  const toggleActiveTab = (tabId) => {
    setTabName(tabId);
  };

  return (
    <main className={s.loginMain}>
      <img src="/public/images/logo.png" alt="" width="45%" />
      <Auth
        handleSubmit={handleSubmit}
        logInSubmit={logInSubmit}
        onChangeSignUp={onChangeSignUp}
        toggleActiveTab={toggleActiveTab}
        tab={tabName}
      />
    </main>
  );
};
