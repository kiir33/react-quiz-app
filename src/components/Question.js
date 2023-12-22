import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Question = () => {
	const { round, number } = useParams();
	const [answerVisible, setAnswerVisible] = useState(false);

	const revealAnswer = () => {
		setAnswerVisible(!answerVisible);
	}

	return (
		<div className="h-screen">
			<nav className="flex text-rose-800 pe-44 font-semibold text-6xl bg-rose-100">
				<Link to={`/rounds/${round}/questions`} className="hover:bg-blue-200 rounded text-6xl py-4 px-16"> ⇦ </Link>
				<h1 className="m-auto">Q. No. {number}</h1>
			</nav>
			<div className="flex flex-col h-5/6 items-center justify-center text-5xl m-auto">
				<h1 className=" font-bold mt-16">What is your name?</h1>
				<h1 className={`bg-emerald-600 text-white hover:bg-blue-600 font-bold w-full text-center px-8 py-6 mt-auto ${answerVisible ? '' : 'invisible'}`}>Answer</h1>
				<button className="text-xl text-white bg-emerald-600 hover:bg-blue-600 uppercase rounded-full py-4 min-w-36 ms-auto me-16 mt-16"
				onClick={()=> revealAnswer()}>{answerVisible ? 'Hide':'Reveal'}</button>
			</div>
		</div>
	);
}

export default Question;