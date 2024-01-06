<template>
	<div class="dev-viewer-header">
		<h3>
		{{ dataCollection }} from
			<notableText :includeSeparator="true" :content="location"></notableText>
		</h3>

		<!-- <div class="input-form">
			<label for="title-text">Title:</label>
			<input type="text" id="title-text" v-model="newTitle" />
		</div>

		<div class="input-form">
			<label for="description-text">Description:</label>
			<input type="text" id="description-text" v-model="newDescription" />
		</div>

		<button class="btn btn-primary" @click="submit()">
			Add to {{ dataCollection  }}
		</button> -->
	</div>
	<!-- This class (dev-viewer-header) will need to be added to the styles.
		Additionally, I wonder if it might be a good idea to place the addition to the notes here, since I have the dataCollection prop.

	-->
</template>

<script>
import notableText from "@/components/app/common/text/NotableText.vue";
export default {
	name: "DevViewerHeader",
	components: {
		notableText: notableText,
	},
	data() {
		return {
			newTitle: "",
			newDescription: "",
		}
	},
	props: {
		location: {
			type: String,
			required: true,
		},
		dataCollection: {
			type: String,
			required: true,
		},
	},
	methods: {
		// locate() {
		// 	console.log(`Located within the ${this.location} component`);
		// }
		submit() {
			console.log("Submitted");

			switch(this.dataCollection.toLowerCase()) {
				case "notes"|| "note":
					this.addToFile("notes");
					break;
				case "reminders" || "reminder":
					this.addToFile("reminders");
					break;
				case "tasks" || "task":
					this.addToFile("tasks");
					break;
				default:
					console.log(`Invalid data collection ${this.dataCollection} selected`);
			}
		},
		addToFile(filename) {
			const path = `src/components/.dev/.book/${filename}.js`;
			// We should add the data to the file here.
			//!Work in Progress, this will need to be finished.
			// Tasks are an object with a title and description.
			let newData = {
				title: this.newTitle,
				description: this.newDescription,
			};

			// Notes are a string.

			// Reminders are an object with the following:
			// title, description, association, notes, and relevantDates.
			// relevantDates is an array of objects with the following:
			// date, and description.

			console.log(newData);
			// Once we have the data, we can let the user know that it has been added to the file.
			console.log(`Added to ${path}`);
		},
	},
};
</script>