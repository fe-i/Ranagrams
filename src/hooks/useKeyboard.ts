import { useEffect } from "react";

const useKeyboard = (handler: (this: Document, ev: KeyboardEvent) => any, dependencies: any[]) => {
	useEffect(() => {
		document.addEventListener("keydown", handler);
		return () => document.removeEventListener("keydown", handler);
	}, dependencies);
};

export default useKeyboard;
