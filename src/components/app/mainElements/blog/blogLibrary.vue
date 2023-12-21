<template>
  <!-- Since we haven't found a blog with that ID, let's display all the blogs. -->
  <div class="blog-header">
    <div class="blog-card" v-for="post in allPosts" :key="post">
      <h1>{{ JSON.parse(post.category).name }}: {{ post.title }}</h1>
      <router-link :to="`/posts/${post.id}`" class="common-route"
        >Read More</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "blogLibrary",
  computed: {
    allPosts() {
      if (this.$store.getters["posts/getAll"].length > 0) {
        return this.$store.getters["posts/getAll"];
      } else {
        return [];
      }
    },
  },
};
</script>
