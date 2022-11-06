<template>
  <div class="container flex flex-col">
    <div>{{ questionAndAnswer.question }}</div>
    <div>{{ questionAndAnswer.firstAnswer }}</div>
    <div>{{ questionAndAnswer.secondAnswer }}</div>
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
};
</script>
