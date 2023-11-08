import Nav from "../components/navbar/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { LoginContext } from "../context/LoginContext";

// assets
import bgVertical from "../assets/bg-vertical.svg";
import Button from "../components/button/Button";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(ProfileContext);
  const { setVisible } = useContext(LoginContext);

  console.log(user);
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-none justify-between bg-white relative  ">
        <Nav />
        <main className="w-full mb-12 ">
          <section className="relative z-10 pt-8 md:pt-10 lg:pt-24">
            <div className="animate-delay-500 animate-fade flex flex-col gap-4 items-center text-white">
              <h1 className="text-center text-3xl md:text-4xl lg:text-6xl drop-shadow-lg px-4">
                Selamat Datang di{" "}
                <span className="font-medium">REFLEXSCALE</span>
              </h1>
              <h2 className="text-center md:text-xl lg:text-2xl drop-shadow-md px-4">
                Tes untuk mengetahui resiko seks bebas pada remaja indonesia
              </h2>
              <Button
                onClick={() =>
                  user ? navigate("/test") : setVisible(() => true)
                }
                className={`bg-white text-primary px-6 font-medium drop-shadow-md hover:drop-shadow-xl rounded-full  `}
              >
                IKUTI TES
              </Button>
              <section className="bg-white flex flex-col gap-2 items-center mt-4 mb:mt-10 max-w-3xl p-6 rounded-xl drop-shadow-lg">
                <h3 className="text-black font-medium">Apa itu REFLEXSCALE?</h3>
                <p className="text-black text-justify text-sm md:text-base">
                  REFLEXSCALE (Risk Level of Free Sex Scale) merupakan Skala
                  indikator risiko seks bebas pada remaja yang dapat membantu
                  tenaga kesehatan, orang tua, pemerintah, guru, dan seluruh
                  masyarakat untuk mencegah seks bebas pada remaja. Skala
                  indikator ini terbagi atas beberapa faktor yang mempengaruhi
                  seks bebas pada remaja diantaranya faktor perilaku seks bebas,
                  pemahaman agama, pengetahuan mengenai seks, lingkungan, media
                  sosial, dan orang tua.
                </p>
              </section>
            </div>
          </section>
          {/* Background */}
          <div className="animate-fade-down w-full flex-none absolute -top-0 md:-top-44 lg:-top-[19rem] -z-0 left-0 right-0 ">
            <img
              src={bgVertical}
              alt="background-vertical"
              className="object-cover object-center"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
