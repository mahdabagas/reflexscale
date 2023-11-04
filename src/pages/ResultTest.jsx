import { Link } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import Button from "../components/button/Button";

// Assets
import bgVertical from "../assets/bg-vertical.svg";
import iconScore from "../assets/icon-score.svg";

const ResultTest = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white relative">
      <Nav />
      <main className="w-full h-full py-8">
        <section className="relative z-10 w-full h-full">
          <div className="mx-auto bg-white w-4/6 h-5/6 drop-shadow-lg rounded-xl p-8">
            <div className="flex flex-col gap-3 items-center text-center">
              <h2 className="text-center font-medium text-3xl">
                Hasil Tes Reflexscale
              </h2>
              <div>
                <h3 className="text-center text-xl mb-2">Score</h3>
                <div className="text-center relative h-48 w-48 flex justify-center items-center">
                  <img src={iconScore} alt="icon-score" className="absolute" />
                  <p className="relative z-10 text-5xl font-medium text-white ">
                    56
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-center text-xl mb-2">Kategory</h3>
                <div className="text-center font-medium text-primary text-2xl">
                  Sedang
                </div>
              </div>
              <p className="w-5/6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quia officiis, deleniti eaque ut optio unde amet eum nobis
                distinctio doloribus impedit, obcaecati debitis ipsam cumque?
                Atque, consectetur? Necessitatibus, illum?
              </p>
              <Link to="/">
                <Button className="bg-primary text-white px-4 rounded-full">
                  Selanjutnya
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* Background */}
      <div className="absolute bottom-0 -z-0 left-0 right-0 md:-bottom-96 lg:-bottom-[32rem]">
        <img
          src={bgVertical}
          alt="background-vertical"
          className="object-cover object-center rotate-180 w-full h-full"
        />
      </div>
    </div>
  );
};

export default ResultTest;
