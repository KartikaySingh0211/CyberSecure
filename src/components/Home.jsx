import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { homeVideo } from "../assets";

function Home() {
	const headingRef = useRef();
	const endRef = useRef();

	gsap.registerPlugin(ScrollToPlugin);

	const timeline = gsap.timeline();

	useGSAP(() => {
		timeline.from(headingRef.current, {
			y: 400,
			opacity: 0,
			duration: 1.5,
			delay: 1,
			ease: "power4.out",
		});
		timeline.to(headingRef.current, {
			y: -600,
			opacity: 0,
			duration: 2,
			ease: "power4.inOut",
		});
	}, []);

	return (
		<>
			<section className="relative w-full h-screen mx-auto">
				<div className="video-container">
					<video
						className="absolute top-0 left-0 w-full h-full object-cover"
						autoPlay
						loop
						muted
					>
						<source src={homeVideo} type="video/mp4" />
						Your browser does not support HTML video.
					</video>
					<div className="gradient-overlay" />
					<div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
						<h1
							ref={headingRef}
							className="text-4xl md:text-6xl font-bold mb-6"
						>
							Welcome to CyberSecure
						</h1>
					</div>
				</div>
				<div ref={endRef} />
			</section>
		</>
	);
}

export default Home;
