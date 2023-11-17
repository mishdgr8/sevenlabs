import React from "react";

const Trial = ({ heading }): React.JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex w-full h-fit flex-col items-center justify-between py-0 px-12 ">
        <div
          className="text-center font-extrabold
      text-6xl mt-48 mb-8  items-center justify-between uppercase leading-[4rem]"
        >
          <p>{heading}</p>
          <p>
            GREAT <span className="gradient-text">SOLANA</span> PRODUCTS
          </p>
        </div>
      </div>
      <div className="w-full">
        <hr></hr>
      </div>
    </div>
  );
};

export default Trial;
