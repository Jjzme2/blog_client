<template>
	<div>
		<!-- Viewer Header Object -->
			<ViewerHeader
				:location="location"
				dataCollection="Reminders"
				/>


		<div class="reminder-display">
			<div v-for="reminder in reminders" :key="reminder.id" class="reminder-card" @click="$emit('clicked', reminder )">
				<h1>{{ reminder.title }}</h1>
				<sub>{{ reminder.association }}</sub>
				<p>{{ reminder.description }}</p>

				<hr />
				<h5>Notes:</h5>
				<ul v-for="note in reminder.notes" :key="note">
				{{ note }}</ul>

				<hr />
				<h5>Relevant Dates:</h5>
				<ul v-for="date in reminder.relevantDates" :key="date">
				{{ date.date }} || {{ date.description }}</ul>
				<hr />

			</div>
		</div>
	</div>

</template>

<script>
import ViewerHeader from "@/components/.dev/.tests/DevViewerHeader.vue";
export default {
	name: "DevReminderViewer",
	components: {
		ViewerHeader,
	},
	props: {
		reminders: {
			type: Array,
			required: true,
			validator: (reminders) => {
				if (reminders.length > 0 && reminders.every((reminder) => {
					return ( reminder
					&& typeof reminder.title === 'string' && reminder.title !== ''
					&& typeof reminder.description === 'string' || reminder.description === undefined)
				})) {
					return true;
				} else {
					throw new Error('Invalid reminders array, please provide an array of objects with a TITLE(REQUIRED) and DESCRIPTION(OPTIONAL). You can Search for ":reminders=" to help with this issue.');
					return false;
				}
			},
		},
		location: {
			type: String,
			required: true,
		},
	},
	computed: {
		validatedTasks() {
			if (this.reminders.length > 0) {
				for(let i = 0; i < this.reminders.length; i++) {
					if (this.reminders[i].title === undefined) {
						this.reminders[i].title = "Untitled Task";
					}
					if (this.reminders[i].description === undefined) {
						this.reminders[i].description = "No Description";
					}
				}
			} else {
				return [];
			}
		}
	},
	// methods: {
	// 	locate() {
	// 		console.log(`Located within the ${this.location} component`);
	// 	}
	// },
};
</script>