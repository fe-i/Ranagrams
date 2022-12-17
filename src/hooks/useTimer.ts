import { useState, useEffect } from "react";

const useTimer = (amount: number) => {
	const [time, setTime] = useState(amount);
	const [isActive, setIsActive] = useState(false);

	const resetTimer = () => {
		setIsActive(false);
		setTime(amount);
	};

	const toggleTimer = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		let interval: string | number | NodeJS.Timer | undefined;
		if (isActive) {
			interval = setInterval(() => {
				if (time <= 1) toggleTimer();
				setTime((seconds) => seconds - 1);
			}, 1000);
		} else clearInterval(interval);
		return () => clearInterval(interval);
	}, [time, isActive]);

	return { time, isActive, resetTimer, toggleTimer };
};

export default useTimer;
