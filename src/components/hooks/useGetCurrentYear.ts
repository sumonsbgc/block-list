"use client";
import React, { useEffect } from "react";

const useGetCurrentYear = () => {
	const [currentYear, setCurrentYear] = React.useState(
		new Date().getFullYear()
	);

	useEffect(() => {
		if (window && typeof window !== "undefined") {
			setCurrentYear(new Date().getFullYear());
		}
	}, []);

	return currentYear;
};

export default useGetCurrentYear;
