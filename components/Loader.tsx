import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex-center">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
