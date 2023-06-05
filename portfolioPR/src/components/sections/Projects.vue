<template>
  <section class="text-white mb-[30px] mt-[125px]">
    <div class="flex justify-center mb-[25px]">
      <h2 class="font-robotoSlab font-[700] text-center text-[48px] border-b">Projects</h2>
    </div>
    <div class="mb-[28px] flex gap-[15px] px-[125px] max-[900px]:px-[35px] items-center justify-around max-[740px]:flex-col">
      <div class="w-3/5 flex flex-col max-[740px]:w-full">
        <div class="flex items-center mb-[30px]">
          <img class="pr-[10px]" :src="checked" alt="" />
          <p class="border-l-2 font-inter font-bold pl-[12px]">FINISHED</p>
        </div>
        <div class="flex flex-col h-full justify-between">
          <h2 class="font-robotoSlab font-[900] text-[50px] leading-[70px]">Quiz game</h2>
          <p class="font-robotoSlab font-[300] text-[22px]">Create, solve quizzes publicly or privately, and enhance your ratings on our Quiz Page!</p>

          <div class="flex w-full max-[740px]:justify-center min-[740px]:hidden">
            <img class="w-full max-h-[400px] max-w-[400px] max-[940px]:w-[300px] max-[940px]:h-[200px] mt-[20px] rounded-[16px]" :src="bquizG" alt="" />
          </div>
          <p class="my-[20px]">Technologies used:</p>
          <div class="flex gap-3 border border-white p-5 rounded-[15px] items-center max-w-full w-fit flex-wrap">
            <img class="h-[30px]" :src="html" alt="" />
            <img class="h-[30px]" :src="react" alt="" />
            <img class="h-[30px]" :src="firebase" alt="" />
            <img class="h-[30px]" :src="tailwind" alt="" />
            <!-- <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black rounded-[15px]">HTML</p>
            <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black whitespace-nowrap rounded-[15px]">TailWind CSS</p>
            <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black whitespace-nowrap rounded-[15px]">React JS</p>
            <p class="px-[15px] m-2 p-[5px] font-inter font-bold bg-white text-black rounded-[15px]">Firebase</p> -->
          </div>
          <a class="flex w-full max-[750px]:justify-center" href="https://modern-quiz.netlify.app/">
            <button class="bg-grey items-center px-[50px] py-[15px] rounded-[15px] font-DM font-bold my-[34px] w-fit hover:bg-white hover:text-black">VISIT APP WEBSITE</button>
          </a>
        </div>
      </div>
      <div class="flex max-[940px]:w-2/5 max-[740px]:justify-center max-[740px]:hidden">
        <img class="w-full max-h-[400px] max-w-[400px] max-[940px]:w-[300px] max-[940px]:h-[300px] rounded-[16px]" :src="bquizG" alt="" />
      </div>
    </div>
    <div class="flex gap-[25px] justify-center items-center">
      <img class="cursor-pointer w-[%] p-[8px]" :src="toLeft" alt="" />
      <img class="w-[20px] h-[20px] p-1 border rounded-[50px]" :src="center" alt="" />
      <!-- <img :src="center" alt="" /> -->
      <img class="cursor-pointer p-[8px]" :src="toRight" alt="" />
    </div>
    <div>
      <div class="flex justify-center">
        <a href="https://github.com/VytasPet">
          <button class="btn text-black flex items-center mt-[40px] py-3 px-8 max-[740px]:py-2 max-[740px]:px-4 max-[740px]:text-[14px] hover:outline hover:outline-black">
            <span><i class="text-black fa fa-github-square fa-2x mr-[10px]" aria-hidden="true"></i></span>Check other repositories
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import quizG from "@/assets/images/quizG.png"; // Adjust this path according to your project structure
import bquizG from "@/assets/images/blueQuiz.png"; // Adjust this path according to your project structure
import checked from "@/assets/images/Unioncheck.svg"; // Adjust this path according to your project structure
import toLeft from "@/assets/images/left.svg"; // Adjust this path according to your project structure
import toRight from "@/assets/images/right.svg"; // Adjust this path according to your project structure
import center from "@/assets/images/center.svg"; // Adjust this path according to your project structure
import firebase from "@/assets/images/Tagfirebase.svg"; // Adjust this path according to your project structure
import react from "@/assets/images/Tagreact.svg"; // Adjust this path according to your project structure
import html from "@/assets/images/Taghtml.svg"; // Adjust this path according to your project structure
import tailwind from "@/assets/images/Tagtailwind.svg"; // Adjust this path according to your project structure

export default {
  name: "Projects",
  props: {},
  data() {
    return {
      quizG,
      bquizG,
      checked,
      toLeft,
      toRight,
      center,
      firebase,
      react,
      html,
      tailwind,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
