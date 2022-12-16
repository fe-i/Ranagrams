const useIsWord = () => {
	const isWord = async (word: string) => {
		const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((response) => response.json())
			.then((d) => !!d.length);
		return result;
	};

	return { isWord };
};

export default useIsWord;
