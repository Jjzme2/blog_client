<template>
  <div class="blog-header">
    <h1>{{ post.title }}</h1>
    <p class="blog-description">{{ post.description }}</p>
    <p class="blog-intent">INTENT:{{ post.intent }}</p>
    <sub>Last Updated: {{ post.modifiedOn }}</sub>
  </div>

  <div class="blog-content">
    <p>{{ post.bodyContent }}</p>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
