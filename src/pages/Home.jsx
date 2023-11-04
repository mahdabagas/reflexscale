import Nav from "../components/navbar/Nav";

// assets
import bgVertical from "../assets/bg-vertical.svg";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <Nav />
        <main className="relative w-full px-2">
          <section className="relative z-10 pt-10 lg:pt-24">
            <div className="flex flex-col gap-6 items-center text-white">
              <h1 className="text-center text-3xl md:text-4xl lg:text-6xl">
                Selamat Datang di{" "}
                <span className="font-medium">REFLEXSCALE</span>
              </h1>
              <h2 className="text-center md:text-xl lg:text-2xl">
                Tes untuk mengetahui resiko seks bebas pada remaja indonesia
              </h2>
              <Link to="/test">
                <Button
                  className={`bg-white text-primary px-4 font-medium hover:opacity-70 drop-shadow-md rounded-lg`}
                >
                  IKUTI TES
                </Button>
              </Link>
              <section className="bg-white flex flex-col gap-2 items-center mt-10 max-w-3xl p-6 rounded-xl drop-shadow-md">
                <h3 className="text-black font-medium">Apa itu REFLEXSCALE?</h3>
                <p className="text-black text-justify">
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
          <div className="w-full h-full absolute top-0 md:-top-44 lg:-top-[19rem] -z-0 left-0 right-0 ">
            <img
              src={bgVertical}
              alt="background-vertical"
              className="object-cover object-center"
            />
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
