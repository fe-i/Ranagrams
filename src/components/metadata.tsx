import Head from "next/head";

const Metadata: React.FC<{ title?: string | undefined }> = ({ title }) => {
	return (
		<Head>
			<title>{(title ? `${title} | ` : "") + "Ranagrams"}</title>
			<meta property="og:title" content="Ranagrams" />
			<meta property="og:description" content="Anagrams game for any occasion!" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="" />
			<meta property="og:image" content="/logo.png" />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
};

export default Metadata;
