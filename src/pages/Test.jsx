import { Link } from "react-router-dom";
import Nav from "../components/navbar/Nav";
import Button from "../components/button/Button";

// Assets
import bgTest from "../assets/bg-test.svg";

function Test() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="relative w-full mb-10">
        <section className="relative z-10">
          <h1 className="text-center text-white font-medium lg:text-3xl pt-10  md:pt-16">
            Risk Level of Free Scale
          </h1>
          <div className="mx-auto mt-10 lg:mt-20 max-w-xs bg-white rounded-lg drop-shadow-lg p-3">
            <p className="text-black/80 text-center mb-1">Indikator</p>
            <h3 className="text-center text-primary text-xl font-medium">
              Pengetahuan Seksualitas
            </h3>
          </div>
          {/* Questions */}
          <div className="mt-16 flex flex-col items-center gap-16 px-8">
            <div className="mx-auto w-full">
              <p className="font-medium text-xl text-black/90 mb-4 lg:mb-6  text-center">
                Berada dalam satu ruangan berduaan dengan lawan jenis
              </p>
              <div className="flex gap-10 w-4/5 lg:w-2/3 mx-auto">
                <li className="list-none w-1/3 text-primary p-2 text-center rounded-full bg-white border font-medium text-lg border-primary   transition-colors cursor-pointer">
                  Sering
                </li>
                <li className="list-none w-1/3 text-blue p-2 text-center rounded-full bg-white border font-medium text-lg border-blue  transition-colors cursor-pointer">
                  Jarang
                </li>
                <li className="list-none w-1/3 text-black/70 p-2 text-center rounded-full bg-white border font-medium text-lg border-black/70 transition-colors cursor-pointer">
                  Tidak
                </li>
              </div>
            </div>
            <div className="mx-auto w-full ">
              <p className="font-medium text-xl text-black/90 mb-4 lg:mb-6 text-center">
                Berpelukan, berciuman dengan lawan jenis
              </p>
              <div className="flex gap-10 w-4/5 lg:w-2/3 mx-auto">
                <li className="list-none w-1/3 text-primary p-2 text-center rounded-full bg-white border font-medium text-lg border-primary   transition-colors cursor-pointer">
                  Sering
                </li>
                <li className="list-none w-1/3 text-blue p-2 text-center rounded-full bg-white border font-medium text-lg border-blue  transition-colors cursor-pointer">
                  Jarang
                </li>
                <li className="list-none w-1/3 text-black/70 p-2 text-center rounded-full bg-white border font-medium text-lg border-black/70 transition-colors cursor-pointer">
                  Tidak
                </li>
              </div>
            </div>
            <div className="mx-auto w-full">
              <p className="font-medium text-xl text-black/90 mb-4 lg:mb-6 text-center">
                Mencoba melakukan hubungan seksual
              </p>
              <div className="flex mx-auto gap-10 w-4/5 lg:w-2/3">
                <li className="list-none w-1/3 text-primary p-2 text-center rounded-full bg-white border font-medium text-lg border-primary   transition-colors cursor-pointer">
                  Sering
                </li>
                <li className="list-none w-1/3 text-blue p-2 text-center rounded-full bg-white border font-medium text-lg border-blue  transition-colors cursor-pointer">
                  Jarang
                </li>
                <li className="list-none w-1/3 text-black/70 p-2 text-center rounded-full bg-white border font-medium text-lg border-black/70 transition-colors cursor-pointer">
                  Tidak
                </li>
              </div>
            </div>

            <Link to="result">
              <Button className="bg-primary text-white font-medium px-6 rounded-full">
                Submit
              </Button>
            </Link>
          </div>
        </section>

        {/* Background */}
        <div className="w-full h-full absolute -top-2 lg:-top-24 -z-0 left-0 right-0 ">
          <img
            src={bgTest}
            alt="background-test"
            className="object-cover object-center"
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Test;
