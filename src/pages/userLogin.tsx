"use client";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";


export default function Login() {
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const signup = async (e: any, type: any) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (type == "signup") {
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        router.push("/Signed");
      } catch (error: any) {
        const errorMessage = error.message;
        alert(`Failed to sign up: ${errorMessage}`);
        setLogin(true);
      }
    } else {
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        router.push("/Signed");
      } catch (error: any) {
        const errorMessage = error.message;
        alert(`Failed to sign up: ${errorMessage}`);
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center custom-background">
      <div className="flex flex-col items-center justify-center shadow-md p-10 lg:w-[1290px] lg:h-[600px] bg-[rgba(255,255,255,0.8)] rounded-md">
        {/* <h1 className="text-4xl text-blue-800 my-10">Hello</h1> */}
        <div className="w-52 flex justify-between items-center font-semibold text-white">
          <div className={login == false ? "btn-active" : "btn"} onClick={() => setLogin(false)}>
            Sign Up
          </div>
          <div className={ login == true ? "btn-active" : "btn" } onClick={() => setLogin(true)}>
            Sign In
          </div>
        </div>

        {/* <h1 className="text-2xl font-bold text-black mb">{login ? "SignIn" : "SignUp"}</h1> */}

        <form onSubmit={(e) => signup(e, login ? "signin" : "signup")} className="flex flex-col">
          <input name="email" type="email" ref={emailRef} placeholder="Email" className="px-4 py-2 rounded-md mb-1 border"/>
          <input name="pass" type="password" ref={passwordRef} placeholder="Password" className="px-4 py-2 rounded-md mb-2 border"/>
          <button type="submit" className="bg-green-600 py-2 px-2 rounded-md font-semibold text-white">
            {login ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
      <p className="text-white text-xs absolute bottom-0 tracking-widest">Copyright &copy; 2023  |  Preetham Ananthu  |  All Rights Reserved</p>
    </main>
  );
}
function useNavigate() {
  throw new Error("Function not implemented.");
}
