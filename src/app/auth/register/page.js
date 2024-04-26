import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      register
      <Link
        href={"/auth/login"}
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        login
      </Link>
    </div>
  );
};

export default page;
