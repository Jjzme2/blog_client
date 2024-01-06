<template>
  <div>
    <!-- Kept separate to enusre this is separate from the component. -->
    <DevTools
      :location="this.$options.name"
      :tasks="devTasks"
      :notes="devNotes"
      :reminders="devReminders"
      @clicked="LogThis($event)"
    />

    <div class="dashboard-main">
      <div class="dashboard-header">
        <div v-if="post">
          <button class="btn btn-primary" @click="$router.push('/posts/')">
            Library
          </button>
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
      testHeaders: ["Title", "Description"],
      testDataCollection: [
        {
          title: "Test 1",
          description: "This is the first test",
        },
        {
          title: "Test 2",
          description: "This is the second test",
        },
      ],
      devTasks: [
        {
          title: "Clean the Client",
          description:
            "It will be really important for me to have a clean and current Client and Server. I will not be able to work effectively without doing this.",
          notes: [
            "This should take precendence.",
            "Start within this Component.",
          ],
        },
      ],
      devNotes: [
        "Don't delete the TEST 2 until I have determined why the issue exists -- The issue is determined and discussed in TEST 2.",
        "Improve the blog-card styles. You can find these in the BlogLibrary `src\\components\\app\\mainElements\\blog\\blogLibrary.vue` ",
      ],
      devReminders: [],
    };
  },
  beforeMount() {
    this.$store.dispatch("posts/fetchAll");
  },
  computed: {
    post() {
      var post = this.$store.getters["posts/getById"](this.$route.params.id);
      if (!post) {
        return null;
      }
      return post;
    },
  },
  watch: {
    $route() {
      this.$store.dispatch("posts/fetchAll");
      //   this.SetPost(this.$route.params.id);
    },
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
    // SetPost(id) {
    // //   //   console.log(this.$store.getters["posts/getById"](id));
    // //   console.log(id);
    // //   console.log(this.$store.getters["posts/getAll"]);
    // //   console.log(this.$store.getters["posts/getById"](id));
    // },
  },
};
</script>
