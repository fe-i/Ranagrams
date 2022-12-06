import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Layout from "../../components/layout";

const About: NextPage = () => {
	return (
		<Layout title="Stats">
			<Box textAlign="center" py={10} px={6}>
				Here are your stats!
			</Box>
		</Layout>
	);
};

export default About;
