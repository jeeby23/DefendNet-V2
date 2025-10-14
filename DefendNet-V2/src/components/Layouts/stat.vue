<template>
  <div
    class=" flex flex-col items-center justify-center h-auto w-auto rounded"
    ref="counterSection"
  >
    <div
      class=" bg-gradient-to-r from-[#0BCB7B] to-[#3BACBB] grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0 py-8 w-auto px-10  min-w-[100vw] md:min-w-[50%] min-h-[20vh] md:min-h-[10vh] 'border-b border-white md:border-b-0 md:border-r'"
      
    >
      <div class=" text-center py-5 px-6">
        <h2 class="font-bold text-4xl text-white pt-2">{{ yearsOfExperience }}+</h2>
        <p class="text-white text-[10px]">Years Of Experience</p>
      </div>
      <div class=" text-center py-5 px-6">
        <h2 class="font-bold text-4xl text-white pt-2">
          {{ projectDone}}K
        </h2>
        <p class="text-white text-[10px]">Project Done</p>
      </div>
      <div class=" text-center py-5 px-6"> 
        <h2 class="font-bold text-4xl text-white pt-2">
          {{ happyClient }}+
        </h2>
        <p class="text-white text-[10px]">Happy Client</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const yearsOfExperience = ref(0);
const projectDone = ref(0);
const happyClient = ref(0);

const animateCount = (refVar, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);

  const step = () => {
    start += increment;
    if (start < target) {
      refVar.value = Math.floor(start);
      requestAnimationFrame(step);
    } else {
      refVar.value = target;
    }
  };

  step();
};
const counterSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(yearsOfExperience, 20);
          animateCount(projectDone, 250);
          animateCount(happyClient, 150);
         
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  if (counterSection.value) {
    observer.observe(counterSection.value);
  }
});
</script>
