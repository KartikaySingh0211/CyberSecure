import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useGSAP(() => {
		gsap.from("#nav", {
			y: -100,
			opacity: 0,
			duration: 3,
			ease: "expo.out",
			stagger: 0.5,
		});
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<nav
				className={`${
					styles.paddingX
				} w-full flex items-center py-1 fixed top-0 z-20 ${
					scrolled ? "bg-primary" : "bg-transparent"
				}`}
			>
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					<ScrollLink
						to="home" // Replace "home" with the actual ID of the section you want to scroll to
						spy={true}
						smooth={true}
						duration={500}
						id="nav"
						onClick={() => {
							setActive("");
						}}
						className="flex items-center gap-2 cursor-pointer max-w-13 rounded-full"
					>
						<img
							src={logo}
							alt="logo"
							className="w-20 h-20 object-contain rounded-full"
						/>
						<p className="text-white text-[18px] font-bold">CyberSecure</p>
					</ScrollLink>

					<ul className="list-none hidden sm:flex flex-row gap-10">
						{navLinks.map((nav) => (
							<ScrollLink
								key={nav.id}
								to={nav.id}
								spy={true}
								smooth={true}
								duration={500}
								offset={-70} // Adjust this value if you have a fixed navbar
							>
								<li
									id="nav"
									className={`${
										active === nav.title ? "text-secondary" : "text-white"
									} hover:text-slate-400 text-[18px] font-medium cursor-pointer`}
									onClick={() => setActive(nav.title)}
								>
									{nav.title}
								</li>
							</ScrollLink>
						))}
					</ul>

					<div
						id="nav"
						className="sm:hidden flex flex-1 justify-end items-center cursor-pointer"
					>
						<img
							src={toggle ? close : menu}
							alt="menu"
							className="w-[28px] h-[28px] object-contain"
							onClick={() => setToggle(!toggle)}
						/>

						<div
							className={`${
								!toggle ? "hidden" : "flex"
							} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
						>
							<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 bg-black opacity-80 p-4 rounded-lg">
								{navLinks.map((nav) => (
									<ScrollLink
										key={nav.id}
										to={nav.id}
										spy={true}
										smooth={true}
										duration={500}
										offset={-70} // Adjust this value if you have a fixed navbar
									>
										<li
											className={`font-poppins font-medium cursor-pointer text-[16px] ${
												active === nav.title ? "text-secondary" : "text-white"
											}`}
											onClick={() => {
												setToggle(!toggle);
												setActive(nav.title);
											}}
										>
											{nav.title}
										</li>
									</ScrollLink>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
