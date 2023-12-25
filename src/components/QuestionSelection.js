import { Link, useParams } from "react-router-dom";

const QuestionSelection = ({ currentQuestionSet, setCurrentQuestion, selectedQuestions, addSelected }) => {
	const { round } = useParams();
	const selectedQuestionCount = selectedQuestions[round] ? selectedQuestions[round].length : 0;

	const isSelectable = (questionNumber) => {
		if (!selectedQuestions[round]) return true;
		return !selectedQuestions[round].includes(questionNumber);
	}

	const handleClick = (roundName, i) => {
		addSelected(roundName, i);
		setCurrentQuestion(currentQuestionSet[i - 1]);
	}

	return (
		<div className="h-screen flex flex-col">
			<nav className="flex text-rose-800 pe-44 font-semibold text-6xl bg-rose-100">
				<Link to={`/rounds`} className="hover:bg-blue-200 rounded text-6xl py-8 px-16"> ⇦ </Link>
				<h1 className="m-auto">{round}</h1>
			</nav>
			<div className="grid grid-cols-6 gap-6 text-4xl font-bold mx-32 my-auto">
				{
					currentQuestionSet.map((question, i) => {
						let questionNumber = i + 1;
						return (
							<Link to={{ pathname: `/rounds/${round}/questions/${questionNumber}` }}
								key={i}
								onClick={() => handleClick(round, questionNumber)}
								className={`flex flex-col rounded-full align-center justify-center text-center text-white py-4 ${isSelectable(questionNumber) ? 'bg-emerald-600 hover:bg-emerald-800' : 'bg-rose-800 hover:bg-rose-900'}`}
							>
								{question.question_num}
							</Link>
						);
					})
				}
			</div>

			<div className="bg-rose-100 py-8 pe-16 flex flex-col justify-center text-center mt-auto">
				<p className="text-5xl text-rose-800">Remaining Questions:
					<span className="font-bold ms-4">
						
						{currentQuestionSet.length - selectedQuestionCount}/{currentQuestionSet.length}
					</span>
				</p>
			</div>
		</div>
	);
}

export default QuestionSelection;