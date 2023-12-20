<template>
  <!-- Question List -->
  <div class="question-card" @click="openQuestion">
    <span hidden>{{ question.id }}</span>
    <div class="question-title">{{ question.content }}</div>
    <table>
      <tr>
        <td>Asked by:</td>
        <td>{{ question.username }}</td>
      </tr>
      <tr>
        <td>Asked on:</td>
        <td>{{ formattedDate }}</td>
      </tr>
      <tr>
        <td>Answered:</td>
        <td>
          <input type="checkbox" :checked="question.answered" disabled />
        </td>
      </tr>
    </table>
    <unfoldForm
      v-if="question.answered"
      prompt="See Answer"
      sendMessage="Close"
      formPosition="below"
    >
      <table>
        <tr>
          <td>Answer:</td>
          <td>{{ question.answer }}</td>
        </tr>
      </table>
    </unfoldForm>
    <textarea
      disabled
      class="unanswered"
      v-else
      placeholder="Answer not available"
    ></textarea>
  </div>
</template>

<script>
import unfoldForm from "@/components/app/common/unfolds/UnfoldForm.vue";
export default {
  name: "QuestionCard",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  components: {
    unfoldForm,
  },
  computed: {
    formattedDate() {
      return new Date(this.question.created_on).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });
    },
  },
  emit: ["questionSelected"],
  methods: {
    openQuestion() {
      this.$emit("questionSelected", this.question);
    },
  },
};
</script>

<style scoped>
.question-card {
  border-radius: 15px;
  border: 1px solid #ccc;
  height: 100%;
  margin: 1rem auto;
  padding: 1rem;
  position: relative;
  width: 100%;
}

.question-card table {
  margin: 1rem auto;
}

.question-card table td {
  padding: 0.5rem;
}

.question-card table td:first-child {
  font-weight: bold;
  color: var(--secondary-text-color);
}

.question-card table td:last-child {
  text-align: right;
}

.question-card table tr:last-child td {
  border-top: 1px solid #ccc;
}

.question-card .question-title {
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--primary-text-color);
}
</style>
