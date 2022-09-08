import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const API = "http://kitchen4you.kg/api";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      console.log(res);
      navigate("/enter");
      setUser(user.email);
    } catch (e) {
      console.log(e);
      setError("Error!");
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
      console.log(res);

      let { access_token } = res.data;
      document.cookie =
        encodeURIComponent("delivery-auth") +
        "=" +
        encodeURIComponent(access_token);

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("email", username);
      setUser(username);
    } catch (e) {
      setError(e);
      console.log(error);
    }
  }
  // console.log(document.cookie);
  //   async function activateLog(email, activation_code, navigate) {
  //     let formData = new FormData();
  //     formData.append("email", email);
  //     formData.append("activation_code", activation_code);
  //     try {
  //       let res = await axios.post(`${API}account/activate/`, formData);
  //       console.log(res);
  //       navigate("/signin");
  //     } catch {
  //       setError("Error!");
  //     }
  //   }

  //   async function forgetAccount(email, navigate) {
  //     let res = await axios.post(`${API}api/password_reset/`, { email });
  //     console.log("from reset", res);
  //     let formData = new FormData();
  //     formData.append("email", email);

  //     try {
  //       let res = await axios.post(
  //         `http://3.72.15.140/v1/api/password_reset/`,
  //         formData
  //       );
  //       console.log(res);
  //       navigate("/signin");
  //     } catch (e) {
  //       setError("Error!");
  //     }
  //   }

  //   async function checkAuth() {
  //     setLoading(true);
  //     let token = JSON.parse(localStorage.getItem("token"));
  //     try {
  //       const Authorization = `Bearer ${token.access}`;
  //       let res = await axios.post(
  //         `${API}account/token/refresh/`,
  //         { refresh: token.refresh },
  //         { headers: { Authorization } }
  //       );
  //       localStorage.setItem(
  //         "token",
  //         JSON.stringify({ refresh: token.refresh, access: res.data.access })
  //       );
  //       let username = localStorage.getItem("username");
  //       setUser(username);
  //       console.log(res);
  //     } catch (e) {
  //       logout();
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
  }
  //   async function resetPassword(email) {
  //     let res = await axios.post(`${API}api/password_reset/`, { email });
  //     console.log("from reset", res);
  //   }
  //   async function confirmResetPassword(password, token) {
  //     let res = await axios.post(`${API}api/password_reset/confirm/`, {
  //       password,
  //       token,
  //     });
  //     console.log("from confirm reset", res);
  //   }
  return (
    <authContext.Provider
      value={{
        signUp,
        signIn,
        user,
        // error,
        // checkAuth,
        // logout,
        // loading,
        // activateLog,
        // forgetAccount,
        // confirmResetPassword,
        // resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
