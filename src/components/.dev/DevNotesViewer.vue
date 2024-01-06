<template>
	<div>
		<!-- Viewer Header Object -->
			<ViewerHeader
				:location="location"
				dataCollection="Notes"
				/>

		<div class="note-display">
			<div v-for="note in notes" :key="note.id" class="note-card" @click="$emit('clicked', note )">
				<p>{{ note }}</p>
			</div>
		</div>
	</div>

</template>

<script>
// import notableText from "@/components/app/common/text/NotableText.vue";
import ViewerHeader from "@/components/.dev/.tests/DevViewerHeader.vue";

export default {
	name: "DevNotesViewer",
	components: {
		ViewerHeader,
	},
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