import { useState, useEffect } from "react";

const useTimer = (amount: number) => {
	const [time, setTime] = useState(amount);
	const [isActive, setIsActive] = useState(false);

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
		}
		return () => clearInterval(interval);
	}, [time, isActive]);

	return { time, isActive, toggleTimer };
};

export default useTimer;
