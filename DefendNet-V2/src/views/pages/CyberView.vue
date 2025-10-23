<template>
  <div>
    <!-- ✅ Hero Section -->
    <Hero
      :heroImage="office"
      title="Cyber"
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
          :src="cyber"
          alt="Cyber-security"
          class="w-full h-auto sm:h-80 md:h-auto lg:h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- 📝 Right Text -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h1 class="text-2xl sm:text-3xl lg:text-xl text-center font-bold mb-4 dark:text-white">
        Cybersecurity Advisory Services Stay Ahead with DefendNet
        </h1>
        <p class="text-base sm:text-lg lg:text-xl mb-4 dark:text-white leading-relaxed">
         In today’s digital world, cyber threats are more
            sophisticated and frequent than ever. DefendNet’s Cybersecurity Advisory services provide expert guidance to
            help your business build a robust, proactive defense strategy. Our advisors work with your team to identify
            vulnerabilities, enhance security protocols, and ensure regulatory compliance.
        </p>
        <h2 class="text-lg sm:text-xl font-semibold mb-3 dark:text-white">
          What We Offer:
        </h2>
        <ul
          v-for="cyberList in cyberLists"
          class="list-disc list-inside space-y-2 text-left mx-auto md:mx-0"
        >
          <li>{{ cyberList.list }}</li>
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
import cyber from '@/assets/cyber.jpg'
import Footer from '@/components/Layouts/Footer.vue'

const cyberLists = [
  {
    list: 'Comprehensive Risk Assessments Identify critical vulnerabilities, prioritize risks, and implement safeguards.',
  },
  {
    list: 'Regulatory Compliance Support Navigate complex standards like HIPAA, GDPR, NIST, PCI-DSS, and ISO 27001',
  },
  {
    list: 'Cybersecurity Strategy & Roadmaps Develop long-term security strategies aligned with your business goals',
  },
]
</script>
