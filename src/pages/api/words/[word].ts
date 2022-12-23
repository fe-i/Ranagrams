import { readFileSync } from "fs";

const getAnagrams = (string: string) => {
	const anagrams: string[] = [];

	if (string.length === 0) return anagrams;

	function permute(str: string, prefix: string = "") {
		if (str.length === 0) {
			anagrams.push(prefix);
		} else {
			for (let i = 0; i < str.length; i++) {
				const char = str[i];
				const rest = str.substring(0, i) + str.substring(i + 1);
				permute(rest, prefix + char);
			}
		}
	}

	function combine(str: string, prefix: string = "") {
		if (prefix.length > 0) {
			anagrams.push(prefix);
		}
		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			const rest = str.substring(i + 1);
			combine(rest, prefix + char);
		}
	}

	permute(string);
	combine(string);

	return Array.from(new Set(anagrams)).filter((anagram) => anagram.length >= 3);
};

export default async function handler(req: any, res: any) {
	const { word } = req.query;
	const text = readFileSync("public/words.txt", "utf8");
	const result = text.split("\r\n").includes(word);
	const anagrams = getAnagrams(word); //TODO: return not all anagrams
	res.status(result ? 200 : 404).json(result ? { word, result, anagrams } : { word, result });
}
