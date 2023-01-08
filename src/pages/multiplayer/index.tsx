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
				textAlign="center"
				gap={5}
				px={8}
				py={{ base: 180, md: 200 }}>
				<Text>WIP</Text>
			</Flex>
		</Layout>
	);
};

export default Multiplayer;
