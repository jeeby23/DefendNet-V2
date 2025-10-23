<template>
  <container>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="(card, index) in cardServices"
        :key="index"
        :class="[
          'bg-[#FAFAFA] h-auto mb-4 md:mb-3 md:mr-6 p-5',
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
          <RouterLink :to="{name:card.route}">
            <BaseButton
              class="text-white  bg-[#206695] p-3 mt-3 md:mr-3 rounded min-w-auto"
              >{{ card.btn }}</BaseButton
            >
          </RouterLink>
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
    head: "Auditing ",
    text: "Evaluating data security, system integrity, and access management.",
    btn: "Learn More",
    route:"routeAudit"
  },
  {
    id: 2,
    head: "Business",
    text: "Develop customized business continuity plans (BCPs) that align with your organizational structure and critical operations",
    btn: "Learn More",
    route:"routeBusiness"
  },
  {
    id: 3,
    head: "Cloud",
    text: "Cloud architecture assessments and security posture reviews",
    btn: "Learn More",
    route:"routeCloud"
  },
  {
    id: 4,
    head: "Cyber-security",
    text: "Cybersecurity Strategy & Roadmaps Develop long-term security strategies aligned with your business goals",
    btn: "Learn More",
    route:"routeCyber"
  },
  {
    id: 5,
    head: "IT -Support",
    text: "Readiness assessments for incident response and disaster recovery.",
    btn: "Learn More",
    route:"routeIt"
  },
  {
    id: 6,
    head: "Policy ",
    text: "Ongoing Review & Lifecycle Management Set up policy review schedules and version control to ensure documents remain current and effective.",
    btn: "Learn More",
    route:"routePolicy"
  },
  {
    id: 7,
    head: "SOX ",
    text: "Automated Control Implementation  Leverage tools and technology to reduce manual errors and increase control reliability. ",
    btn: "Learn More",
    route:"routeSox"
  },
  {
    id: 8,
    head: "Third-Party ",
    text: "Continuous Monitoring – Track changes in vendor risk with real-time alerts. ",
    btn: "Learn More",
    route:"routeThird"
  },
];
</script>


