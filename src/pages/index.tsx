import { Button, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Layout from "../../src/components/layout";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<Flex
				flexDir="column"
				align="center"
				justify="center"
				textAlign="center"
				gap={5}
				px={8}
				py={{ base: "30vh", md: "35vh" }}>
				<Heading
					fontFamily="mono"
					fontWeight={600}
					fontSize={{ base: "4xl", md: "6xl" }}
					lineHeight="110%">
					Six letters...
					<br />
					Make some words!
				</Heading>
				<Button as={Link} href="/play" title="Play Now" size="lg">
					Play Now
				</Button>
			</Flex>
		</Layout>
	);
};

export default Home;
