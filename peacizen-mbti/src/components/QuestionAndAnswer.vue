<template>
  <div
    class="container flex flex-col mx-auto my-40 bg-blue-400 w-[30rem] h-[30rem]"
  >
    <div
      class="flex flex-col px-5 justify-start my-14 font-bold text-3xl gap-y-4"
    >
      <div class="text-2xl text-white">{{ questionAndAnswer.question }}</div>
      <div>
        <input
          name="answer"
          type="radio"
          value="first"
          id="firstAnswer"
          v-model="answer"
        />
        <label for="firstAnswer" class="text-lg ml-4">{{
          questionAndAnswer.firstAnswer
        }}</label>
      </div>
      <div>
        <input
          name="answer"
          type="radio"
          value="second"
          id="secondAnswer"
          v-model="answer"
        />
        <label for="secondAnswer" class="text-lg ml-4">{{
          questionAndAnswer.secondAnswer
        }}</label>
      </div>
    </div>
    <div
      class="justify-center items-center border rounded-md mx-auto my-auto w-28 bg-white hover:bg-blue-300 text-blue-400 hover:text-gray-600"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuestionAndAnswer",
  props: {
    questionAndAnswer: {
      type: Object,
      default: null,
    },
  },
  watch: {
    answer() {
      this.$emit("check", this.answer, this.questionAndAnswer.type);
    },
  },
  data() {
    return {
      answer: null,
    };
  },
};
</script>
