import { rword } from "rword";

const useIsWord = () => {
	const isWord = async (word: string) => {
		return rword.words.includes(word);
	};

	return { isWord };
};

export default useIsWord;
