<template>
  <div class="dashboard-main">
    <div class="dashboard-header">
      <!-- <p>This is a blog post page.</p> -->

      <div class="blog" v-if="post">
        <div class="blog-header">
          <h1>{{ post.title }}</h1>
          <p>{{ post.description }}</p>
          <sub>Last Updated: {{ post.modifiedOn }}</sub>
        </div>

        <div class="blog-content">
          <p>{{ post.bodyContent }}</p>
        </div>
      </div>

      <div class="blog" v-else>
        <!-- Since we haven't found a blog with that ID, let's display all the blogs. -->
        <div class="blog-header">
          <div class="blog-card" v-for="post in allPosts" :key="post">
            <h1>{{ post.title }}</h1>
            <router-link :to="`/posts/${post.id}`">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboardAbout",
  components: {},
  mounted() {
    this.$store.dispatch("posts/fetchAll");
  },
  computed: {
    post() {
      return this.$store.getters["posts/getById"](this.$route.params.id);
    },
    allPosts() {
      return this.$store.getters["posts/getAll"];
    },
  },
};
</script>
<!-- ID Value -->
<!-- 442ca8b6-5b27-4dbf-9dee-16adb9ed55e8 -->
