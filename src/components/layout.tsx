import { Box, BoxProps, VStack } from "@chakra-ui/react";
import Metadata from "./metadata";
import NavigationBar from "./navigationBar";

interface LayoutProps extends BoxProps {
	title?: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
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
