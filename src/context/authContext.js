import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const authContext = React.createContext();

const API = "http://kitchen4you.kg/api";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const signUp = async (user, navigate) => {
    console.log(user);
    let formData = new FormData();
    formData.append("email", user.email);
    formData.append("password1", user.password1);
    formData.append("password2", user.password2);
    formData.append("username", user.username);
    formData.append("phone_number", user.phone_number);
    try {
      const res = await axios.post(`${API}/auth/register/`, formData);
      navigate("/autodone");
      setUser(user.email);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  async function signIn(username, password, navigate) {
    console.log(username, password);
    let formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);
    try {
      let res = await axios.post(`${API}/auth/login/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      navigate("/");

      let { access_token } = res.data;
      document.cookie =
        encodeURIComponent("delivery-auth") +
        "=" +
        encodeURIComponent(access_token);

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("email", username);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(username);
    } catch (e) {
      setError(e);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    Cookies.remove("delivery-auth");
    setUser("");
    return false;
  }
  console.log(user);
  return (
    <authContext.Provider
      value={{
        signUp,
        signIn,
        user,
        error,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
