interface BurgerProps {
  burgerActive: boolean;
  setBurgerActive: React.MouseEventHandler<HTMLDivElement>;
}

const Burger = ({ burgerActive, setBurgerActive }: BurgerProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center z-10 md:hidden"
      onClick={setBurgerActive}
    >
      <div
        className={`w-6 h-[3px] bg-white rounded-full origin-top-right ease-linear duration-150 ${
          burgerActive ? "-rotate-45 -translate-x-1" : ""
        }`}
      >
        &nbsp;
      </div>
      <div
        className={`w-6 h-[3px] bg-white rounded-full mt-[5px] ease-linear duration-150 ${
          burgerActive ? "translate-y-4 opacity-0 invisible" : ""
        }`}
      >
        &nbsp;
      </div>
      <div
        className={`w-6 h-[3px] bg-white rounded-full mt-[5px] origin-bottom-right ease-linear duration-150 ${
          burgerActive ? "rotate-45 -translate-x-1" : ""
        }`}
      >
        &nbsp;
      </div>
    </div>
  );
};
export default Burger;
