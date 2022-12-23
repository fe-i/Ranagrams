//import { rword } from "rword";

const useIsWord = () => {
	const isWord = async (word: string) => {
		const response = await fetch(`https://ranagrams.vercel.app/api/words/${word}`).then((res) =>
			res.json()
		);
		return JSON.parse(response.result); // TODO: is this necessary?
	};

	return { isWord };
};

export default useIsWord;
