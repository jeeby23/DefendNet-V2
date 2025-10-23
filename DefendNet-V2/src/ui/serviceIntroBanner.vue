<template>
   <section>
      <div
        class="bg-cover bg-center h-auto w-full flex items-center justify-center"
        :style="{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${Choose})`,
        }"
      >
        <container>
          <div class="flex flex-col md:flex-row items-center mt-10">
            <div>
              <h3 class="text-[#206695] py-5">Why choose us</h3>
              <h2 class="text-3xl md:text-4xl md:w-[450px] font-bold dark:text-black">
                Unraveling Financial Potential, Tailored Just for You
              </h2>
              <p class="my-4 text-gray-400 md:w-[500px]">
              We go beyond numbers to uncover opportunities that drive growth. Our expert auditing and financial advisory services are customized to meet your unique business needs, ensuring clarity, compliance, and strategic success at every step.
              </p>
              <div v-for="(choose, index) in chooses" :key="index">
                <span>
                  <font-awesome-icon
                    :icon="['fas', choose.icon]"
                    class="text-white text-4xl bg-green-600 p-1 hover:text-gray-500 rounded"
                  />
                  <h1 class="font-bold py-2 dark:text-black">{{ choose.text }}</h1>
                  <h3 class="text-gray-400 py-2 dark:text-black">{{ choose.child }}</h3>
                </span>
              </div>
            </div>
            <div>
              <img :src="manChoose" alt="man image" class="w-auto" />
            </div>
          </div>
        </container>
      </div>
    </section>
</template>

<script setup>
import container from "@/components/Layouts/container.vue";
import manChoose from "@/assets/img.png";
import Choose from "@/assets/choose.jpg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChartLine,
  faCalculator,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faChartLine, faCalculator, faGlobe);
defineExpose({ FontAwesomeIcon });
const chooses = [
  {
    id: 1,
    text: "Aduiting",
    child:
      "Evaluating data security, system integrity, and access management",
    icon: "calculator",
  },
  {
    id: 2,
    text: "Business",
    icon: "chart-line",
    child:
      "Develop customized business continuity plans (BCPs) that align with your organizational structure and critical operations",
  },
  {
    id: 3,
    text: "Cloud",
    icon: "globe",
    child: "Cloud architecture assessments and security posture reviews",
  },
  {
    id: 4,
    text: "Cyber",
    icon: "shield",
    child: "Comprehensive Risk Assessments Identify critical vulnerabilities, prioritize risks, and implement safeguards",
  },
];
</script>

<style>

</style>