<template>
  <div>
    <Hero
      :heroImage="aboutHero"
      title="About Us"
      titleClass="text-white font-bold text-4xl"
      titleChild="Navigating Financial Success Together"
      childClass="text-white font-light text-2xl  leading-relaxed"
      heroClass=" md:h-[70vh] min-w-screen overflow-hidden object-cover object-top "
      context="text-center flex flex-col item-center justify-center mx-auto h-64 md:h-99"
    >
      <Navbar />
      <div class="border-b-[.5px] border-slate-100"></div>
    </Hero>
    <aboutCard/>
    <makeSection  :image="time" heroClass="object-top h-[60vh] w-full object-cover"/>
    <div class="bg-[#FAFAFA]">
      <div class="flex flex-col justify-center items-center pt-10">
        <h1 class="text-[#206695] py-2 font-semibold">
          Meet Our Expert Accounting Team
        </h1>
        <h2 class="font-bold text-3xl py-4 text-center md:w-[400px] dark:text-black">
          The People Powering Our Innovation
        </h2>
        <p class="text-gray-400 text-center md:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, diam dapibus
          rutrum metus bibendum placerat.
        </p>
        <div
          class="bg-[#0BC575] h-[4px] md:h-1 my-4 rounded"
          style="width: 48px"
        ></div>
      </div>
      <container>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div v-for="(founder,index) in founders" :key="index" class="mb-10">
            <span class=" ">
              <img
                :src="founder.image"
                alt="founders image"
                class="md:w-64 md:h-64 object-cover rounded md:mr-6"
              />
            </span>
            <div
              class="bg-[#FAFAFA] shadow-2xl md:w-64 border-b-2 border-green-600 pb-4 text-center p-3"
            >
              <h1 class="py-2 dark:text-black">{{ founder.name }}</h1>
              <h3 class="text-green-400 leading-2">{{ founder.position }}</h3>
            </div>
          </div>
        </div>
      </container>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import container from "@/components/Layouts/container.vue";
import Hero from "@/components/Layouts/Hero.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import aboutHero from "@/assets/aboutHero.jpg";
import time from "@/assets/time.jpg";
import aboutCard from "@/ui/aboutCard.vue";
import makeSection from "@/ui/makeSection.vue";
import Ceo from "@/assets/Ceo.png";
import projectManager from "@/assets/projectManager.png";
const founders = [
  { id: 1, image: Ceo, name: "Olashubomi Kehinde", position: "Founder" },
  {
    id: 2,
    image: projectManager,
    name: "Nasirah Abdulrahmon",
    position: "Project Manager",
  },
];
import Footer from "@/components/Layouts/Footer.vue";
</script>
