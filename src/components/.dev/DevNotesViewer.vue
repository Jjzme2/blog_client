<template>
	<div>
		<h3>Developer Notes from (<p style="color: var(--important-text); display: inline-block;
">{{ location }}</p>) component</h3>
		<hr />

		<div class="note-display">
			<div v-for="note in notes" :key="note.id" class="note-card" @click="$emit('clicked', note )">
				<p style="color: var(--important-text)">{{ note }}</p>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	name: "DevNotesViewer",
	props: {
		notes: {
			type: Array,
			required: true,
			validator: (notes) => {
				if (notes.length > 0 && notes.every((note) => {
					return ( note.length > 0)
				})) {
					return true;
				} else {
					throw new Error('Invalid notes array, please provide an array of objects with a TITLE(REQUIRED) and DESCRIPTION(OPTIONAL). You can Search for ":notes=" to help with this issue.');
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
		validatedNotes() {
			if (this.notes.length > 0) {
				for(let i = 0; i < this.notes.length; i++) {
					if (this.notes[i].title === undefined) {
						this.notes[i].title = "Untitled Note";
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