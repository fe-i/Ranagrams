import Head from "next/head";

const Metadata: React.FC<{ title?: string }> = ({ title }) => {
	return (
		<Head>
			<title>{(title ? `${title} | ` : "") + "Vanagrams"}</title>
			<meta property="og:title" content="Vanagrams" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="" />
			<meta property="og:image" content="steak.png" />
			<meta property="og:description" content="Anagrams ripoff." />
			<meta name="theme-color" content="#69eeff" />
		</Head>
	);
};

export default Metadata;
