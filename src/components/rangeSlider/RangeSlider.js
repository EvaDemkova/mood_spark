import React, { useState, useRef, useEffect } from "react";

function RangeSlider({ min, max, onChange }) {
	const [value, setValue] = useState(min);
	const refContainer = useRef(null);
	const [width, setWidth] = useState(0);
	const [marginLeft, setMarginLeft] = useState(-22);

	const handleSliderChange = (event) => {
		const newValue = event.target.value;
		setValue(newValue);

		// Adjust marginLeft for the label
		const slope = (width - 3 * 22) / (max - min);
		const marginLeftValue = slope * (newValue - min) - 22;
		setMarginLeft(marginLeftValue);

		if (onChange) {
			onChange(newValue);
		}
	};

	useEffect(() => {
		if (refContainer.current) {
			setWidth(refContainer.current.offsetWidth + 2 * 22);
		}
	}, []);

	const TooltipArrow = () => (
		<svg
			className="absolute w-full h-2 left-0 top-100"
			x="0px"
			y="0px"
			viewBox="0 0 255 255"
			xmlSpace="preserve"
		>
			<defs>
				<linearGradient x1="50%" y1="92.034%" x2="50%" y2="7.2%" id="a">
					<stop offset="0%" style={{ stopColor: "#f472b6" }} />
					<stop offset="100%" style={{ stopColor: "#d946ef" }} />
				</linearGradient>
			</defs>
			<polygon fill="url(#a)" points="0,0 127.5,127.5 255,0"></polygon>
		</svg>
	);

	return (
		<div className="relative mb-4 mx-3">
			<input
				type="range"
				min={min}
				ref={refContainer}
				max={max}
				value={value}
				className="w-full appearance-none h-1.5 rounded-md bg--slate-100 focus:outline-none cursor-pointer"
				onChange={handleSliderChange}
			/>
			<div className="relative -mt-2 w-1" style={{ width: "50px" }}>
				<div
					className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
					style={{ marginLeft: `${marginLeft}px` }}
				>
					<div className="relative" style={{ left: `${10}%`, bottom: "5px" }}>
						<div className="bg-gradient-to-b from-violet-500 to-fuchsia-500 -mt-8 text-black truncate text-xs rounded py-1 px-4 select-none">
							{value + "%"}
						</div>
						<TooltipArrow />
					</div>
				</div>
			</div>
			<div className="absolute top-5 left-0 text-xs w-full flex justify-between select-none">
				<span className="text-slate-100">min</span>
				<span className="text-slate-100">max</span>
			</div>
		</div>
	);
}

export default RangeSlider;
