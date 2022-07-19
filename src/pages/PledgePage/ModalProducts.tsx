import iconCloseModal from "../../assets/images/icon-close-modal.svg";
import ModalProductsCard from "./ModalProductsCard";
import { PledgePageContentProductData } from "../../content/PledgePageContentData";

interface Props {
  isModalProductVisible: boolean;
  setIsModalProductVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalProducts = ({
  isModalProductVisible,
  setIsModalProductVisible,
}: Props) => {
  return (
    <div
      className={`ease-linear duration-150 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 h-screen w-screen flex items-start justify-center ${
        isModalProductVisible ? "" : "hidden"
      }`}
    >
      <div className="max-w-[766px] w-full max-h-[80vh] flex flex-col items-start justify-start bg-white mt-16 rounded-xl p-8">
        <img
          src={iconCloseModal}
          alt="Close Mode"
          className="w-4 h-4 mb-2 self-end cursor-pointer"
          onClick={() => {
            setIsModalProductVisible(false);
          }}
        />
        <div className="overflow-y-scroll scrollbar__thin">
          <h5 className="font-bold text-xl mb-2">Back this project</h5>
          <p className="text-secondary-1 mb-8">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          {/* First Card */}
          <div className="border rounded-lg">
            <div className="flex items-baseline p-6 mb-4">
              <input
                type="radio"
                className="mr-4"
                name="productsRadioButton"
                value={-1}
              />
              <div>
                <h5 className="font-bold mr-4 mb-4">Pledge with no reward</h5>
                <p>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you'll be added
                  to a special Backer member list.
                </p>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          {PledgePageContentProductData.map((data) => {
            return (
              <ModalProductsCard
                key={data.id}
                title={data.title}
                amount={data.amount}
                description={data.description}
                left={data.left}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalProducts;
