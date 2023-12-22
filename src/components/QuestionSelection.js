import { Link, useParams } from "react-router-dom";

const QuestionSelection = ({ selectedQuestions, addSelected }) => {
	const { round } = useParams();
	const questionNumbers = Array.from({ length: 20 }, (_, index) => index + 1);

	const isSelectable = (questionNumber) => {
		const roundNumber = parseInt(round);
		if (!selectedQuestions[roundNumber]) return true;

		return !selectedQuestions[roundNumber].includes(questionNumber);
	}

	return (
		<div className="h-screen">
			<nav className="flex text-rose-800 pe-44 font-semibold text-6xl bg-rose-100">
				<Link to={`/rounds`} className="hover:bg-blue-200 rounded text-6xl py-4 px-16"> ⇦ </Link>
				<h1 className="m-auto">Round {round}</h1>
			</nav>
			<div className="grid grid-cols-4 gap-8 text-4xl font-bold m-32">
				{
					questionNumbers.map((number, i) => {
						let questionNumber = i + 1;
						return (
							<Link to={{ pathname: `/rounds/${round}/questions/${questionNumber}` }}
								key={i}
								onClick={() => addSelected(parseInt(round), questionNumber)}
								className={`flex flex-col rounded-full align-center justify-center text-center py-6 min-w-20 ${isSelectable(questionNumber) ? 'bg-green-400 hover:bg-blue-200' : 'bg-slate-400' }`}
							>
								{number}
							</Link>
						);
					})
				}
			</div>
		</div>
	);
}

export default QuestionSelection;