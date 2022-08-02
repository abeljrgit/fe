import { useEffect, useState } from "react";
import { Icons } from "@assets";
import { TrafficBasedPrices } from "@content";

export const TrafficPricingCard = () => {
  const [billingType, setBillingType] = useState("monthly");
  const [rangeValue, setRangeValue] = useState(0);
  const [promo, setPromo] = useState(TrafficBasedPrices[rangeValue]);

  const toggleBillingType = () => {
    if (billingType === "monthly") {
      setBillingType("yearly");
    } else if (billingType === "yearly") {
      setBillingType("monthly");
    }
  };

  const rangeChangeHandler = (e: any) => {
    setRangeValue(e.target.value);
    setPromo(TrafficBasedPrices[e.target.value]);
  };

  useEffect(() => {
    console.log(rangeValue);
  }, [rangeValue]);
  const rangeContainerStyle: any = {
    width: `${25 * rangeValue}%`,
  };

  return (
    <form className="bg-white shadow-lg max-w-md w-full rounded-md md:max-w-xl">
      <div className="flex flex-col items-center px-10 pt-4 pb-12 border-b">
        <div className="mt-4 md:flex md:items-center md:justify-between md:w-full">
          <span className="font-black text-grayishBlue">
            {promo.pageviews} PAGEVIEWS
          </span>
          <div className="hidden md:flex md:items-center">
            <h2 className="font-black text-4xl text-darkDesaturatedBlue mr-3">
              ${promo.perMonth}.00
            </h2>
            <span className="text-grayishBlue">/ month</span>
          </div>
        </div>
        <div className="mt-10 w-full input-range-container">
          <div className="input-range-indicator" style={rangeContainerStyle} />
          <input
            type="range"
            className="input-range"
            min="0"
            max={TrafficBasedPrices.length - 1}
            value={rangeValue}
            onChange={rangeChangeHandler}
          />
        </div>
        <div className="flex items-center mt-10 md:hidden">
          <h2 className="font-black text-4xl text-darkDesaturatedBlue mr-3">
            ${promo.perMonth}.00
          </h2>
          <span className="text-grayishBlue">/ month</span>
        </div>
        <div className="flex items-center space-x-2 mt-8">
          <span className="text-grayishBlue">Monthly Billing</span>
          <div
            className={`relative w-10 h-5 bg-lightGrayishBlue2 flex items-center  rounded-full cursor-pointer`}
            onClick={toggleBillingType}
          >
            <div
              className={`absolute w-3 h-3 bg-white rounded-full ease-linear duration-150 top-1/2 ${
                billingType === "monthly" ? "left-1" : "left-6"
              } -translate-y-1/2`}
            >
              &nbsp;
            </div>
          </div>
          <span className="text-grayishBlue">Yearly Billing</span>
          <div className="bg-lightRed/20 rounded-full px-2">
            <span className="text-lightRed md:hidden">-</span>
            <span className="text-lightRed">25%</span>
            <span className="hidden text-lightRed md:inline">
              &nbsp;discount
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8 py-10 md:flex-row md:justify-between md:space-y-0 md:px-10">
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <div className="flex items-center space-x-4 text-grayishBlue">
            <img src={Icons.checkIcon} alt="Check Icon" className="w-3 h-3" />
            <span>Unlimited websites</span>
          </div>
          <div className="flex items-center space-x-4 text-grayishBlue">
            <img src={Icons.checkIcon} alt="Check Icon" className="w-3 h-3" />
            <span>100% data ownership</span>
          </div>
          <div className="flex items-center space-x-4 text-grayishBlue">
            <img src={Icons.checkIcon} alt="Check Icon" className="w-3 h-3" />
            <span>Email reports</span>
          </div>
        </div>
        <button className="bg-darkDesaturatedBlue w-44 text-paleBlue py-3 rounded-full">
          Start my trial
        </button>
      </div>
    </form>
  );
};
