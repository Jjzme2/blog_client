<template>
  <DevToolImporter
	:location="this.$options.name"
    :tasks="tasks"
    :notes="notes"
	:reminders="reminders"
	/>
</template>

<script>
import DevToolImporter from "@/components/.dev/DevToolImporter.vue";


import tasks from "./.book/tasks.js";
import notes from "./.book/notes.js";
import reminders from "./.book/reminders.js";

export default {
  name: "DevBookView",
  components: {
    DevToolImporter,
  },
  data() {
    return {
      location: "DevBookView -- General",
    };
  },
  computed: {
	tasks() {
		return tasks;
	},
	notes(){
		return notes;
	},
	reminders(){
		return reminders;
	}
  }
};
</script>
