<template>
  <div v-if="tasksExist  || notesExist || remindersExist">
    <h1 style="margin-bottom:5rem;">DevTools</h1>

	<div class="task-display" v-if="tasksExist" >
		<DevTaskViewer :tasks="tasks" :location="location"></DevTaskViewer>
	</div>

	<div class="note-display" v-if="notesExist" >
		<DevNotesViewer :notes="notes" :location="location"></DevNotesViewer>
	</div>

	<div class="reminder-display" v-if="remindersExist" >
		<DevReminderViewer :reminders="reminders" :location="location"></DevReminderViewer>
	</div>
  </div>
  <div v-else>
	<sub style="margin-bottom:5rem;">
		DevTools has been imported into
		<notableText
		:includeSeparator="true"
		:content="location"
		/> This component has no Tasks, Reminders, or Notes.</sub>
	</div>
</template>

<script>
import DevTaskViewer from './DevTaskViewer.vue';
import DevNotesViewer from './DevNotesViewer.vue';
import DevReminderViewer from './DevReminderViewer.vue';

import notableText from '@/components/app/common/text/NotableText.vue';

export default {
  name: 'DevToolImporter',
  components: {
    DevTaskViewer,
    DevNotesViewer,
	DevReminderViewer,
	notableText,
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
	reminders: {
		type: Array,
		required: false,
	},
  },
  computed: {
	tasksExist() {
		return this.tasks && this.tasks.length > 0;
	},
	notesExist() {
		return this.notes && this.notes.length > 0;
	},
	remindersExist() {
		return this.reminders && this.reminders.length > 0;
	},
  },

};
</script>
