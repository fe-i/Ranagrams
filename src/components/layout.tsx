import { VStack } from "@chakra-ui/react";
import Metadata from "./metadata";
import NavigationBar from "./navigationBar";

const Layout: React.FC<React.PropsWithChildren<{ title?: string }>> = ({
	title,
	children,
}) => {
	return (
		<VStack h="100vh" w="100vw">
			<Metadata title={title} />
			<NavigationBar />
			{children}
		</VStack>
	);
};

export default Layout;
