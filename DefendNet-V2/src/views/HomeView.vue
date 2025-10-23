<script setup>
import Hero from "@/components/Layouts/Hero.vue";
import heroPhoto from "@/assets/Homehero.jpg";
import Navbar from "@/components/Layouts/Navbar.vue";
import aboutCard from "@/ui/aboutCard.vue";
import serviceIntroBanner from "@/ui/serviceIntroBanner.vue";
import card from "@/ui/card.vue";
import time from "@/assets/time.jpg";
import Footer from "@/components/Layouts/Footer.vue";
import makeSection from "@/ui/makeSection.vue"

const plans = [
  {
    id: 1,
    text: "Business Planning, Strategy & Execution",
    icon: "calculator",
  },
  { id: 2, text: "Financial Projections And Analysis", icon: "chart-line" },
  { id: 3, text: "International Business Opportunities", icon: "globe" },
];
</script>

<template>
  <div>
    <Hero
      :heroImage="heroPhoto"
      title="Welcome to DefendNet"
      subChild="A trusted partner in IT compliance and auditing—helping organizations meet regulatory standards, enhance cybersecurity, and stay audit-ready through expert-led solutions."
      titleClass="text-[#0BC575]"
      childClass=" text-[20px]  md:text-[40px] text-center max-w-90 break-words font-bold text-white"
      SubchildClass="text-white w-99 text-center"
      Buttonlabel="Discover More"
      buttonClass="text-white bg-[#206695] p-3 mt-3 md:mr-3 rounded min-w-[80vw] md:min-w-auto"
      Buttonlabel2="Get Free A Quote"
      buttonClass2="border border-white text-white p-3 mt-3 min-w-[80vw] md:min-w-auto rounded leading-tight"
    >
      <Navbar />
      <div class="border-b-[.5px] border-slate-100"></div>
    </Hero>
    <main>
      <section>
        <div
          class="flex flex-col md:flex-row justify-center md:items-center min-w-full bg-gradient-to-r from-[#0BCB7B] to-[#3BACBB] md:p-7 md:-translate-y-10"
        >
          <div v-for="(plan, index) in plans" :key="index">
            <div class="">
              <span class="flex flex-col md:flex-row min-w-full md:p-5">
                <span
                  :class="[
                    'text-white text-2xl py-4 px-4 flex items-center gap-3',
                    index < 2
                      ? 'border-b border-white md:border-b-0 md:border-r'
                      : '',
                  ]"
                >
                  <font-awesome-icon
                    :icon="['fas', plan.icon]"
                    class="text-white text-4xl"
                  />
                  <h2>
                    {{ plan.text }}
                  </h2>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
     <aboutCard/>
      <div class="flex flex-col justify-center items-center mt-10">
        </div>
     <makeSection image="time" :heroImage="time"/> 
     <serviceIntroBanner/>
     <Footer/>
    </main>
  </div>
</template>