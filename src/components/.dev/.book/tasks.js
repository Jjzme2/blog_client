const tasks = [
  {
    title: "Clean up the Client",
    description:
      "I need to clean up the client and make it more developer friendly. I think it might be a good idea to focus on this for a few days.",
  },

  {
    title: "Determine how to remove the additional scroll bar on the overflow for body.",
    description:
      "When the page is too long, there is an additional scroll bar on the right side of the page. I need to figure out how to remove this.",
  },

  {
    title: "Make a quick way to add content to the different devBook files.",
    description: "I need to make a quick way to add content to the different devBook files. I'm thinking of making vue component that will allow me to quickly add content to the different files, and render this on the appropriate pages.",
    notes: [
		"src/components/.dev/.tests/DevViewerHeader.vue",
		"The above file is the location we will need to work in for this task.",
		"We have begun work already, check line 75.",
		"Also readd the Input Forms."
	],
  },

  {
	title: "Clean up the dynamic forms.",
	description: "I need to clean up the dynamic forms, and make sure that they are working properly.",
	notes: [
		"src/components/app/mainElements/forms/EmptyObjectForm.vue",
		"src/components/app/mainElements/forms/ObjectSelection.vue",
		"src/components/app/mainElements/forms/SimpleInput.vue",
	],
  },

  {
	title: "Clean up Dev Tools",
	description: "I need to clean up the dev tools, and make sure that they are working properly.",
	notes: [
		"src/components/.dev/DevTaskViewer.vue",
		"src/components/.dev/.tests/DevViewerHeader.vue"
	],
  },

  {
	title: "Continue working on TabledForm object and the EmptyObjectForm object.",
	description: "Both of these seem to work at the moment, but they will need to be cleaned up, and made to work more flexibly.",
	notes: [
		"src/components/app/mainElements/forms/EmptyObjectForm.vue",
		"src/components/.dev/.tests/TabledForm.vue",
	],
  },

  {
	title: "Continue working on Test View",
	description: "It will be really important for me to have a means of testing the code I am writing that is not within the actual application. I need to continue working on this.",
	notes: [
		"Consider testing frameworks, like Jest.",
	],
  }


];

export default tasks;
