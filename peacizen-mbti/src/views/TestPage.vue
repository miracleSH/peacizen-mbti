<template>
  <div>
    <div>
      <question-and-answer
        :questionAndAnswer="answers[seq]"
        @check="saveAnswer"
      >
        <div
          class="flex mx-auto justify-center items-center cursor-pointer"
          @click="nextAnswer"
        >
          <div class="justify-center items-center">
            <button v-if="!isLast">다음</button>
            <button v-else>결과보기</button>
          </div>
        </div>
      </question-and-answer>
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
      result: null,
      seq: 0,
    };
  },
  computed: {
    isLast() {
      return this.answers.length - 1 === this.seq;
    },
  },
  methods: {
    nextAnswer() {
      if (!this.result) {
        alert("답변을 선택해주세요.");
        return;
      }
      this.seq++;
    },
    saveAnswer(answer, type) {
      this.result = answer;
      console.log(answer, type);
    },
  },
};
</script>
