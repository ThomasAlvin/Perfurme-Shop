import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { api } from "../api/api";
export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    try {
      const token = JSON.parse(localStorage.getItem("auth"));
      //   if (token) {
      //     const auth = await api()
      //       .get("/admin/v3?token=" + token)
      //       .then((res) => res.data);
      //     if (auth.username) {
      //       dispatch({
      //         type: "login",
      //         payload: auth,
      //       });
      //     } else {
      //       dispatch({
      //         type: "logout",
      //       });
      //     }
      //   }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <>{children}</>
    </>
  );
}
