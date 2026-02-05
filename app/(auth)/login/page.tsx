"use client";
import { authClient } from "@/lib/auth-client";

const Page = () => {
  return (
    <div>
      <button
        onClick={() => {
          authClient.signUp.email({
            email: "aleksa.savic91@gmail.com",
            password: "kurcina123",
            name: "Aleksa Savic",
          });
        }}
      >
        Sign up
      </button>
      <button
        onClick={() => {
          authClient.signIn.email({
            email: "aleksa.savic91@gmail.com",
            password: "kurcina123",
          });
        }}
      >
        Sign up
      </button>
      <button
        onClick={() => {
          authClient.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default Page;
