import { Link } from "react-router-dom";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";

//assets
import lock from "../../../assets/lock.svg";
import unlock from "../../../assets/unlock.svg";
import ButtonLoading from "../../../components/loader/ButtonLoading";
import { login } from "../services/login";

const LoginForm = ({ className }) => {
  const { setVisible } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState(false);

  const [typePass, setTypePass] = useState({
    pass: "password",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login(form);

      if (result?.response?.data) {
        setErrorText(result.response.data.message);
        setLoading(false);
        
        return;
      }

      window.localStorage.setItem(
        "token",
        JSON.stringify(result?.data.data.token)
      );
      window.localStorage.setItem(
        "profile",
        JSON.stringify(result?.data.data.user)
      );

      setTimeout(() => {
        if (result) window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(form);
  }, [form]);
  const handlePass = () => {
    if (typePass.pass === "password") {
      setTypePass((prev) => ({ ...prev, pass: "text" }));
      return;
    }
    setTypePass((prev) => ({ ...prev, pass: "password" }));
  };
  return (
    <section
      className={`max-w-md rounded-lg bg-white drop-shadow-lg p-8 ${className}`}
    >
      <form
        className="flex flex-col gap-6 items-center text-black"
        onSubmit={handleLogin}
      >
        <h1 className="font-medium text-2xl">Masuk</h1>
        <div className="w-full">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <Input
            type={`email`}
            required={true}
            placeholder="nama@email.com"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="w-full relative">
          <label htmlFor="password" className="block mb-1">
            password
          </label>
          <div className="relative mb-3">
            <Input
              id="password"
              type={typePass.pass}
              required={true}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={handlePass}
            >
              {typePass.pass !== "password" ? (
                <img src={unlock} alt="lock" className="w-5 h-5" />
              ) : (
                <img src={lock} alt="unlock" className="w-5 h-5" />
              )}
            </div>
          </div>
          {/* Errorr Message */}
          {errorText && (
            <p className="absolute z-30 -bottom-3 right-0 font-medium text-xs text-red/90">
              {errorText}
            </p>
          )}
        </div>
        <Button
          type={`submit`}
          className={`w-full drop-shadow-lg text-white font-medium rounded-lg h-10 transition-colors ${
            loading ? "bg-primary/60" : "bg-primary"
          } `}
          disabled={loading}
        >
          {loading ? <ButtonLoading /> : "Masuk"}
        </Button>
      </form>
      <div className="text-center mt-4 flex justify-center gap-2">
        <p className="text-black/80">Belum mempunyai akun?</p>
        <Link to="/register" className="text-primary/80 hover:text-primary">
          Registrasi
        </Link>
      </div>
      <span
        className="text-primary/80 text-sm absolute top-2 right-2 cursor-pointer"
        onClick={() => setVisible(() => false)}
      >
        Close (x){" "}
      </span>
    </section>
  );
};

export default LoginForm;
