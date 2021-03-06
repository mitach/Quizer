import React from "react";

const Questionaire = ({ showAnswers, handleAnswer, handleNextQuestion, data: { question, correct_answer, answers } }) => {

    return (
        <div className="flex flex-col">
            <div className="bg-white text-purple-800 p-10 rounded shadow-md">
                <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question }} />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
                {answers.map((answer, idx) => {
                    const textColor = showAnswers ? answer === correct_answer ? 'text-green-500' : 'text-red-400' : 'text-purple-800'
                    return (
                        <button
                            className={`${textColor} bg-white p-4 text-purple-800 font-semibold rounded shadow`}
                            onClick={() => handleAnswer(answer)}
                            key={idx}
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                    )
                })}
            </div>
            {showAnswers && (
                <button
                    className={`ml-auto mt-6 bg-purple-600 text-white p-4 font-semibold rounded shadow`}
                    onClick={handleNextQuestion}
                >
                    Next Question
                </button>
            )}
        </div>
    );
}

export default Questionaire;