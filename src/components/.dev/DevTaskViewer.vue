<template>
	<div>
		<!-- Viewer Header Object -->
		<ViewerHeader
			:location="location"
			dataCollection="Tasks"
		/>

		<div class="task-display">
			<div v-for="task in tasks" :key="task.id" class="task-card" @click="$emit('clicked', task )">
				<h1>{{ task.title }}</h1>
				<p>{{ task.description }}</p>

				<ul v-if="task.notes">
					<h5>Notes: </h5>
					<li v-for="note in task.notes" :key="note">
						{{ note }}
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
import ViewerHeader from "@/components/.dev/.tests/DevViewerHeader.vue";

export default {
	name: "DevTaskViewer",
	components: {
		ViewerHeader,
	},
	props: {
		tasks: {
			type: Array,
			required: true,
			validator: (tasks) => {
				if (tasks.length > 0 && tasks.every((task) => {
					return ( task
					&& typeof task.title === 'string' && task.title !== ''
					&& typeof task.description === 'string' || task.description === undefined)
				})) {
					return true;
				} else {
					throw new Error('Invalid tasks array, please provide an array of objects with a TITLE(REQUIRED) and DESCRIPTION(OPTIONAL). You can Search for ":tasks=" to help with this issue.');
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
			if (this.tasks.length > 0) {
				for(let i = 0; i < this.tasks.length; i++) {
					if (this.tasks[i].title === undefined) {
						this.tasks[i].title = "Untitled Task";
					}
					if (this.tasks[i].description === undefined) {
						this.tasks[i].description = "No Description";
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