import React from "react";

interface QuestionWithOptionsProps {
  question: string;
  options: string[];
}

const QuestionWithOptions: React.FC<QuestionWithOptionsProps> = ({
  question,
  options,
}) => {
  return (
    <div>
      <h3 className="text-lg text-black">{question}</h3>
      <div className="space-x-4 mt-2 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-8">
        {options.map((option, index) => (
          <label key={index} className="inline-flex items-center ml-4">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
              name={question.replace(/\s+/g, "-").toLowerCase()}
              value={option.toLowerCase().replace(/\s+/g, "-")}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionWithOptions;
