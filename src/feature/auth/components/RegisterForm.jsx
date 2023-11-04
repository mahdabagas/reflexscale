import { Link } from "react-router-dom";

import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

const RegisterForm = ({ className }) => {
  return (
    <section
      className={`max-w-md rounded-lg bg-white drop-shadow-lg p-8 ${className}`}
    >
      <form className="flex flex-col gap-4 items-center">
        <h1 className="font-medium text-2xl">Register</h1>
        <div className="w-full">
          <label htmlFor="nama" className="block mb-1">
            Nama Lengkap
          </label>
          <Input type={`text`} classname={`w-full`} />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <Input type={`text`} classname={`w-full`} />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2/5">
            <label htmlFor="usia" className="block mb-1">
              Usia
            </label>
            <Input type={`number`} classname={`w-full `} />
          </div>
          <div className="w-3/5">
            <label htmlFor="jenis-kelamin" className="block mb-1">
              Jenis Kelamin
            </label>
            <Input type={`text`} classname={`w-full`} />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <Input type={`password`} classname={`w-full`} />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block mb-1">
            Confirm Password
          </label>
          <Input type={`password`} classname={`w-full`} />
        </div>
        <Button
          type={`submit`}
          className={`w-full bg-primary drop-shadow-lg text-white font-medium`}
        >
          Register
        </Button>
      </form>
      <p className="text-center mt-4">
        Sudah mempunyai akun? <Link to="/" className="text-primary">Login</Link>
      </p>
    </section>
  );
};

export default RegisterForm;
