"use client";
import Loader from "@/components/shared/loader";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-light dark:bg-dark">
      <Loader/>
    </div>
  );
}

export default Loading;
