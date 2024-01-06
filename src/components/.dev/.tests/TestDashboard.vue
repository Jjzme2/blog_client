<template>
  <div>
    <TabledForm :headers="objectKeys" :dataCollection="retrievedData"></TabledForm>
  </div>
</template>

<script>
import TabledForm from "@/components/.dev/.tests/TabledForm.vue";

export default {
  name: "TestView",
  components: {
    TabledForm,
  },
  data() {
    return {
      collection: "posts",
    };
  },
  mounted() {
    this.$store.dispatch(`${this.collection}/getEmpty`);
  },
  computed: {
	retrievedData() {
		return this.$store.getters[`${this.collection}/getEmpty`];
	},
	objectKeys() {
		var keys = this.retrievedData ? Object.keys(this.retrievedData) : [];
		return keys;
	},
	// objectValues() {
	// 	return Object.values(this.retrievedData);
	// },
  }};
</script>
