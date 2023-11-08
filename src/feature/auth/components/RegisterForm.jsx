import { Link, useNavigate } from "react-router-dom";

import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";

//assets
import lock from "../../../assets/lock.svg";
import unlock from "../../../assets/unlock.svg";
import ButtonLoading from "../../../components/loader/ButtonLoading";
import { register } from "../services/register";

const RegisterForm = ({ className }) => {
  const { setVisible } = useContext(LoginContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nama_lengkap: "",
    email: "",
    usia: "",
    jenis_kelamin: "",
    alamat: "",
    password: "",
    verif_password: "",
  });
  const [errorText, setError] = useState(false);

  const [typePass, setTypePass] = useState({
    pass: "password",
    confirmPass: "password",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await register(form);

      if (result?.response?.data) {
        setError(result?.response?.data.message);
        setLoading(false);
        return;
      }

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setLoading(false);
      console.log(err);
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

  const handleConfirmPass = () => {
    if (typePass.confirmPass === "password") {
      setTypePass((prev) => ({ ...prev, confirmPass: "text" }));
      return;
    }
    setTypePass((prev) => ({ ...prev, confirmPass: "password" }));
  };
  return (
    <section
      className={`max-w-md rounded-lg bg-white drop-shadow-lg p-8 ${className}`}
    >
      <form
        className="flex flex-col gap-6 items-center text-black"
        onSubmit={handleRegister}
      >
        <h1 className="font-medium text-2xl">Registrasi</h1>
        <div className="w-full ">
          <label
            htmlFor="nama"
            className="block mb-1 after:content-['*'] after:ml-0.5 after:text-red/80"
          >
            Nama Lengkap
          </label>
          <Input
            type={`text`}
            required={true}
            placeholder="Nama Lengkap"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, nama_lengkap: e.target.value }))
            }
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="block mb-1 after:content-['*'] after:ml-0.5 after:text-red/80"
          >
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
        <div className="flex items-center gap-2">
          <div className="w-2/5">
            <label
              htmlFor="usia"
              className="block mb-1 after:content-['*'] after:ml-0.5 after:text-red/80"
            >
              Usia (tahun)
            </label>
            <Input
              type={`number`}
              required={true}
              placeholder="19"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, usia: parseInt(e.target.value) }))
              }
            />
          </div>
          <div className="w-3/5">
            <label
              htmlFor="jenis-kelamin"
              className="block mb-1 after:content-['*'] after:ml-0.5 after:text-red/80"
            >
              Jenis Kelamin
            </label>
            <select
              name="jenis-kelamin"
              id="jenis-kelamin"
              className="w-full bg-white h-full drop-shadow-lg p-2 rounded-lg text-black block focus:outline-primary appearance-none"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, jenis_kelamin: e.target.value }))
              }
              requirednp
            >
              <option value="" className="text-center"></option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="alamat"
            className="block mb-1 after:content-['*'] after:ml-0.5 after:text-red/80"
          >
            Alamat
          </label>
          <Input
            type={`alamat`}
            required={true}
            placeholder="Jl. Kertoleksono no 46"
            onChange={(e) =>
              setForm((prev) => ({ ...prev, alamat: e.target.value }))
            }
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="block mb-1 after:content-['*'] after:ml-0.5 after:text-red/80"
          >
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={typePass.pass}
              required={true}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <div
              className="absolute right-3 top-3 cursor-pointer"
              onClick={handlePass}
            >
              {typePass.pass !== "password" ? (
                <img src={unlock} alt="lock" className="w-5 h-5" />
              ) : (
                <img src={lock} alt="unlock" className="w-5 h-5" />
              )}
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <label
            htmlFor="verif_password"
            className="block after:content-['*'] after:ml-0.5 after:text-red/80"
          >
            Confirm Password
          </label>
          <div className="relative mb-3">
            <Input
              id="verif_password"
              type={typePass.confirmPass}
              required={true}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, verif_password: e.target.value }))
              }
            />
            <div
              className="absolute right-3 top-3 cursor-pointer"
              onClick={handleConfirmPass}
            >
              {typePass.confirmPass !== "password" ? (
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
          {loading ? <ButtonLoading /> : "Registrasi"}
        </Button>
      </form>
      <div className="text-center mt-4 flex justify-center gap-2">
        <p className="text-black/90">Sudah mempunyai akun?</p>
        <Link
          to="/"
          className="text-primary/90 hover:text-primary"
          onClick={() => setVisible(() => true)}
        >
          Masuk
        </Link>
      </div>
    </section>
  );
};

export default RegisterForm;
