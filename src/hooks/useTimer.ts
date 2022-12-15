import { useState, useEffect } from "react";

const useTimer = (amount: number) => {
	const [time, setTime] = useState(amount);
	const [isActive, setIsActive] = useState(false);

	const toggle = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		let interval: string | number | NodeJS.Timer | undefined;
		if (isActive) {
			interval = setInterval(() => {
				if (time <= 1) toggle();
				setTime((seconds) => seconds - 1);
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [time, isActive]);

	return { time, isActive, toggle };
};

export default useTimer;
