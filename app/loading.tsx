"use client";
import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-light dark:bg-dark">
      <HashLoader color="#B63E96" />
    </div>
  );
}

export default Loading;
