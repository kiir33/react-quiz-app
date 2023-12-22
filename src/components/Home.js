import { Link } from "react-router-dom";

const Home = ({clearLocalStorage}) => {
	return (
		<div className="h-screen flex flex-col">
			<div className="items-center justify-center bg-white text-center rounded-xl shadow-xl px-16 pb-16 m-auto">
				<img src="images/sg_logo.jpg" alt="Logo" className="mx-auto h-56" />
				<h1 className="text-emerald-600 text-4xl font-bold mb-4">Siddhi Ganesh Saving and Cooperative Society Ltd.</h1>
				<p className="text-rose-600 text-6xl mt-12">Inter-cooperative Quiz Contest 2080</p>
			</div>
			<Link to="/rounds" onClick={() => clearLocalStorage()} className="bg-emerald-600 text-white mx-auto mb-48 px-8 py-4 rounded-l text-2xl hover:bg-button-hover-color transition-colors">Let's Start</Link>
		</div>
	);
}

export default Home;