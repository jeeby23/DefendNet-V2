<template>
 <div>
   <Hero
      :heroImage="serviceHero"
      title="Services"
      titleClass="text-white font-bold text-4xl"
      titleChild="Professional Accounting Services"
      childClass="text-white font-light text-2xl  leading-relaxed"
      heroClass=" md:h-[70vh] min-w-screen overflow-hidden object-cover object-top "
      context="text-center flex flex-col item-center justify-center mx-auto h-64 md:h-99"
    >
      <Navbar />
      <div class="border-b-[.5px] border-slate-100"></div>
    </Hero>
    <div class="flex flex-col justify-center items-center pt-10">
        <h1 class="text-[#206695] py-2 font-semibold">
          Our services
        </h1>
        <h2 class="font-bold text-3xl py-4 text-center md:w-[400px]">
        Accounting by the Book. Perform with Trust.

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
      <card/>
      <makeSection :heroImage="servicesAudit" heroClass="object-top h-[60vh] w-full object-cover" />
      <autoSlider/>
      <div>
        <serviceIntroBanner/>
        <Footer/>
      </div>
 </div>
</template>

<script setup>

import card from "@/ui/card.vue";
import autoSlider from "@/ui/autoSlider.vue";
import serviceHero from "@/assets/serviceHero.jpg";
import servicesAudit from "@/assets/servicesAudit.jpg";
import Hero from "@/components/Layouts/Hero.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import makeSection from "@/ui/makeSection.vue";
import aboutHero from "@/assets/aboutHero.jpg";
import focused from "@/assets/focused.jpg";
import serviceIntroBanner from "@/ui/serviceIntroBanner.vue";
import Footer from "@/components/Layouts/Footer.vue";
</script>
