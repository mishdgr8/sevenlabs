import React from "react";

const Trial = ({ heading, tail }) => {
  return (
    <div className="w-full">
      <div className="flex w-full h-fit flex-col items-center justify-between py-0 px-12 ">
        <div
          className="text-center font-extrabold
      text-8xl mt-48 mb-16  items-center justify-between "
        >
          <p>
            {heading}
            <br />
            {tail}
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
