<template>
  <div>
    <!-- Kept separate to enusre this is separate from the component. -->
    <DevTools
      :tasks="devTasks"
      :location="this.$options.name"
      :notes="devNotes"
      @clicked="LogThis($event)"
    />

    <div class="dashboard-main">
      <div class="dashboard-header">
        <div v-if="post">
          <BlogPost :post="post" />
        </div>

        <div v-else>
          <button class="btn btn-primary" @click="$router.push('/posts/new')">
            Create a new blog post
          </button>
          <BlogLibrary />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/app/mainElements/blog/storedPost.vue";
import BlogLibrary from "@/components/app/mainElements/blog/blogLibrary.vue";

// Dev
import DevTools from "@/components/.dev/DevToolImporter.vue";

export default {
  name: "dashboardPost",
  components: {
    BlogPost,
    BlogLibrary,
    DevTools,
  },
  data() {
    return {
      devTasks: [
        {
          title: "Create a new blog post",
          description: "Add a button to create a new blog post.",
        },
        {
          title: "Try out Dev Task Viewer",
        },
      ],
      devNotes: [
        "Continue working on DevTools importer.",
        "Continue working on Blog Creation Method",
        "Ccontinue working on Dynamic form that will render the data from the Category Object with (Name) and (id) keys.",
        "Find a way to make the DevTools more helpful. I would like them to be able to be used in any component, and also in a general way.",
      ],
    };
  },
  methods: {
    LogThis(task) {
      // You can customize this log message based on your requirements
      var obj = {
        title: task.title,
        description: task.description || "No Description",
      };

      console.log(`Clicked ${JSON.stringify(obj)}`);
    },
  },
  mounted() {
    this.$store.dispatch("posts/fetchAll");
  },
  computed: {
    post() {
      return this.$store.getters["posts/getById"](this.$route.params.id);
    },
  },
};
</script>
