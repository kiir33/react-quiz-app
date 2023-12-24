import { Link } from "react-router-dom";

const Home = ({ clearLocalStorage }) => {
	return (
		<div className="h-screen flex flex-col justify-center gap-8">
			<div className="items-center justify-center bg-white text-center rounded-xl shadow-xl p-8 mx-32 mt-auto">
				<div className="text-rose-600 font-semibold text-6xl leading-normal tracking-wider">
					<p className="text-4xl">३०औं स्थापना दिवसको अवसरमा</p>
					<p>अन्तर सहकारी हाजिरी जवाफ प्रतियोगिता</p>
				</div>
				<img src="images/sg_logo.jpg" alt="Logo" className="mx-auto h-56" />
				<div className="text-emerald-600 font-semibold text-4xl leading-normal tracking-wider">
					<p className="text-gray-600 mb-2">आयोजक: </p>
					<p className="text-5xl" >सिद्धि गणेश बचत तथा ऋण सहकारी संस्था लि.</p>
					<p>चोर्चा ७, भक्तपुर</p>
				</div>
			</div>
			<Link to="/rounds" onClick={() => clearLocalStorage()} className="bg-emerald-600 text-white mx-auto mt-auto mb-16 px-16 py-4 rounded text-4xl hover:bg-emerald-800">
				START
			</Link>
		</div>
	);
}

export default Home;