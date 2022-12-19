import { Box, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Multiplayer: NextPage = () => {
	return (
		<Layout title="Multiplayer">
			<Box textAlign="center" py={10} px={6}>
				<Link href="/singleplayer">
					<Button colorScheme="green">Play Singleplayer</Button>
				</Link>
			</Box>
		</Layout>
	);
};

export default Multiplayer;
