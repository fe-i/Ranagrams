import { Flex, Text, Button, VStack } from "@chakra-ui/react";
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
				<VStack fontSize={40} fontWeight="bold" spacing={0}>
					<Text>Six letters...</Text>
					<Text>Make some words!</Text>
				</VStack>
				<Link href="/singleplayer">
					<Button w="8rem">Singleplayer</Button>
				</Link>
				<Link href="/multiplayer">
					<Button w="8rem">Multiplayer</Button>
				</Link>
			</Flex>
		</Layout>
	);
}
