interface Props {
  classname: string;
  toggleModal: () => void;
}

const ModalLinks = ({ classname, toggleModal }: Props) => {
  const clickModalHandler = (e: any) => {
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div
      className={`${classname} ease-linear duration-150 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 h-screen w-screen flex items-start justify-center md:hidden`}
      onClick={clickModalHandler}
    >
      <div className="w-96 flex flex-col items-stretch justify-center bg-white  mt-32 rounded-xl divide-y-[1px]">
        <a href="#" className="font-medium text-black p-5">
          About
        </a>
        <a href="#" className="font-medium text-black p-5">
          Discover
        </a>
        <a href="#" className="font-medium text-black p-5">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default ModalLinks;
