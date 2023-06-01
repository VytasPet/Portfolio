<template>
  <section class="text-white mb-[30px] mt-[125px]">
    <div class="w-4/5 px-[125px]">
      <h2 class="font-hero text-[40px]">TECH.</h2>
      <p class="font-robotoSlab font-bold text-[20px] mt-[10px] w-1/2">In my personal journey, I already worked with some techonologies, and here they are:</p>
      <div class="mt-[85px]">
        <img :src="web" alt="" />
        <div class="mt-[35px] grid grid-rows-2 grid-flow-col gap-4 justify-center items-center w-fit">
          <div class="flex gap-[25px]">
            <img class="max-h-[105px] w-[40%] max-w-[75px]" :src="html" alt="" />
            <div class="flex flex-col w-[55%] justify-center">
              <p class="font-serif font-bold text-[24px] text-white">HTML</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%]">+1 year experience</p>
            </div>
          </div>
          <div class="flex gap-[25px]">
            <img class="max-h-[85px] w-[40%] max-w-[85px]" :src="css" alt="" />
            <div class="flex flex-col w-[55%] justify-center">
              <p class="font-serif font-bold text-[24px] text-white">CSS</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%]">+1 year experience</p>
            </div>
          </div>
          <div class="flex gap-[25px]">
            <img class="max-h-[85px] w-[40%] max-w-[85px]" :src="js" alt="" />
            <div class="flex flex-col w-[55%] justify-center">
              <p class="font-serif font-bold text-[24px] text-white">JavaScript</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%]">+1 year experience</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[85px]">
        <img :src="Taglibr" alt="" />
        <div class="mt-[35px] grid grid-rows-2 grid-flow-col gap-4 w-fit justify-items-end">
          <div class="flex gap-[25px]">
            <img class="max-h-[105px] w-[40%] max-w-[75px]" :src="react" alt="" />
            <div class="flex flex-col w-[55%] justify-center">
              <p class="font-serif font-bold text-[24px] text-white">React JS</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%]">+1 year experience</p>
            </div>
          </div>
          <div class="flex gap-[25px]">
            <img class="max-h-[85px] w-[40%] max-w-[85px]" :src="tailwind" alt="" />
            <div class="flex flex-col w-[55%] justify-center">
              <p class="font-serif font-bold text-[24px] text-white">TailWind CSS</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%]">+1 year experience</p>
            </div>
          </div>
          <div class="flex gap-[25px] items-center">
            <img class="max-h-[85px] w-[40%] max-w-[85px]" :src="vuejs" alt="" />
            <div class="flex flex-col w-[55%] items-start">
              <p class="font-serif font-bold text-[24px] text-white">Vue JS</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%]">+4 months experience</p>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-[45px] mb-[20px] font-robotoSlab text-[24px]">Other libraries and technologies:</p>
      <div class="flex border border-white p-2 rounded-[15px] items-center max-w-full w-2/3 flex-wrap gap-5">
        <img :src="compo" alt="" />
        <img :src="firebase" alt="" />
        <img :src="github" alt="" />
        <img :src="git" alt="" />
        <!-- <p class="px-[15px] m-2 px-[8px] py-[3px] font-inter font-bold bg-white text-black rounded-[3px]">Styled-Components</p>
        <p class="px-[15px] m-2 px-[8px] py-[3px] font-inter font-bold bg-white text-black rounded-[3px]">Firebase</p>
        <p class="px-[15px] m-2 px-[8px] py-[3px] font-inter font-bold bg-white text-black whitespace-nowrap rounded-[3px]">GitHub</p>
        <p class="px-[15px] m-2 px-[8px] py-[3px] font-inter font-bold bg-white text-black whitespace-nowrap rounded-[3px]">Git</p> -->
      </div>
    </div>
    <div class="px-[125px] mt-[100px] w-4/5">
      <h2 class="font-hero text-[40px] leading-[90px] mb-[40px]">WANT TO CREATE PROJECT TOGETHER?</h2>
      <div class="w-full rounded-[20px] bg-white text-black flex justify-between items-center">
        <input class="w-2/3 h-[40px] px-[25px] py-[10px] rounded-[20px] border-none placeholder-custom focus:outline-none" type="text" placeholder="Enter your e-mail here" />
        <button class="text-white bg-black px-[18px] py-[5px] rounded-[25px] my-[10px] mx-[20px] font-DM font-[500]">Contact</button>
      </div>
    </div>
  </section>
</template>

<script>
import web from "@/assets/images/Tagweb.svg"; // Adjust this path according to your project structure
import html from "@/assets/images/htmlHTML.svg"; // Adjust this path according to your project structure
import css from "@/assets/images/csscss.svg"; // Adjust this path according to your project structure
import js from "@/assets/images/JavaScriptJS.svg"; // Adjust this path according to your project structure
import react from "@/assets/images/reactreact.svg"; // Adjust this path according to your project structure
import tailwind from "@/assets/images/Vectortailwind.svg"; // Adjust this path according to your project structure
import Taglibr from "@/assets/images/Taglibr.svg"; // Adjust this path according to your project structure
import vuejs from "@/assets/images/vuejs.svg"; // Adjust this path according to your project structure
import compo from "@/assets/images/Tagcomponents.svg"; // Adjust this path according to your project structure
import firebase from "@/assets/images/Tagfirebase.svg"; // Adjust this path according to your project structure
import git from "@/assets/images/Taggitt.svg"; // Adjust this path according to your project structure
import github from "@/assets/images/Taggithub.svg"; // Adjust this path according to your project structure
import ufo from "@/assets/images/ufo.svg"; // Adjust this path according to your project structure
import planets from "@/assets/images/planets.svg"; // Adjust this path according to your project structure
import montas from "@/assets/images/montas.svg"; // Adjust this path according to your project structure

export default {
  name: "Tech",
  props: {},
  data() {
    return {
      web,
      html,
      css,
      js,
      react,
      tailwind,
      Taglibr,
      vuejs,
      compo,
      firebase,
      git,
      github,
      ufo,
      planets,
      montas,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
