<template>
  <div>
    <!-- ✅ Hero Section -->
    <Hero
      :heroImage="office"
      title="Third-Party"
      titleClass="text-white font-bold text-4xl"
      titleChild="Navigating Financial Success Together"
      childClass="text-white font-light text-2xl  leading-relaxed"
      heroClass=" md:h-[70vh] min-w-screen overflow-hidden object-cover object-top "
      context="text-center flex flex-col item-center justify-center mx-auto h-64 md:h-99"
    >
      <Navbar />
      <div class="border-b border-slate-100"></div>
    </Hero>

    <!-- ✅ Content Section -->
    <div
      id="go"
      class="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-10 space-y-10 md:space-y-0 md:space-x-10"
    >
      <!-- 🖼️ Left Image -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img
          :src="thirdParty"
          alt="Cyber-security"
          class="w-full h-auto sm:h-80 md:h-auto lg:h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- 📝 Right Text -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h1 class="text-2xl sm:text-3xl lg:text-xl text-center font-bold mb-4 dark:text-white">
     Third-Party Risk Assessment Strategy
        </h1>
        <p class="text-base sm:text-lg lg:text-xl mb-4 dark:text-white leading-relaxed">
      DefendNet, our Third-Party Risk Assessment Strategy
            is built to safeguard your organization from vulnerabilities introduced by external vendors, partners, or
            service providers. We help you identify, evaluate, and manage risks across your supply chain—ensuring that
            third-party relationships don’t become weak links in your cybersecurity or compliance posture. At DefendNet, we understand that identifying risks is
            only the beginning. The real value lies in how you respond. Our Risk Treatment Planning services are
            designed to help organizations develop and implement effective strategies to reduce, mitigate, or transfer
            risk — all tailored to your specific business needs and risk appetite.
        </p>
        <h2 class="text-lg sm:text-xl font-semibold mb-3 dark:text-white">What We Do:</h2>
        <ul
          v-for="PolicyList in PolicyLists"
          class="list-disc list-inside space-y-2 text-left mx-auto md:mx-0"
        >
          <li>{{ PolicyList.list }}</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Navbar from '@/components/Layouts/Navbar.vue'
import Hero from '@/components/Layouts/Hero.vue'
import office from '@/assets/office.jpg'
import thirdParty from '@/assets/thirdParty.jpg'
import Footer from '@/components/Layouts/Footer.vue'

const PolicyLists = [
  {
    list: 'endor Risk Profiling – Classify vendors based on security and compliance exposure..',
  },
  {
    list: 'Due Diligence – Assess vendor practices via detailed questionnaires and audits. ',
  },
  {
    list: 'Contract Review – Align agreements with security expectations and accountability.',
  },
  {
    list: 'Continuous Monitoring – Track changes in vendor risk with real-time alerts.',
  },
  {
    list: 'Risk Prioritization & Scoring Focus on what matters most with a clear hierarchy of risk impact and likelihood..',
  },
]
</script>
