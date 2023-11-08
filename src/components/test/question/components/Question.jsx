import { useState } from "react";

const Question = ({ question, setResult, result }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const onAnswerSelected = (index) => {
    // Melakukan pilihan pada button
    setSelectedAnswer(index);

    // Cek apakah id sudah ada?
    // [{id: question, poin}]
    const existingId = result.findIndex((item) => item.id === question.id);

    if (existingId !== -1) {
      const updatedResult = [...result];
      updatedResult[existingId] = { id: question.id, poin: index };
      setResult(updatedResult);
    } else {
      setResult([...result, { id: question.id, poin: index }]);
    }

    // Scroll
    window.scrollBy(0, 200);
  };

  // Style Button
  const buttonQuestion =
    "list-none w-1/3 px-4 py-1 md:py-2 text-center rounded-full border font-medium text-base lg:text-lg transition-colors duration-200 cursor-pointer hover:drop-shadow-xl";

  return (
    <div className="mt-10" key={question.id}>
      <p className="font-medium lg:text-xl text-black/90 mb-4 lg:mb-6  text-center">
        {question.question}
      </p>
      <ul className="flex gap-4 md:gap-10 md:w-4/5 lg:w-2/3 mx-auto pb-10 border-b border-black/10 items-center justify-around md:justify-center">
        <li
          onClick={() => onAnswerSelected(3)}
          className={`${buttonQuestion} ${
            selectedAnswer !== 3
              ? "border-primary text-primary hover:bg-primary hover:text-white"
              : "bg-primary text-white"
          } `}
        >
          {question.choices[2]}
        </li>
        <li
          onClick={() => onAnswerSelected(2)}
          className={`${buttonQuestion} ${
            selectedAnswer !== 2
              ? "border-blue text-blue hover:bg-blue hover:text-white"
              : "bg-blue text-white"
          }`}
        >
          {question.choices[1]}
        </li>
        <li
          onClick={() => onAnswerSelected(1)}
          className={`${buttonQuestion} ${
            selectedAnswer !== 1
              ? "border-black/80 text-black/80 hover:bg-black/80 hover:text-white"
              : "bg-black/80 text-white"
          }`}
        >
          {question.choices[0]}
        </li>
      </ul>
    </div>
  );
};

export default Question;
