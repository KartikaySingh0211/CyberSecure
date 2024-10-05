import {
	iconfacebook,
	iconinstagram,
	iconpinterest,
	icontwitter,
	iconyoutube,
	logo,
} from "../assets";
import { SectionWrapper } from "../hoc";

const Links = () => {
	return (
		<footer className="bg-veryDarkBlue mt-11">
			<div className="container flex flex-col-reverse justify-around px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
				<div className="flex flex-col-reverse justify-center items-center space-y-12 md:flex-col md:space-y-0 md:items-center">
					<div className="mx-auto my-6 text-center text-white md:hidden">
						Copyright &copy; 2024, All Rights Reserved
					</div>
					<div className="mt-6 md:mt-0">
						<img src={logo} className="h-20 w-20 mb-5" alt="logo" />
					</div>
					<div className="flex justify-center space-x-4">
						<a href="#">
							<img src={iconfacebook} alt="" className="h-8" />
						</a>
						<a href="#">
							<img src={iconyoutube} alt="" className="h-8" />
						</a>
						<a href="#">
							<img src={icontwitter} alt="" className="h-8" />
						</a>
						<a href="#">
							<img src={iconpinterest} alt="" className="h-8" />
						</a>
						<a href="#">
							<img src={iconinstagram} alt="" className="h-8" />
						</a>
					</div>
				</div>

				<div className="flex justify-around space-x-32">
					<div className="flex flex-col space-y-3 text-white">
						<a href="#" className="hover:underline">
							Home
						</a>
						<a href="#" className="hover:underline">
							Pricing
						</a>
						<a href="#" className="hover:underline">
							Products
						</a>
						<a href="#" className="hover:underline">
							About
						</a>
					</div>
					<div className="flex flex-col space-y-3 text-white">
						<a href="#" className="hover:underline">
							Careers
						</a>
						<a href="#" className="hover:underline">
							Community
						</a>
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>
					</div>
				</div>

				<div className="flex flex-col justify-between items-center">
					<form>
						<div className="flex space-x-3">
							<input
								type="text"
								className="flex-1 px-4 rounded-full focus:outline-none bg-white text-black"
								id="input"
								placeholder="Updates in your inbox"
							/>
							<label className="hidden">hidden</label>
							<button
								type="submit"
								className="px-6 py-2 text-white rounded-full bg-gray-700 hover:bg-slate-900 focus:outline-none"
							>
								Go
							</button>
						</div>
					</form>
					<div className="hidden text-white md:block">
						Copyright &copy; 2024, All Rights Reserved
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SectionWrapper(Links, "links");
