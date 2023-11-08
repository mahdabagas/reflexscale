import { useContext, useEffect, useState } from "react";
import Nav from "../components/navbar/Nav";
import Button from "../components/button/Button";
import { dataQuestions } from "../components/test/question/components/DataQuestions";
import Question from "../components/test/question/components/Question";
import ResultTest from "../feature/resultTest/components/ResultTest";
import Footer from "../components/footer/Footer";

// Assets
import bgTest from "../assets/bg-test.svg";
import cvRight from "../assets/cv-right.svg";
import check from "../assets/check.svg";
import { resultTest } from "../feature/resultTest/services/resultTest";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/UseLocalStorage";
import { ProfileContext } from "../context/ProfileContext";
import ButtonLoading from "../components/loader/ButtonLoading";

function Test() {
  const [activeQuestions, setActiveQuestions] = useState(0);
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [activeNextCategory, setActiveNextCategory] = useState({
    expectedAnswer: 4,
    allowNextCategory: false,
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(ProfileContext);
  const [token] = useLocalStorage("token", " ");

  const { test: data, totalCategory } = dataQuestions;

  // destructuring data Active Question
  const { questions, category } = data[activeQuestions];

  const onClickNext = () => {
    if (activeQuestions !== totalCategory - 1) {
      const { questions: nextQuestions } = data[activeQuestions + 1];

      setActiveQuestions((prev) => prev + 1);

      setActiveNextCategory((prev) => ({
        ...prev,
        expectedAnswer: prev.expectedAnswer + nextQuestions.length,
      }));

      setActiveNextCategory((prev) => ({ ...prev, allowNextCategory: false }));
    } else {
      setLoading(true);

      const poin = result.reduce((total, item) => total + item.poin, 0);

      const dataProfile = window.localStorage.getItem("profile");
      const dataJsonProfile = JSON.parse(dataProfile);

      handleSubmitTest(poin, dataJsonProfile);
    }
  };

  const handleSubmitTest = async (poin, object) => {
    try {
      const result = await resultTest(token, poin);

      if (result?.response?.data) {
        navigate("/");
        setLoading(false);
        return;
      }

      object["hasil_tests"] = [
        ...object.hasil_tests,
        {
          id: result.data.data.id,
          poin: result.data.data.poin,
          created_at: result.data.data.created_at,
        },
      ];

      window.localStorage.setItem("profile", JSON.stringify(object));

      const newObject = window.localStorage.getItem("profile");

      setUser(() => JSON.parse(newObject));

      setShowResult(true);

      setActiveQuestions(0);
      setActiveNextCategory(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // detect button
  useEffect(() => {
    if (result.length === activeNextCategory.expectedAnswer) {
      setActiveNextCategory((prev) => ({ ...prev, allowNextCategory: true }));
    }
  }, [result]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeQuestions]);

  return (
    <div className="min-h-screen overflow-hidden relative bg-white scrollbar scrollbar-track-primary">
      <Nav />
      {!showResult ? (
        <main className="relative z-10 w-full mb-10  ">
          <section className="animate-delay-500 animate-fade relative z-10">
            <h1 className="text-center text-white font-medium text-2xl lg:text-3xl pt-6 md:pt-8 lg:pt-16">
              Risk Level of Free Scale
            </h1>
            <div className="mx-auto mt-10 lg:mt-20 max-w-xs bg-white rounded-lg drop-shadow-lg p-3">
              <p className="text-black/80 text-center mb-1">Indikator</p>
              <h3 className="text-center text-primary text-lg lg:text-xl font-medium">
                {category}
              </h3>
            </div>
            {/* Questions */}
            <div className="mt-10 px-8 lg:px-10 mb-16">
              <div className="mx-auto w-full">
                {questions.map((question, index) => {
                  return (
                    <Question
                      key={question.id}
                      question={question}
                      setResult={setResult}
                      result={result}
                    />
                  );
                })}
              </div>
              <Button
                className={`text-white px-4 md:px-8 py-1 md:py-2 font-medium text-base lg:text-lg rounded-full mx-auto mt-10 ${
                  !activeNextCategory.allowNextCategory
                    ? "bg-black/20"
                    : "bg-primary"
                }`}
                onClick={onClickNext}
                disabled={
                  !activeNextCategory.allowNextCategory || loading
                    ? true
                    : false
                }
              >
                {activeQuestions !== totalCategory - 1 ? (
                  <div className="w-full h-full flex gap-2 items-center text-white">
                    <p>Selanjutnya</p>
                    <img
                      src={cvRight}
                      alt="cv-right"
                      className="object-cover object-center w-5 h-5"
                    />
                  </div>
                ) : (
                  <div className="w-full h-10 flex gap-2 items-center justify-center text-white ">
                    {!loading ? (
                      <>
                        <p>Kirim</p>
                        <img
                          src={check}
                          alt="check"
                          className="object-cover object-center w-5 h-5"
                        />
                      </>
                    ) : (
                      <div className="w-16 justify-self-center">
                        <ButtonLoading />
                      </div>
                    )}
                  </div>
                )}
              </Button>
            </div>
          </section>
          {/* Background */}
          <div className=" animate-fade-down w-full h-full absolute -top-1 lg:-top-24 -z-0 left-0 right-0 ">
            <img
              src={bgTest}
              alt="background-test"
              className="object-cover object-center"
            />
          </div>
        </main>
      ) : (
        <ResultTest result={result} />
      )}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Test;
