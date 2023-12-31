import bgHorizontal from "../assets/bg-horizontal.svg";
import Logo from "../assets/logo.svg";
import RegisterForm from "../feature/auth/components/RegisterForm";

function Register() {
  return (
    <>
      <main className="min-h-screen flex justify-center gap-48 items-center px-8 lg:px-10 relative bg-white ">
        <div className="animate-fade-right hidden lg:flex flex-col gap-16 text-white items-center relative z-10  ">
          <h1 className="text-6xl font-medium drop-shadow-lg">REFLEXSCALE</h1>
          <img src={Logo} alt="Logo" className="w-64 h-64 drop-shadow-lg" />
          <h2 className="text-3xl drop-shadow-lg">
            Risk Level of Free Sex Scale
          </h2>
        </div>
        <div className="relative z-10 py-2 animate-fade animate-delay-500">
          <RegisterForm />
        </div>
        {/* Background */}
        <div className="animate-fade-right w-full h-full absolute top-0 bottom-0 -left-20 -z-0 ">
          <img
            src={bgHorizontal}
            alt="background-vertical"
            className="object-left w-full h-full  "
          />
        </div>
      </main>
    </>
  );
}

export default Register;
