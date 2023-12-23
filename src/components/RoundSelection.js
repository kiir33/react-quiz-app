import { Link } from "react-router-dom";

const RoundSelection = ({ questions, setCurrentQuestionSet }) => {
	const rounds = Object.keys(questions);

	const handleClick = (round) => {
		setCurrentQuestionSet(questions[round]);
	}

	return (
		<div className="h-screen">
			<nav className="flex text-2xl bg-rose-100">
				<Link to="/" className="hover:bg-blue-200 rounded text-6xl py-4 px-16"> 🏠 </Link>
			</nav>
			<div className="flex flex-col h-5/6 items-center justify-center text-4xl font-bold m-auto">
				{

					rounds.map((round) => {
						return (
							<Link to={{ pathname: `/rounds/${round}/questions` }}
								key={round}
								onClick={() => handleClick(round)}
								className="rounded-full text-center w-1/2 py-6 px-4  my-4 focus:outline-none bg-green-400 text-white' : 'bg-green-200 text-gray-700 hover:bg-blue-200"
							>
								{round}
							</Link>
						);
					})
				}
			</div>
		</div>
	);
};

export default RoundSelection;