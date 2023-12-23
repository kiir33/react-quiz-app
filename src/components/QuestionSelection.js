import { Link, useParams } from "react-router-dom";

const QuestionSelection = ({ currentQuestionSet, setCurrentQuestion, selectedQuestions, addSelected }) => {
	const { round } = useParams();

	const isSelectable = (questionNumber) => {
		const roundNumber = parseInt(round);
		if (!selectedQuestions[roundNumber]) return true;

		return !selectedQuestions[roundNumber].includes(questionNumber);
	}

	const handleClick = (round, i) => {
		addSelected(parseInt(round), i+1);
		setCurrentQuestion(currentQuestionSet[i]);
	}

	return (
		<div className="h-screen">
			<nav className="flex text-rose-800 pe-44 font-semibold text-6xl bg-rose-100">
				<Link to={`/rounds`} className="hover:bg-blue-200 rounded text-6xl py-4 px-16"> ⇦ </Link>
				<h1 className="m-auto">{round}</h1>
			</nav>
			<div className="grid grid-cols-4 gap-8 text-4xl font-bold m-32">
				{
					currentQuestionSet.map((_question, i) => {
						let questionNumber = i + 1;
						return (
							<Link to={{ pathname: `/rounds/${round}/questions/${questionNumber}` }}
								key={i}
								onClick={() => handleClick(round, i)}
								className={`flex flex-col rounded-full align-center justify-center text-center py-6 min-w-20 ${isSelectable(questionNumber) ? 'bg-green-400 hover:bg-blue-200' : 'bg-slate-400'}`}
							>
								{questionNumber}
							</Link>
						);
					})
				}
			</div>
		</div>
	);
}

export default QuestionSelection;