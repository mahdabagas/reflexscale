import logo from "../../assets/logo.svg";

const PageLoading = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-white">
      <div className="animate-pulse animate-infinite w-24 h-24 p-6 bg-primary rounded-full ">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
    </section>
  );
};

export default PageLoading;
