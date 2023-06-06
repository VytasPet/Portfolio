<template>
  <section class="relative text-white mt-[125px]">
    <div class="w-4/5 px-[125px] max-[900px]:px-[35px] max-[750px]:w-full">
      <h2 class="font-hero text-[40px] pt-[50px]">TECH.</h2>
      <p class="font-robotoSlab font-[500] text-[16px] mt-[20px] w-2/3 max-[750px]:w-4/5">
        Before turning to the tech industry, I used to craft and sell aesthetic phone cases online. Now, as a former CEO of innovative NFT projects, I bring a unique blend of creative e-commerce
        experience and project management skills to the world of web development.
      </p>
      <p class="font-robotoSlab font-[500] text-[16px] mt-[10px] w-2/3 max-[750px]:w-4/5">In my personal journey, I already worked with some techonologies, and here they are:</p>
      <div class="flex justify-center">
        <img class="w-1/2 min-[750px]:hidden mt-[30px]" :src="ufo" alt="" />
      </div>
      <div class="mt-[85px] max-[900px]:w-full max-[900px]:mt-[45px]">
        <img class="max-[550px]:w-1/3" :src="web" alt="" />
        <div class="flex items-center">
          <div class="mt-[35px] grid grid-rows-2 grid-flow-col gap-4 justify-center w-fit items-center max-[550px]:gap-4 max-[900px]:gap-[50px]">
            <div class="flex gap-[25px] max-[550px]:gap-[15px] items-center">
              <img class="max-h-[85px] w-[40%] max-w-[75px] max-[550px]:w-[35%]" :src="html" alt="" />
              <div class="flex flex-col w-[55%] justify-center">
                <p class="font-serif font-bold text-[24px] text-white max-[550px]:text-[16px]">HTML</p>
                <p class="font-serif font-bold text-[18px] opacity-[55%] max-[550px]:text-[12px]">+8 months experience</p>
              </div>
            </div>
            <div class="flex gap-[25px] max-[550px]:gap-[15px] items-center">
              <img class="max-h-[85px] w-[40%] max-w-[85px] max-[550px]:w-[35%]" :src="css" alt="" />
              <div class="flex flex-col w-[55%] justify-center">
                <p class="font-serif font-bold text-[24px] text-white max-[550px]:text-[16px]">CSS</p>
                <p class="font-serif font-bold text-[18px] opacity-[55%] max-[550px]:text-[12px]">+8 months experience</p>
              </div>
            </div>
            <div class="flex gap-[25px] max-[550px]:gap-[15px] items-center">
              <img class="max-h-[75px] w-[40%] max-w-[85px] max-[550px]:w-[35%]" :src="js" alt="" />
              <div class="flex flex-col w-[55%] justify-center">
                <p class="font-serif font-bold text-[24px] text-white max-[550px]:text-[18px]">JavaScript</p>
                <p class="font-serif font-bold text-[18px] opacity-[55%] max-[550px]:text-[12px]">+7 months experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[85px] max-[900px]:w-full max-[900px]:mt-[45px]">
        <img class="max-[550px]:w-1/3" :src="Taglibr" alt="" />
        <div class="mt-[35px] grid grid-rows-2 grid-flow-col gap-4 w-fit justify-items-end max-[550px]:gap-4 max-[900px]:gap-[50px]">
          <div class="flex gap-[25px] max-[550px]:gap-[15px] items-center">
            <img class="max-h-[105px] w-[40%] max-w-[75px] max-[550px]:w-[35%]" :src="react" alt="" />
            <div class="flex flex-col w-[55%] justify-center">
              <p class="font-serif font-bold text-[24px] text-white max-[550px]:text-[16px]">React JS</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%] max-[550px]:text-[12px]">+6 months experience</p>
            </div>
          </div>
          <div class="flex gap-[25px] items-center max-[550px]:gap-[15px]">
            <img class="max-h-[85px] w-[40%] max-w-[85px] max-[550px]:w-[35%]" :src="tailwind" alt="" />
            <div class="flex flex-col w-[55%] justify-center">
              <p class="font-serif font-bold text-[24px] text-white max-[550px]:text-[16px]">TailWind</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%] max-[550px]:text-[12px]">+3 months experience</p>
            </div>
          </div>
          <div class="flex gap-[25px] max-[550px]:gap-[15px] items-center">
            <img class="max-h-[85px] w-[40%] max-w-[85px] max-[550px]:w-[35%]" :src="vuejs" alt="" />
            <div class="flex flex-col w-[55%] items-start">
              <p class="font-serif font-bold text-[24px] text-white max-[550px]:text-[16px]">Vue JS</p>
              <p class="font-serif font-bold text-[18px] opacity-[55%] max-[550px]:text-[12px]">+4 months experience</p>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-[45px] mb-[20px] font-robotoSlab text-[24px]">Other libraries and technologies:</p>
      <div class="flex border border-white p-2 rounded-[15px] items-center max-w-full w-2/3 flex-wrap gap-5 max-[900px]:scale-75 max-[900px]:ml-[-40px] max-[450px]:w-full">
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
    <!-- <img class="w-[50%] absolute bottom-[0%] left-[10%] translate-y-[-50%]" :src="montas" alt="" /> -->
    <img class="absolute right-0 max-[1270px]:w-1/3 bottom-10 max-[770px]:bottom-[200px] z-10" :src="planets" alt="" />
    <img class="absolute w-1/3 right-80 max-[1500px]:right-20 top-0 z-0 max-[750px]:hidden" :src="ufo" alt="" />
    <div class="px-[125px] mt-[100px] w-4/5 max-[700px]:w-full max-[900px]:px-[35px] max-[660px]:mt-[50px]">
      <h2 class="font-hero text-[40px] leading-[90px] mb-[40px] max-[660px]:text-[20px] max-[660px]:leading-[40px] max-[660px]:mb-[20px] max-[660px]:w-2/3 max-[400px]:mb-[40px]">
        WANT TO CREATE PROJECT TOGETHER?
      </h2>
      <form @submit.prevent="formSubmitting" class="border rounded-[25px] p-8 min-[1400px]:w-4/5" action="https://formspree.io/f/xoqzowpz" method="POST">
        <div class="w-1/2 rounded-[10px] bg-white text-black flex justify-between items-center mb-[20px] max-[550px]:w-full">
          <input
            class="w-full h-[40px] px-[25px] py-[10px] rounded-[20px] border-none placeholder-custom focus:outline-none max-[450px]:text-[12px]"
            type="email"
            name="_replyto"
            placeholder="Enter your e-mail here"
            required
          />
        </div>
        <div class="w-full rounded-[10px] bg-white text-black flex flex-col justify-between">
          <input
            class="w-2/3 max-[700px]:w-full h-[80px] pl-[25px] py-[10px] rounded-[20px] border-none placeholder-custom focus:outline-none max-[450px]:text-[12px]"
            type="text"
            name="message"
            placeholder="Enter your message here"
            required
          />
          <button type="submit" class="text-white w-fit bg-black px-[18px] py-[5px] rounded-[25px] my-[10px] mx-[20px] ml-[25px] font-DM font-[500] hover:outline hover:outline-black">
            Hit me up! <span><i class="fa fa-rocket" aria-hidden="true"></i> </span>
          </button>
        </div>
        <div class="pt-5 rounded-[20px] text-white w-fit t" id="form-message" :class="{ hidden: !showSent }">Message was sent!</div>
      </form>
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
      showSent: false,
    };
  },
  methods: {
    messageSent() {
      this.showSent = true;
      setTimeout(() => {
        this.showSent = false;
      }, 2000);
    },
    formSubmitting(event) {
      let formData = new FormData(event.target);
      fetch(event.target.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            this.messageSent();
            // document.getElementById("form-message").classList.remove("hidden");
            event.target.reset(); // Reset the form fields
          } else {
            alert("Oops, there was an error. Please try again!");
          }
        })
        .catch((error) => {
          console.log("Fetch error: ", error);
          alert("Oops, there was an error. Please try again!");
        });
    },
  },
  computed: {},
};
</script>

<style scoped></style>
