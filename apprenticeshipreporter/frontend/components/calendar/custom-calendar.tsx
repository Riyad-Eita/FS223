"use client"

import { Calendar } from "@/components/ui/calendar";
import React from "react";

const CustomCalendar = () => {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<div className="p-4">
			<h2>Calendar</h2>
			<div className="w-fit pt-6 pb-6">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border"
				/>
			</div>
		</div>
	);
};

export default CustomCalendar;
