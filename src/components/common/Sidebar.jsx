import { useLocation, useNavigate } from "react-router-dom";
import { MdHistory, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import data from "../common/data";
import { BiMenu } from "react-icons/bi";
import Logo from "./Logo";
import { CgClose } from "react-icons/cg";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-30 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`h-full fixed top-0 left-0 z-40 bg-white text-black transition-all duration-300 shadow overflow-y-auto w-60
         lg:translate-x-0 lg:relative lg:block ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:!translate-x-0`}
      >
        <div className="flex items-center justify-between px-2 py-8">
        
            <div className="max-lg:hidden">
              <Logo />
            </div>
          <button
            className="lg:hidden absolute right-2 top-4 cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}
          >
            <CgClose size={28} />
          </button>
         
        </div>

        <nav>
          <ul className="space-y-2 px-4">
            {data.map(({ label, path, children }) => {
              const isActive = location.pathname === path;
              const isSubmenuOpen = openSubmenus[label];

              const handleClick = () => {
                if (children) {
                  toggleSubmenu(label);
                } else {
                  navigate(path);
                  setIsOpen(false);
                }
              };

              return (
                <div key={label}>
                  <li
                    onClick={handleClick}
                    className={`flex items-center justify-between   space-x-4 p-2 rounded cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "bg-violet-500  text-white"
                        : "hover:bg-violet-500"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                     
                        <span className="font-semibold whitespace-nowrap sm:inline-block">
                          {label}
                        </span>
                    </div>
                    {
                 
                    children && (
                      <MdChevronRight
                        size={20}
                        className={`transition-transform duration-200 ${
                          isSubmenuOpen ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </li>

                  {children && isSubmenuOpen && 
            
                   (
                    <ul className="p-2 mt-1 space-y-1">
                      {children.map(
                        ({ label: subLabel, icon: SubIcon, path: subPath }) => {
                          const isSubActive = location.pathname === subPath;
                          return (
                            <li
                              key={subLabel}
                              onClick={() => {
                                navigate(subPath);
                                setIsOpen(false);
                              }}
                              className={`font-semibold p-2 rounded cursor-pointer text-sm transition-colors duration-200 ${
                                isSubActive
                                  ? "bg-violet-500 text-white"
                                  : "hover:bg-violet-500"
                              }`}
                            >
                              <span className="">{subLabel}</span>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  )}
                </div>
              );
            })}
          </ul>
        </nav>
      </aside>

      {!isOpen && (
        <div className="fixed top-4 left-4 z-50 lg:hidden bg-white p-1 rounded-full">
          <button
            className="cursor-pointer w-8 h-8 flex iems-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <BiMenu size={28} color="black" />
          </button>
        </div>
      )}
    </>
  );
};
export default Sidebar;
 