import { VStack } from "@chakra-ui/react";
import Metadata from "./metadata";
import NavigationBar from "./navigationBar";

const Layout: React.FC<React.PropsWithChildren<{ title?: string }>> = ({ title, children }) => {
	return (
		<VStack w="100vw" h="100vh">
			<Metadata title={title} />
			<NavigationBar />
			{children}
		</VStack>
	);
};

export default Layout;
