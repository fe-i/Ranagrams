import { useState } from "react";

const useRandomWord = () => {
	const [randomWord, setRandomWord] = useState("");
	const getRandomWord = () => {
		fetch("https://random-word-api.herokuapp.com/word?length=6")
			.then((response) => response.json())
			.then((data) => setRandomWord(data[0]));
	};
	return { randomWord, getRandomWord };
};

export default useRandomWord;
