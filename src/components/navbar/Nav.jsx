import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import LoginForm from "../../feature/auth/components/LoginForm";

// assets
import ReflexscaleLogo from "../../assets/logo.svg";

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Show Form Login */}
      {showLogin && (
        <>
          <div className="h-screen w-screen fixed top-0 right-0 left-0 bg-black/30 backdrop-blur-sm z-50">
            <LoginForm setShowLogin={setShowLogin} className={`mx-auto relative top-1/2 -translate-y-1/2`} />
          </div>
        </>
      )}
      {/* Navbar */}
      <nav className="w-full bg-primary flex justify-between py-3 items-center z-40 sticky px-4 lg:px-10 ">
        <Link to="/" className="flex items-center gap-2">
          <img src={ReflexscaleLogo} alt="logo" height={32} width={32} />
          <p className="text-white font-medium text-xl">Reflexscale</p>
        </Link>
        <div>
          <Button
            className={`text-white rounded-full px-4 border-[1.5px] hover:bg-white hover:text-primary`}
            onClick={() => setShowLogin((prev) => !prev)}
          >
            Login
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
