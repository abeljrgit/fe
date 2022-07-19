import { useState } from "react";

interface Props {
  title: string;
  amount: number;
  description: string;
  left: number;
}

const PledgePageContentProductCard = ({
  title,
  amount,
  description,
  left,
}: Props) => {
  return (
    <div className="flex flex-col items-center px-8 mb-4">
      <div className="border py-6 px-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <h5
            className={`font-bold text-1xl text-left ${
              left === 0 ? "text-secondary-1" : ""
            }`}
          >
            {title}
          </h5>
          <span
            className={`block font-bold mb-4 ${
              left === 0 ? "text-primary-1/40" : "text-primary-2"
            }`}
          >
            Pledge ${`${amount}`} or more
          </span>
        </div>
        <p className={`mb-4 ${left === 0 ? "text-secondary-1/40" : ""}`}>
          {description}
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-8 md:mb-0">
            <h2
              className={`font-bold text-3xl text-left ${
                left === 0 ? "text-secondary-1/40" : ""
              }`}
            >{`${left}`}</h2>
            <span
              className={`ml-2 pt-1 ${left === 0 ? "text-secondary-1/40" : ""}`}
            >
              left
            </span>
          </div>
          <button
            className={`font-bold text-white bg-primary-1 py-3 w-52 rounded-full ease-linear duration-150  ${
              left === 0 ? "bg-secondary-1/40" : "hover:bg-primary-2"
            }`}
            disabled={left === 0}
          >
            {`${left === 0 ? "Out of Stock" : "Select Reward"}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PledgePageContentProductCard;
