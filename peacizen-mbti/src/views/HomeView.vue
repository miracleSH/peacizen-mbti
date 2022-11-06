<template>
  <div
    class="container flex flex-col mx-auto my-40 bg-blue-400 w-[30rem] h-[30rem]"
  >
    <div
      class="flex flex-col px-10 justify-start my-auto font-bold text-3xl gap-y-8"
    >
      <div>
        <span class="text-2xl">PCTI</span><br />
        <span class="text-lg">평화통일 시민행동's MBTI</span>
      </div>
      <div class="flex flex-col gap-y-3">
        <span class="text-white justify-start items-center">당신은</span>
        <span class="text-white justify-start items-center">어떤 사람</span>
        <span class="text-white justify-start items-center">인가요?</span>
      </div>
    </div>
    <div
      class="justify-center items-center border rounded-md mx-auto my-auto w-28 bg-white hover:bg-blue-300 text-blue-400 hover:text-gray-600"
    >
      <router-link class="flex justify-center items-center" to="/test">
        <button class="justify-center items-center px-4 font-semibold">
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
