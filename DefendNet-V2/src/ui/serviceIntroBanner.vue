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
                Tristique auctor hac mus himenaeos vivamus ullamcorper purus
                suscipit, at tellus sociis quisque odio scelerisque curae mattis
                velit, senectus egestas penatibus vehicula arcu praesent vitae.
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
    text: "Tax Expertise",
    child:
      "Quam semper duis finibus donec fringilla nam luctus aenean nisl montes tristique",
    icon: "calculator",
  },
  {
    id: 2,
    text: "Cost Efficiency",
    icon: "chart-line",
    child:
      "Quam semper duis finibus donec fringilla nam luctus aenean nisl montes tristique",
  },
  {
    id: 3,
    text: "Audit Readiness",
    icon: "globe",
    child: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    text: "Time Savings",
    icon: "globe",
    child: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
</script>

<style>

</style>