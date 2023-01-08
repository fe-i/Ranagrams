import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../../src/components/layout";
import LetterBox from "../components/letterBox";

const NotFound: NextPage = () => {
	return (
		<Layout title="Not Found">
			<Flex
				flexDir="column"
				align="center"
				justify="center"
				textAlign="center"
				gap={5}
				px={8}
				py={{ base: 180, md: 200 }}>
				<Flex gap={4}>
					{"404".split("").map((_, i) => (
						<LetterBox key={i} color="red.400" size="5rem" letter={_} />
					))}
				</Flex>
				<Heading
					fontFamily="mono"
					fontWeight={600}
					fontSize={{ base: "4xl", md: "6xl" }}
					lineHeight="110%">
					Page Not Found
				</Heading>
				<Text color="gray.500" fontSize="lg">
					The page you&apos;re looking for does not seem to exist.
				</Text>
				<Button as={Link} href="/" title="Home" borderRadius={10} size="lg">
					Return Home
				</Button>
			</Flex>
		</Layout>
	);
};

export default NotFound;
