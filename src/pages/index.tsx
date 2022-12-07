import { Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
	return (
		<Layout>
			<Flex
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				flexDir="column"
				fontSize="xl"
				gap="1rem"
				h="100%"
				px={8}>
				<Text>Welcome to VANAGRAMS!</Text>
				<Link href="/singleplayer">
					<Button w="8rem">Singleplayer</Button>
				</Link>
				<Button w="8rem">Multiplayer</Button>
			</Flex>
		</Layout>
	);
}
