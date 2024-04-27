"use client";
import { decrement, increment, logout } from "@/store/actions/authAction";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  let dispatch = useDispatch();
  let { counter } = useSelector((state) => state.user);
  console.log(counter);
  const handelIncrement = () => {
    let count = counter + 1;
    dispatch(increment(count));
  };

  const handleDecrement = () => {
    let count = counter - 1;
    dispatch(decrement(count));
  };
  let handleToast = () => {
    toast.success("Hello");
  };
  let logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen home">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <button onClick={logoutUser}>Logout</button>
      <div className="flex items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="mx-4 text-2xl font-bold">{counter}</span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handelIncrement}
        >
          +
        </button>
      </div>
      dashboard
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={handleToast}
      >
        see toast msg
      </button>
      <Link
        href={"/public"}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        about
      </Link>
    </div>
  );
};

export default page;
