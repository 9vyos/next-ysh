"use client";
import { signIn, signOut } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </div>
  );
}
