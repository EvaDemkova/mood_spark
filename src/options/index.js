import RangeSlider from "../components/rangeSlider/RangeSlider";
import Select from "../components/select/Select";
import { capitalize } from "../utils";

const filterBy = ["type","accessibility" , "participants", "price"];

const activityType = [
	"education",
	"recreational",
	"social",
	"diy",
	"charity",
	"cooking",
	"relaxation",
	"music",
	"busywork",
];
const filterByOptions = filterBy.map((filter) => ({
	label: capitalize(filter),
	value: filter,
}));

let participantsOptions = [];
for (let i = 1; i <= 5; i++) {
	participantsOptions.push({
		label: i.toString(),
		value: i.toString(),
	});
}

const accessibilityValue = (value) => {
	return value < 0.33 ? "High" : value < 0.66 ? "Medium" : "Low";
};

const priceValue = (value) => {
	return value === 0 ? "Free" : value < 0.33 ? "$" : value < 0.66 ? "$$" : "$$$";
};

const selectOptions = {
	accessibility: {
		component: <RangeSlider min={0} max={100} currentValue={accessibilityValue} />,
	},
	type: {
		component: (
			<Select
				options={activityType.map((type) => ({
					label: capitalize(type),
					value: type,
				}))}
			/>
		),
	},
	participants: {
		component: <Select options={participantsOptions} />,
	},
	price: {
		component: <RangeSlider min={0} max={85} currentValue={priceValue} />,
	},
};

const typeIcons = {
	accessibility: "How accessible is this activity?",
	type: "What type of activity is this?",
	participants: "How many people are required to do this activity?",
	price: "How much does this activity cost?",
};

export { filterByOptions, selectOptions, activityType, typeIcons, priceValue, accessibilityValue };
