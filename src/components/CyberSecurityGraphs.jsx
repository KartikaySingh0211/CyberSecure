/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const CyberSecurityGraphs = ({
	globalCrimeData,
	indiaCrimeData,
	securityExpertData,
}) => {
	const globalCrimeRef = useRef();
	const indiaCrimeRef = useRef();
	const securityExpertRef = useRef();

	const renderChart = (data, svgRef, yValue, color) => {
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		const margin = { top: 20, right: 20, bottom: 30, left: 50 };
		const width = parseInt(svg.style("width")) - margin.left - margin.right;
		const height = parseInt(svg.style("height")) - margin.top - margin.bottom;

		const x = d3.scaleBand().range([0, width]).padding(0.1);
		const y = d3.scaleLinear().range([height, 0]);

		const g = svg
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`);

		x.domain(data.map((d) => d.year));
		y.domain([0, d3.max(data, (d) => d[yValue])]);

		g.append("g")
			.attr("class", "x-axis")
			.attr("transform", `translate(0, ${height})`)
			.call(d3.axisBottom(x));

		g.append("g").attr("class", "y-axis").call(d3.axisLeft(y).ticks(10));

		const bars = g
			.selectAll(".bar")
			.data(data)
			.enter()
			.append("rect")
			.attr("class", "bar")
			.attr("x", (d) => x(d.year))
			.attr("y", height)
			.attr("width", x.bandwidth())
			.attr("height", 0)
			.attr("fill", color);

		ScrollTrigger.create({
			trigger: svgRef.current,
			start: "top 100%",
			end: "bottom 70%",
			onEnter: () => {
				bars
					.transition()
					.duration(1000)
					.delay((d, i) => i * 100)
					.attr("y", (d) => y(d[yValue]))
					.attr("height", (d) => height - y(d[yValue]));
			},
		});
	};

	const resizeChart = () => {
		if (globalCrimeData) {
			renderChart(globalCrimeData, globalCrimeRef, "cyberCrimes", "#3498db");
		}
		if (indiaCrimeData) {
			renderChart(indiaCrimeData, indiaCrimeRef, "cyberCrimes", "#e74c3c");
		}
		if (securityExpertData) {
			renderChart(securityExpertData, securityExpertRef, "experts", "#2ecc71");
		}
	};

	useEffect(() => {
		resizeChart();
		window.addEventListener("resize", resizeChart);

		return () => {
			window.removeEventListener("resize", resizeChart);
		};
	}, [globalCrimeData, indiaCrimeData, securityExpertData]);

	const viewportWidth = window.innerWidth;
	useGSAP(() => {
		const widthThreshold = 1280;

		if (viewportWidth >= widthThreshold) {
			gsap.fromTo(
				"#g1",
				{ opacity: 0, x: 0 },
				{
					opacity: 1,
					duration: 2,
					x: 25,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: "#g1",
						start: "top 100%",
						end: "bottom 70%",
						scrub: 1,
					},
				}
			);

			gsap.fromTo(
				"#g2",
				{ opacity: 0, x: 600 },
				{
					opacity: 1,
					duration: 2,
					x: 565,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: "#g2",
						start: "top 100%",
						end: "bottom 70%",
						scrub: 1,
					},
				}
			);

			gsap.fromTo(
				"#g3",
				{ opacity: 0, x: 0 },
				{
					opacity: 1,
					duration: 2,
					x: 25,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: "#g3",
						start: "top 100%",
						end: "bottom 70%",
						scrub: 1,
					},
				}
			);
		} else {
			gsap.fromTo(
				"#g1",
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 2,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: "#g1",
						start: "top 100%",
						end: "bottom 70%",
						scrub: 1,
					},
				}
			);

			gsap.fromTo(
				"#g2",
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 2,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: "#g2",
						start: "top 100%",
						end: "bottom 70%",
						scrub: 1,
					},
				}
			);

			gsap.fromTo(
				"#g3",
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 2,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: "#g3",
						start: "top 100%",
						end: "bottom 70%",
						scrub: 1,
					},
				}
			);
		}
	});

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText1}>DATA</p>
				<h2 className={styles.sectionHeadText1}>
					Check out these visualizations
				</h2>
			</motion.div>
			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
				>
					Here are some graphs that show the growth of cyber security experts
					and the number of cyber crimes in India and globally. The data is
					based on the past few years and is updated regularly.
				</motion.p>
			</div>
			<section className="flex flex-col md:flex-row flex-wrap justify-around lg:block items-start">
				<div
					id="g1"
					className="bg-gray-800 p-5 rounded-3xl mt-8 w-full md:w-8/12 lg:w-5/12"
				>
					<h2 className="font-bold text-2xl text-center mb-4">
						Cyber Security Experts Growth
					</h2>
					<svg ref={securityExpertRef} width="100%" height="300"></svg>
				</div>

				<div
					id="g2"
					className="bg-gray-800 p-5 rounded-3xl mt-8 w-full md:w-8/12 lg:w-5/12"
				>
					<h2 className="font-bold text-2xl text-center mb-4">
						Cyber Crimes in India
					</h2>
					<svg ref={indiaCrimeRef} width="100%" height="300"></svg>
				</div>

				<div
					id="g3"
					className="bg-gray-800 p-5 rounded-3xl mt-8 w-full md:w-8/12 lg:w-5/12"
				>
					<h2 className="font-bold text-2xl text-center mb-4">
						Global Cyber Crime Data
					</h2>
					<svg ref={globalCrimeRef} width="100%" height="300"></svg>
				</div>
			</section>
		</>
	);
};
export default CyberSecurityGraphs;
