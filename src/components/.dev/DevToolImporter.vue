<template>
  <div>
    <h1>DevTools</h1>
	<div class="task-display" v-if="this.tasks" >
		<DevTaskViewer :tasks="tasks" :location="location"></DevTaskViewer>
	</div>

	<div class="note-display" v-if="this.notes" >
		<DevNotesViewer :notes="notes" :location="location"></DevNotesViewer>
	</div>
    <!-- <dev-notes-viewer></dev-notes-viewer> -->
  </div>
</template>

<script>
import DevTaskViewer from './DevTaskViewer.vue';
import DevNotesViewer from './DevNotesViewer.vue';

export default {
	name: 'DevToolImporter',
  components: {
    DevTaskViewer,
    DevNotesViewer,
  },
  props: {
	location: {
		type: String,
		required: true,
	},
	tasks: {
		type: Array,
		required: false,
	},
	notes: {
		type: Array,
		required: false,
	},
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
