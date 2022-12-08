import { Box, Image, Text, Link, HStack } from "@chakra-ui/react";
import Layout from "../components/layout";
import LetterBox from "../components/letterBox";

export default function NotFound() {
	return (
		<Layout title="Not Found">
			<Box textAlign="center" alignItems="center" py={10} px={6}>
				<HStack justifyContent="center" spacing={5}>
					{"404".split("").map((_, i) => (
						<LetterBox key={i} disabled={true} letter={_} />
					))}
				</HStack>
				<Text fontSize="25px" mt={3} mb={2}>
					Page Not Found
				</Text>
				<Text color="gray.500" mb={6}>
					The page you&apos;re looking for does not seem to exist.
				</Text>
				<Link
					href="/"
					px={20}
					py={2.5}
					borderRadius={15}
					bgGradient="linear(to-r, blue.300, blue.500)"
					color="white"
					fontWeight="bold"
					_hover={{
						bgGradient: "linear(to-r, blue.400, blue.600)",
					}}>
					Go to Home
				</Link>
			</Box>
		</Layout>
	);
}
