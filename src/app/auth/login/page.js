"use client";
import { login, logout } from "@/store/actions/authAction";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  let dispatch = useDispatch();
  const { push } = useRouter();
  const handleLogin = () => {
    dispatch(login());
  };
  let token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      dispatch(logout());
    } else {
      push("/admin/dashboard");
    }
  }, []);
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
        onClick={handleLogin}
      >
        login
      </button>
      login
      <Link
        href={"/admin/dashboard"}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        dashboard
      </Link>
    </div>
  );
};

export default page;
