import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle clear button
  const handleClear = () => {
    setInput("");
  };

  // Handle calculation
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="rounded flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">
          Calculator
        </h2>

        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <input
            type="text"
            className="w-full p-4 text-right text-2xl bg-gray-800 text-white border-none rounded-md focus:outline-none"
            value={input}
            disabled
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="bg-orange-500 p-4 text-xl text-white rounded-lg hover:bg-orange-600 transition duration-200"
            onClick={() => handleClick("+")}
          >
            +
          </button>

          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="bg-orange-500 p-4 text-xl text-white rounded-lg hover:bg-orange-600 transition duration-200"
            onClick={() => handleClick("-")}
          >
            -
          </button>

          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="bg-orange-500 p-4 text-xl text-white rounded-lg hover:bg-orange-600 transition duration-200"
            onClick={() => handleClick("*")}
          >
            *
          </button>

          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-300 p-4 text-xl rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className="bg-orange-500 p-4 text-xl text-white rounded-lg hover:bg-orange-600 transition duration-200"
            onClick={handleEvaluate}
          >
            =
          </button>
          <button
            className="bg-orange-500 p-4 text-xl text-white rounded-lg hover:bg-orange-600 transition duration-200"
            onClick={() => handleClick("/")}
          >
            /
          </button>

          <button
            className="col-span-2 bg-gray-500 p-4 text-xl text-white rounded-lg hover:bg-gray-600 transition duration-200"
            onClick={handleClear}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
