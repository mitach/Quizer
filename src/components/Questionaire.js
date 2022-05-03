import React from "react";

const Questionaire = ({ handleAnswer, data: { question, correct_answer, incorrect_answers }, }) => {

    const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

    return (
        <div>
            <div className="bg-white text-purple-800 p-10 rounded shadow-md">
                <h2 className="text-2xl" dangerouslySetInnerHTML={{ __html: question }} />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
                {shuffledAnswers.map(answer => (
                    <button
                        className={`bg-white p-4 text-purple-800 font-semibold rounded shadow`}
                        onClick={() => handleAnswer(answer)}
                        key={answer}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Questionaire;