import { Link, useParams } from "react-router-dom";

const Question = (props) => {
	const { number } = useParams();
	return (
		<div className="h-screen">
			<nav className="p-4 text-2xl bg-rose-100">
				<Link to=".."  className="hover:bg-green-400 bg-white rounded px-4 pb-4 pt-1"> &#8592;</Link>
			</nav>
			<div className="flex flex-col h-5/6 items-center justify-center m-auto">
				<div className="text-center w-full px-8 py-4 mt-4">
					<h1 className="text-xl font-semibold">Question No. {number}</h1>
					<h1 className="text-2xl font-bold">What is your name?</h1>
				</div>
					<h1 className="bg-emerald-600 text-white hover:bg-green-600 font-bold text-4xl w-full text-center px-8 py-2 mt-auto">Answer</h1>
				<button className="hover:bg-white bg-green-400 mt-auto rounded p-2 ms-auto me-8">Answer</button>
			</div>
		</div>
	);
}

export default Question;