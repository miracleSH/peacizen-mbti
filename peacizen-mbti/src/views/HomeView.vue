<template>
  <div class="container flex flex-col mx-auto my-40 bg-blue-400 w-96 h-96">
    <div
      class="flex flex-col px-5 justify-start my-auto font-bold text-3xl gap-y-4"
    >
      <p>MBTI</p>
      <span class="text-white justify-start items-center">당신은</span>
      <span class="text-white justify-start items-center">어떤 사람</span>
      <span class="text-white justify-start items-center">인가요?</span>
    </div>
    <div
      class="justify-center items-center border rounded-md mx-auto my-auto w-28"
    >
      <router-link class="flex justify-center items-center bg-white" to="/test">
        <button
          class="justify-center items-center px-4 font-semibold text-blue-400"
        >
          테스트 시작
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
