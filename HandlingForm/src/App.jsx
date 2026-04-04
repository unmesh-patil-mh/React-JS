import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // if(data.username != "Unmesh"){
    //   setError("myform",{message: "Your form username is not valid"})
    // }
    // else if(!data.password.includes("@") ){
    if (!data.password.includes("@")) {
      setError("include", { message: "Password shall include one symbol" });
    }
  };
  // else if ka else hata diya to dono ek sath trigger hoge
  // HUM REACT HOOK FORM LIBRARY USE KARTE HAI APNE FORMS KO EASY BANANE KE LIYE

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This fileld is required" },
              minLength: { value: 3, message: "Min lenght is 3" },
              maxLength: { value: 10, message: "Max lenght is 10" },
            })}
            type="text"
          />
          {/* {errors.username && <div>There is some error in username</div>} */}
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            placeholder="password"
            {...register("password", {
              required: { value: true, message: "Should include @" },
            })}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.include && (
            <div className="red">{errors.include.message}</div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
