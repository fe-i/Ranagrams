import { Flex, Text, Link, HStack } from "@chakra-ui/react";
import Layout from "../components/layout";
import LetterBox from "../components/letterBox";

export default function NotFound() {
	return (
		<Layout title="Not Found">
			<Flex
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				flexDir="column"
				h="100%"
				px={8}>
				<HStack spacing={5}>
					{"404".split("").map((_, i) => (
						<LetterBox key={i} color="red.400" size="5rem" letter={_} />
					))}
				</HStack>
				<Text fontSize="30px" mt={3} mb={2}>
					Page Not Found
				</Text>
				<Text color="gray.500" fontSize="xl" mb={6}>
					The page you&apos;re looking for does not seem to exist.
				</Text>
				<Link
					href="/"
					px={20}
					py={2.5}
					borderRadius={15}
					fontSize="xl"
					bgGradient="linear(to-r, blue.300, blue.500)"
					color="white"
					_hover={{
						bgGradient: "linear(to-r, blue.400, blue.600)"
					}}>
					Go to Home
				</Link>
			</Flex>
		</Layout>
	);
}
