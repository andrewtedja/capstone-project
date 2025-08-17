"use client";

import React, { useEffect } from "react";

const FetchTest = () => {
	useEffect(() => {
		const handleFetch = async () => {
			const res = await fetch("/api/analyze", {
				method: "POST",
				body: JSON.stringify({ input: "cat" }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			console.log(data);
		};

		handleFetch();
	}, []);

	return <div>FetchTest</div>;
};

export default FetchTest;
