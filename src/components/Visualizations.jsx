import { SectionWrapper } from "../hoc";
import CyberSecurityGraphs from "./CyberSecurityGraphs";
import {
	globalCrimeData,
	indiaCrimeData,
	securityExpertData,
} from "../constants";

const Visualizations = () => {
	return (
		<div>
			<CyberSecurityGraphs
				globalCrimeData={globalCrimeData}
				indiaCrimeData={indiaCrimeData}
				securityExpertData={securityExpertData}
			/>
		</div>
	);
};

export default SectionWrapper(Visualizations, "visualizations");
