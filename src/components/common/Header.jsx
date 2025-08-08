import { BsBell, BsSearch } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FiGift } from "react-icons/fi";
import { useState } from "react"; 
import Logo from "./Logo";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => setShowSearch((prev) => !prev);

  return (
    <div className="max-lg:flex-col flex justify-center items-center w-full  max-w-4xl mx-auto gap-6">
      <div className="lg:hidden">
       <Logo/>
      </div>

      <div className="flex w-full items-center justify-between gap-2">
        <div className="relative flex-1 max-w-md">
          <button
            onClick={toggleSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-gray-500"
          >
            <BsSearch size={16} />
          </button>

          <input
            type="text"
            placeholder="Search"
            autoFocus={showSearch}
            className={`w-full pl-10 pr-4 py-1.5 bg-gray-100 rounded-xl focus:outline-none transition-all duration-300 ease-in-out `}
          />
        </div>

        <div className="flex sm:gap-4 gap-2">
          

          <button className="p-2 rounded-full bg-zinc-200">
            <BsBell className="md:h-6 md:w-6 h-4 w-4" />
          </button>

          <button className="p-2 rounded-full bg-zinc-200">
            
            <CgShoppingBag className="md:h-6 md:w-6 h-4 w-4" />
          </button>

          <button className="p-2 rounded-full bg-zinc-200">
            <FiGift className="md:h-6 md:w-6 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
