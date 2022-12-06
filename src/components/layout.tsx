import { Box, BoxProps } from "@chakra-ui/react";
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
		<Box>
			<Metadata title={title} />
			<NavigationBar />
			{children}
		</Box>
	);
};

export default Layout;
