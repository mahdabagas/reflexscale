import Nav from "../components/navbar/Nav";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Footer from "../components/footer/Footer";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

// assets
import bgHorizontal from "../assets/bg-horizontal.svg";
import iconProfile from "../assets/icon-profile.svg";
import Button from "../components/button/Button";

const Profile = () => {
  const { user } = useContext(ProfileContext);

  const [data, setData] = useState(user);

  // Maksimal data yang ditampilkan 6
  useEffect(() => {
    if (data && data.hasil_tests.length > 5) {
      const NewData = data.hasil_tests.slice(-5);
      setData((prev) => ({ ...prev, hasil_tests: NewData }));
    }
  }, []);

  const handleLogOut = () => {
    window.location.reload();

    window.localStorage.removeItem("profile");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white ">
      <Nav />
      <main className="relative px-10 pt-8 z-10 pb-10">
        <h1 className="text-primary text-xl md:text-3xl font-semibold">
          Profile Kamu
        </h1>
        <div className="animate-fade-right animate-delay-500 flex flex-col md:flex-row items-stretch justify-around gap-2 lg:gap-10 mt-8 ">
          <div className="bg-white drop-shadow-lg rounded-lg w-full flex flex-col gap-2 p-4 md:p-8 text-black ">
            <div className="rounded-full w-24 h-24 lg:h-32 lg:w-32  self-center">
              <img
                src={iconProfile}
                alt="icon-profile"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div>
              <p className="font-semibold">Nama</p>
              <p className="md:text-xl">{user.nama_lengkap}</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="md:text-xl">{user.email}</p>
            </div>
            <div>
              <p className="font-semibold">Usia</p>
              <p className="md:text-xl">{user.usia}</p>
            </div>
            <div>
              <p className="font-semibold">Jenis Kelamin</p>
              <p className="md:text-xl">{user.jenis_kelamin}</p>
            </div>
            <div>
              <p className="font-semibold">Alamat</p>
              <p className="md:text-xl">{user.alamat}</p>
            </div>
            <div className=" self-end">
              <Button
                onClick={handleLogOut}
                className="bg-primary text-white font-medium py-2 px-4 rounded-lg"
              >
                Keluar
              </Button>
            </div>
          </div>
          <div className="bg-white drop-shadow-lg rounded-lg px-4 py-6 w-full">
            <h1 className="text-center font-medium text-2xl">Hasil Test</h1>
            <div className="w-full h-full flex items-center justify-center">
              {data.hasil_tests.length !== 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    width={600}
                    height={300}
                    data={data.hasil_tests}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    className="text-xs"
                  >
                    <Line type="monotone" dataKey="poin" stroke="#F976AC" />
                    <CartesianGrid stroke="#cccC" strokeDasharray="5 5" />
                    <XAxis dataKey="created_at" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="relative mb-10 md:-top-10 text-primary font-medium">
                  Belum Ada Hasil Test
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Background */}
      <div className="animate-fade-left w-full h-full absolute top-0 bottom-0 -right-48 -z-0 ">
        <img
          src={bgHorizontal}
          alt="background-horizontal"
          className="w-full h-full rotate-180"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
