<template>
  <section class="text-white mb-[30px] mt-[125px]">
    <div class="flex justify-center mb-[25px]">
      <h2 class="font-robotoSlab font-[700] text-center text-[48px] border-b">Projects</h2>
    </div>
    <div class="mb-[28px] flex gap-[15px] px-[125px] justify-around">
      <div class="w-1/2 flex flex-col">
        <div class="flex items-center mb-[30px]">
          <img class="pr-[10px]" :src="checked" alt="" />
          <p class="border-l-2 font-inter font-bold pl-[12px]">FINISHED</p>
        </div>
        <div class="flex flex-col h-full justify-between">
          <h2 class="font-robotoSlab font-[900] text-[50px] leading-[70px]">Quiz game</h2>
          <p class="font-robotoSlab font-[300] text-[22px]">Create, solve quizzes publicly or privately, and enhance your ratings on our Quiz Page!</p>
          <p class="my-[20px]">Technologies used:</p>
          <div class="flex border border-white p-5 rounded-[15px] items-center max-w-full w-fit flex-wrap">
            <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black rounded-[15px]">HTML</p>
            <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black whitespace-nowrap rounded-[15px]">TailWind CSS</p>
            <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black whitespace-nowrap rounded-[15px]">React JS</p>
            <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black rounded-[15px]">Firebase</p>
          </div>
          <button class="bg-grey px-[50px] py-[15px] rounded-[15px] font-DM font-bold my-[34px] w-fit">VISIT APP WEBSITE</button>
        </div>
      </div>
      <img class="w-1/2 max-h-[400px] max-w-[400px] rounded-[16px] opacity-80" :src="quizG" alt="" />
    </div>
    <div class="flex gap-[25px] justify-center items-center">
      <img class="w-[%] p-[8px]" :src="toLeft" alt="" />
      <img class="w-[20px] h-[20px] p-1 border rounded-[50px]" :src="center" alt="" />
      <img :src="center" alt="" />
      <img class="p-[8px]" :src="toRight" alt="" />
    </div>
    <div>
      <div class="flex justify-center">
        <button class="btn text-black flex items-center mt-[40px] py-3 px-8">
          <span><i class="text-black fa fa-github-square fa-2x mr-[10px]" aria-hidden="true"></i></span>Check other repositories
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import quizG from "@/assets/images/quizG.png"; // Adjust this path according to your project structure
import checked from "@/assets/images/Unioncheck.svg"; // Adjust this path according to your project structure
import toLeft from "@/assets/images/left.svg"; // Adjust this path according to your project structure
import toRight from "@/assets/images/right.svg"; // Adjust this path according to your project structure
import center from "@/assets/images/center.svg"; // Adjust this path according to your project structure

export default {
  name: "Projects",
  props: {},
  data() {
    return {
      quizG,
      checked,
      toLeft,
      toRight,
      center,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
