import { Link } from "react-router-dom";

const RoundSelection = ({ currentGameName, questions, setCurrentQuestionSet }) => {
	const rounds = Object.keys(questions);

	const handleClick = (round) => {
		setCurrentQuestionSet(questions[round]);
	}

	return (
		<div className="h-screen">
			<nav className="flex text-rose-800 pe-44 font-semibold text-6xl bg-rose-100">
				<Link to="/" className="hover:bg-rose-200 rounded text-6xl py-8 px-16"> 🏠 </Link>
				<h1 className="m-auto">{currentGameName}</h1>
			</nav>
			<div className="flex flex-col h-5/6 items-center justify-center text-4xl font-bold m-auto">
				{

					rounds.map((round) => {
						return (
							<Link to={{ pathname: `/rounds/${round}/questions` }}
								key={round}
								onClick={() => handleClick(round)}
								className="rounded-full tracking-wider text-center text-white w-1/2 py-6 px-4 my-4 bg-emerald-600 hover:bg-emerald-800"
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