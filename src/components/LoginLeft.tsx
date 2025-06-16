import Logo from "../assets/logo.png";
import bgImage from "../assets/login_bg.png";

const LoginLeft = () => {
  return (
    <div className="max-lg:hidden  w-1/2 relative overflow-hidden">
      <div className="absolute  z-0 bg-gray-300 ">
        <img src={bgImage} alt="bgimg" className="  opacity-45" />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <img src={Logo} alt="Logo" className="w-20 h-20 lg:w-60 lg:h-60" />
      </div>
    </div>
  );
};

export default LoginLeft;
