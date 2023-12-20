import { warn } from 'vue';
<template>
  <div class="question-list">
    <questionCard
      v-for="question in allQuestions"
      :key="question.id"
      :question="question"
    ></questionCard>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import questionCard from "@/components/app/common/cards/api/QuestionCard.vue";

export default {
  name: "QuestionList",
  components: {
    questionCard,
  },
  setup() {
    const store = useStore();
    const getterString = "questions/getAll";
    const dispatchString = "questions/fetchAll";

    const allQuestions = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    return { allQuestions };
  },
};
</script>
