<template>
  <container>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="(card, index) in cardServices"
        :key="index"
        :class="[
          'bg-[#FAFAFA] h-[300px] mb-4 md:mr-6 p-5 md:p-10',
          index < 3 ? 'border-t-3 border-blue-300' : '' ,
          index > 2 ? 'border-b-3 border-green-300' : ''
        ]"
      >
        <span>
          <div
            class="bg-[#0BC575] h-[4px] md:h-1 my-4 rounded"
            style="width: 48px"
          ></div>
          <h1 class="py-3 font-bold dark:text-black">{{ card.head }}</h1>
          <h2 class="py-3 dark:text-black">{{ card.text }}</h2>
          <BaseButton
            class="text-white bg-[#206695] p-3 mt-3 md:mr-3 rounded min-w-auto"
            >Learn more</BaseButton
          >
        </span>
      </div>
    </div>
  </container>
</template>
<script setup>
import container from "@/components/Layouts/container.vue";
import BaseButton from "@/ui/button.vue";
const cardServices = [
  {
    id: 1,
    head: "Tax Planning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    btn: "Learn More",
  },
  {
    id: 2,
    head: "Financial Recording",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    btn: "Learn More",
  },
  {
    id: 3,
    head: "Payroll Processing",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    btn: "Learn More",
  },
  {
    id: 4,
    head: "Financial Analysis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    btn: "Learn More",
  },
  {
    id: 5,
    head: "Audit Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    btn: "Learn More",
  },
  {
    id: 6,
    head: "Financial Planning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    btn: "Learn More",
  },
];
</script>


