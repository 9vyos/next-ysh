"use client";
import { signIn, signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div style={{ zIndex: 99, position: "relative", background: "#fff" }}>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}
