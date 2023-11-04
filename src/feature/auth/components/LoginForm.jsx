import { Link } from "react-router-dom";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

const LoginForm = ({ setShowLogin, className }) => {
  return (
    <section
      className={`max-w-md rounded-lg bg-white drop-shadow-lg p-8 ${className}`}
    >
      <form className="flex flex-col gap-6 items-center">
        <h1 className="font-medium text-2xl">Masuk</h1>
        <div className="w-full">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <Input type={`text`} classname={`w-full`} />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block mb-1">
            password
          </label>
          <Input type={`text`} classname={`w-full`} />
        </div>
        <Button
          type={`submit`}
          className={`w-full bg-primary drop-shadow-lg text-white font-medium`}
        >
          Login
        </Button>
      </form>
      <p className="text-center mt-4">
        Belum mempunyai akun? <Link to="/register" className="text-primary">Register</Link>
      </p>
      <span
        className="text-primary/80 text-sm absolute top-2 right-2 cursor-pointer"
        onClick={() => setShowLogin((prev) => !prev)}
      >
        Close (x){" "}
      </span>
    </section>
  );
};

export default LoginForm;
