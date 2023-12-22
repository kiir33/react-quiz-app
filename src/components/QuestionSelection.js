import { Link } from "react-router-dom";

const QuestionSelection = (props) => {
	// debugger;
	// const { state } = props.location;
	// const { roundName, index } = state;
	const questionNumbers = Array.from({ length: 20 }, (_, index) => index+1);
	return (
		<div className="h-screen">
			<nav className="flex ps-8 pe-28 py-2 font-bold text-6xl bg-rose-100">
				<Link to="/rounds" className="hover:bg-green-400 bg-white rounded px-6 pb-6"> &#8592;</Link>
				<h1 className="m-auto">General Round</h1>
			</nav>
			<div className="grid grid-cols-4 gap-8 text-4xl font-bold m-32">
				{
					questionNumbers.map((number, i) => {
						const dataToPass = { roundName: 'John Doe', index: i};
						return (
							<Link to={{ pathname: `/questions/${i+1}`, state: dataToPass}}
								key={number}
								className="flex flex-col rounded align-center justify-center text-center min-h-24 min-w-16 focus:outline-none bg-green-400 text-white' : 'bg-green-200 text-gray-700 hover:bg-blue-200"
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