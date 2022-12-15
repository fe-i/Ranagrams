import Head from "next/head";

const Metadata: React.FC<{ title?: string }> = ({ title }) => {
	return (
		<Head>
			<title>{(title ? `${title} | ` : "") + "Ranagrams"}</title>
			<meta property="og:title" content="Ranagrams" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="" />
			<meta property="og:image" content="steak.png" />
			<meta property="og:description" content="Anagrams ripoff." />
			<meta name="theme-color" content="#ffffff" />
		</Head>
	);
};

export default Metadata;
