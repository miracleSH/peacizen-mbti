<template>
  <div>
    <div>
      <question-and-answer :questionAndAnswer="answers[seq]" />
    </div>
    <div>
      <button @click="nextAnswer">다음</button>
    </div>
  </div>
</template>
<script>
import answers from "@/assets/answers.json";
import QuestionAndAnswer from "@/components/QuestionAndAnswer.vue";
export default {
  name: "TestPage",
  components: { QuestionAndAnswer },
  data() {
    return {
      answers: answers,
      test: null,
      seq: 0,
    };
  },
  methods: {
    nextAnswer() {
      this.seq++;
    },
  },
};
</script>
