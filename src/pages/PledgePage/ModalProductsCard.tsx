import { useRef, useState } from "react";

interface Props {
  title: string;
  amount: number;
  description: string;
  left: number;
}

const ModalProductsCard = ({ title, amount, description, left }: Props) => {
  const [pledgeVisible, setPledgeVisible] = useState(false);
  const inputRef = useRef<any>();

  const inputBlurHandler = (e: any) => {
    inputRef.current.checked = false;
    setPledgeVisible(false);
  };
  const inputClickHandler = (e: any) => {
    inputRef.current.checked = true;
    setPledgeVisible(true);
  };

  return (
    <div className="border rounded-lg mt-4">
      <div className="flex items-baseline p-6 mb-4">
        <input
          type="radio"
          className="mr-4"
          name="productsRadioButton"
          value={title}
          onClick={inputClickHandler}
          onBlur={inputBlurHandler}
          ref={inputRef}
          disabled={left === 0}
        />
        <div>
          <div className="flex mb-4">
            <h5
              className={`font-bold mr-4 ${
                left === 0 ? "text-secondary-1" : ""
              }`}
            >
              {title}
            </h5>
            <span
              className={`font-bold text-primary-1 ${
                left === 0 ? "text-primary-1/40" : "text-primary-2"
              }`}
            >
              Pledge ${`${amount}`} or more
            </span>
            <div className="flex ml-auto">
              <h4 className="font-bold mr-2">{`${left}`}</h4>
              <span>left</span>
            </div>
          </div>
          <p className={`${left === 0 ? "text-secondary-1/40" : ""}`}>
            {description}
          </p>
        </div>
      </div>
      <div
        className={`${
          pledgeVisible ? "flex" : "hidden"
        } items-center justify-between p-6 border-t-[1px]`}
      >
        <span>Enter your pledge</span>
        <div className="flex">
          <div className="relative">
            <div className="block absolute top-1/2 left-4 -translate-y-1/2 text-secondary-1 font-bold">
              $
            </div>
            <input
              type="number"
              className="input__number border py-2 px-6 rounded-full w-32 mr-4"
            />
          </div>
          <button className="bg-primary-1 font-bold text-white py-2 px-6 rounded-full">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProductsCard;
