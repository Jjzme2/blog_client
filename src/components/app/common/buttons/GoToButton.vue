<template>
  <!-- Go back button -->
  <router-link :to="destination">
    <button>{{ buttonText }}</button>
  </router-link>
</template>

<script>
export default {
  name: "GoToButton",
  props: {
    destination: {
      type: String,
      default: "/",
    },
    buttonText: {
      type: String,
      default: "Go Back",
    },
  },
  computed: {
    // from() {
    // 	return this.$route.path;
    // },
  },
};
</script>
