import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../../components/button/Button";

// Assets
import bgVertical from "../../../assets/bg-vertical.svg";
import iconScore from "../../../assets/icon-score.svg";

const ResultTest = ({ result }) => {
  const [testResult, setTestResult] = useState({
    score: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    let category = "";
    let description = "";

    const score = result.reduce((total, item) => total + item.poin, 0);

    // set result Tes category and description
    if (score <= 40) {
      category = "Low Risk";
      description =
        "(Ringan) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ducimus fugit id labore expedita optio doloribus iusto maxime quod odit!";
    } else if (score <= 57) {
      category = "Moderate Risk";
      description =
        "(Sedang) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ducimus fugit id labore expedita optio doloribus iusto maxime quod odit!";
    } else {
      category = "High Risk";
      description =
        "(Tinggi) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ducimus fugit id labore expedita optio doloribus iusto maxime quod odit!";
    }

    setTestResult({ score: score, category, description });
  }, []);

  return (
    <>
      <main className="w-full h-full py-8">
        <section className="relative z-10 w-full h-full px-8 mb-4">
          <div className="animate-fade animate-delay-500  mx-auto bg-white drop-shadow-lg rounded-xl p-8 lg:w-5/6  ">
            <div className="flex flex-col gap-4 items-center text-center">
              <h2 className="text-center font-medium text-xl md:text-3xl text-primary">
                Hasil Tes Reflexscale
              </h2>
              <div>
                <h3 className="text-center text-lg md:text-xl mb-2">Score</h3>
                <div className="mx-auto animate-jump animate-duration-[3000ms] text-center relative w-36 h-36 md:h-48 md:w-48 flex justify-center items-center">
                  <img src={iconScore} alt="icon-score " className="absolute " />
                  <p className="relative z-10 text-4xl lg:text-5xl font-medium text-white ">
                    {testResult.score}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-center text-lg md:text-xl mb-2">
                  Kategory
                </h3>
                <div className="text-center font-medium text-primary text-xl md:text-2xl">
                  {testResult.category}
                </div>
              </div>
              <p className="w-5/6 text-sm lg:txt-base">
                {testResult.description}
              </p>
              <Link to="/">
                <Button className="bg-primary text-white text-sm lg:text-base px-4 rounded-full">
                  Kembali Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* Background */}
        <div className="animate-fade-up absolute bottom-0 -z-0 left-0 right-0 md:-bottom-96 lg:-bottom-[32rem]">
          <img
            src={bgVertical}
            alt="background-vertical"
            className="object-cover object-center rotate-180 w-full h-full"
          />
        </div>
      </main>
    </>
  );
};

export default ResultTest;
