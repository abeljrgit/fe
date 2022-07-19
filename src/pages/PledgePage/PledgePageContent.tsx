import { Fragment, useState } from "react";
import logoMastercraft from "../../assets/images/logo-mastercraft.svg";
import PledgePageContentProductCard from "./PledgePageContentProductCard";
import { PledgePageContentProductData } from "../../content/PledgePageContentData";
import BookmarkIcon from "../../assets/images/BookmarkIcon";
import ModalProducts from "./ModalProducts";

const PledgePageContent = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isModalProductsVisible, setIsModalProductsVisible] = useState(false);

  const toggleBookmark = () => {
    setIsBookmark((isBookmark) => !isBookmark);
  };

  const openModalProducs = () => {
    setIsModalProductsVisible(true);
  };

  return (
    <Fragment>
      {/* First Card:Intro */}
      <div className="bg-white max-w-[90%] mx-auto -mt-8 md:max-w-3xl rounded-md shadow-lg z-0">
        <div className="flex flex-col items-center relative pt-16 pb-8 px-8">
          <img
            src={logoMastercraft}
            alt="Mastercraft Logo"
            className="absolute top-0 -translate-y-1/2"
          />
          <h1 className="font-bold text-3xl text-center mb-6">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="font-medium text-secondary-1 text-center mb-6">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain
          </p>
          <div className="flex">
            <button
              onClick={openModalProducs}
              className="font-bold text-white bg-primary-1 py-3 w-52 rounded-full mr-4 ease-linear duration-150 hover:bg-primary-2"
            >
              Back this project
            </button>
            <div
              className="bg-secondary-2 flex items-center rounded-full cursor-pointer"
              onClick={toggleBookmark}
            >
              <div className="">
                {/* <img src={iconBookmark} alt="Bookmark Icon" /> */}
                <BookmarkIcon isBookmark={isBookmark} />
              </div>
              <span
                className={`hidden px-8 font-bold md:block ease-linear duration-150 ${
                  isBookmark ? "text-primary-2" : ""
                }`}
              >
                Bookmark
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card:Numbers */}
      <div className="bg-white max-w-[90%] mx-auto mt-8 md:max-w-3xl rounded-md shadow-lg">
        <div className="flex flex-col items-center py-8 px-8">
          <div className="mb-4">
            <h2 className="font-bold text-3xl text-center mb-1">$89,914</h2>
            <p className="font-medium text-secondary-1 text-center">
              of $100,000 backend
            </p>
          </div>
          <div className="border-b-2 border-secondary-2 w-20 h-2 ">&nbsp;</div>
          <div className="mt-4 mb-4">
            <h2 className="font-bold text-3xl text-center mb-1">5,007</h2>
            <p className="font-medium text-secondary-1 text-center">
              total backers
            </p>
          </div>
          <div className="border-b-2 border-secondary-2 w-20 h-2 ">&nbsp;</div>
          <div className="mt-4 mb-8">
            <h2 className="font-bold text-3xl text-center mb-1">56</h2>
            <p className="font-medium text-secondary-1 text-center">
              days left
            </p>
          </div>
          <progress max={100} value={70} className="progress"></progress>
        </div>
      </div>

      {/* Third Card:About */}
      <div className="bg-white max-w-[90%] mx-auto mt-8 md:max-w-3xl rounded-md shadow-lg">
        <div className="flex flex-col items-center pt-8 px-8">
          <h4 className="font-bold text-2xl text-center mb-4">
            About this project
          </h4>
          <p className="font-medium text-secondary-1 text-left mb-4">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="font-medium text-secondary-1 text-left mb-4">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="py-4">
          {PledgePageContentProductData.map((data) => {
            return (
              <PledgePageContentProductCard
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

      <ModalProducts
        isModalProductVisible={isModalProductsVisible}
        setIsModalProductVisible={setIsModalProductsVisible}
      />
    </Fragment>
  );
};

export default PledgePageContent;
