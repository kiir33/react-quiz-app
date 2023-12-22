import { Link } from "react-router-dom";

const RoundSelection = () => {
	const roundButtons = ["सहकारी तथा सिद्धि गणेश", "सामान्य ज्ञान तथा समसामयिक", "Rapid Fire", "Audio Visual"];

	return (
		<div className="h-screen">
			<nav className="p-4 text-2xl bg-rose-100">
				<Link to="/" className="hover:underline">Home</Link>
			</nav>
			<div className="flex flex-col h-5/6 items-center justify-center text-4xl font-bold m-auto">
				{
					roundButtons.map((round, i) => {
						const dataToPass = { roundName: 'John Doe', index: i};
						return (
							<Link to={{ pathname: "/questions", state: dataToPass}}
								key={round}
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