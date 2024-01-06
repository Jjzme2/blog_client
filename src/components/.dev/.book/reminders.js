const reminders = [
	{
		title: "Reminder Usage",
		description: "This is used to offer an example of a reminder Object.",
		association: "This is a reminder for the Home page.",
		notes: [
			"This should probably be deleted after I've grown accustomed to the format.",
		],
		relevantDates: [
			{
				date: "2023-12-28",
				description: "This is the date that the reminder was created."
			}
		]
	},

	{
		title: "Reminder Usage continued",
		description: "The reminder object should be a JSON object, with the following properties: title, description, association, notes, relevantDates.",
		association: "DevBook/Blog",
		notes: [
			"Notes are strings.",
			"Example Usage",
			"Edit in `src/components/.dev/.book/reminders.js`",
			"This is a general use file for reminders.",
			"Relevant Dates are objects with the following properties: date, description. Where Date is the date of the event, and description is a string describing the event."
		],
		relevantDates: [
			{
				date: "2023-12-28",
				description: "This is the date that the reminder was created."
			}
		]
	},

	{
		title:"Hacks Found",
		description: "On the server, I had to hack my way to render the posts and quotes on the client. I did leave a comment in the code, but I want to make sure that I remember to fix this.",
		association: "DevBook/Blog",
		notes: [
			"Originally the data sent over included a struct and a DTO Object, I used the structKeyExists to determine which one to use.",
			"I should probably just use the DTO Object, and remove the struct.",
		],
		relevantDates: [
			{
				date: "2023-12-28",
				description: "This is the date that the reminder was created."
			},
			{
				date: "2023-12-27",
				description: "Likely date for the hack implementation."
			}
		]
	},

	{
		title: "Using the Utilities.",
		description: "I should probably use my utilities more, here is a quick example of how to use them.",
		association: "DevBook/Blog",
		notes: [
			'this.$stringUtils.convertStringToCase(currentKey, "title");',
			"Case Usage: lines 42-52 at `C:\\Users\\Jjzet\\Desktop\\C_Blog_24\\blog_client\\src\\assets\\util\\stringManipulation.js`",
		],
		relevantDates: [
			{
				date: "2023-12-29",
				description: "This is the date that the reminder was created."
			}
		]
	},

];

export default reminders;
