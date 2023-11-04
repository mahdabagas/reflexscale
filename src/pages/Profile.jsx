import Nav from "../components/navbar/Nav";

// assets
import bgHorizontal from "../assets/bg-horizontal.svg";
import iconProfile from "../assets/icon-profile.svg";

const Profile = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <Nav />
      <main className="relative px-10 h-full pt-8 z-10">
        <h1 className="text-primary text-3xl font-semibold">Profile Kamu</h1>
        <div className="flex flex-col lg:flex-row justify-around gap-2 lg:gap-10 mt-8 ">
          <div className="bg-white drop-shadow-lg rounded-lg w-full h-full flex flex-col gap-2 p-8">
            <div className="rounded-full h-32 w-32  self-center">
              <img src={iconProfile} alt="icon-profile" className="object-cover object-center w-full h-full"/>
            </div>
            <div>
              <p className="font-semibold">Nama</p>
              <p className="text-xl">Bagas Mahda Dhani</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-xl">Bagasmahda@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">Usia</p>
              <p className="text-xl">19 Tahun</p>
            </div>
            <div>
              <p className="font-semibold">Jenis Kelamin</p>
              <p className="text-xl">Laki-laki</p>
            </div>
            <div>
              <p className="font-semibold">Alamat</p>
              <p className="text-xl">Kwasen Srimartani</p>
            </div>
          </div>
          <div className="bg-white drop-shadow-lg rounded-lg w-full h-full p-8">
            <h1 className="text-center font-medium text-2xl">Result</h1>
          </div>
        </div>
      </main>
      {/* Background */}
      <div className="w-full h-full absolute top-0 bottom-0 -right-48 -z-0 ">
        <img
          src={bgHorizontal}
          alt="background-horizontal"
          className="w-full h-full rotate-180"
        />
      </div>
    </div>
  );
};

export default Profile;
