import { Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Layout from "../../../src/components/layout";

const Multiplayer: NextPage = () => {
	return (
		<Layout title="Multiplayer">
			<Flex
				flexDir="column"
				align="center"
				justify="center"
				fontSize="xl"
				px={6}
				py={{ base: "22vh", md: "18vh" }}
				gap={5}>
				<Text>Work In Progress</Text>
			</Flex>
		</Layout>
	);
};

export default Multiplayer;
