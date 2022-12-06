import { Box, Image, Text, Link } from "@chakra-ui/react";
import Layout from "../components/layout";

export default function NotFound() {
	return (
		<Layout title="Not Found">
			<Box textAlign="center" alignItems="center" py={10} px={6}>
				<Image margin="auto" width={250} alt="404" src="404.svg" />
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
					bgGradient="linear(to-r, red.300, red.500)"
					color="white"
					fontWeight="bold"
					_hover={{
						bgGradient: "linear(to-r, red.400, red.600)",
					}}>
					Go to Home
				</Link>
			</Box>
		</Layout>
	);
}
