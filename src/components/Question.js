import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Question = ({ currentQuestion }) => {
	const { round } = useParams();
	const [answerVisible, setAnswerVisible] = useState(false);

	const revealAnswer = () => {
		setAnswerVisible(!answerVisible);
	}

	if (!currentQuestion.questions) {
		return (
			<div className="h-screen">
				<nav className="flex text-rose-800 pe-44 font-semibold text-6xl bg-rose-100">
					<Link to={`/rounds/${round}/questions`} className="hover:bg-rose-200 rounded text-6xl py-8 px-16"> ⇦ </Link>
					<h1 className="m-auto">प्रश्न नं. {currentQuestion.question_num}</h1>
				</nav>
				<div className="flex flex-col h-5/6 text-center justify-center text-5xl m-auto px-32 pt-8 leading-relaxed tracking-wider">
					<h1 className="font-bold mt-16 ">{currentQuestion.question}</h1>
					<h1 className={`bg-emerald-600 text-white hover:bg-emerald-800 font-bold w-full text-center rounded-full p-4 my-auto ${answerVisible ? '' : 'invisible'}`}>{currentQuestion.answer}</h1>
					<button className="text-xl text-white bg-slate-600 hover:bg-slate-800 uppercase rounded-full py-2 min-w-32 ms-auto mt-16"
						onClick={() => revealAnswer()}>{answerVisible ? 'Hide' : 'Answer'}</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="h-screen flex flex-col">
				<nav className="flex text-rose-800 pe-44 font-semibold text-6xl bg-rose-100">
					<Link to={`/rounds/${round}/questions`} className="hover:bg-rose-200 rounded text-6xl py-8 px-16"> ⇦ </Link>
					<h1 className="m-auto">Set {currentQuestion.question_num}</h1>
				</nav>
				<div className="flex flex-col align-middle">
					{
						currentQuestion.questions.map((question, i) => {
							return (
								<div className={`flex justify-center align-middle text-3xl py-4 px-16 ${i % 2 === 0 ? "" : "bg-slate-200"}`}>
									<h1 className="w-fit my-auto me-4 font-bold text-gray-600">{question.question_num + ")"}</h1>
									<h1 className="w-4/5 my-auto">{question.question}</h1>
									<h1 className={`bg-emerald-600 w-1/5 text-white hover:bg-emerald-800 font-bold text-center rounded-full p-4 my-auto ${answerVisible ? '' : 'invisible'}`}>{question.answer}</h1>
								</div>
							);
						})
					}
				</div>
				<div className="flex pe-16 mt-auto mb-16">
					<button className="text-xl text-white bg-slate-600 hover:bg-slate-800 uppercase rounded-full py-2 min-w-32 ms-auto mt-16"
						onClick={() => revealAnswer()}>{answerVisible ? 'Hide' : 'Answer'}</button>
				</div>
			</div>
		);
	}
}

export default Question;