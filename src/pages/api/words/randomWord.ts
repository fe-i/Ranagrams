import { readFileSync } from "fs";

export default async function handler(req: any, res: any) {
	const text = readFileSync("public/words.txt", "utf8");
	const words = text.split("\r\n").filter((word) => word.length === 6);
	res.status(200).send(words[Math.floor(Math.random() * words.length)]);
}
