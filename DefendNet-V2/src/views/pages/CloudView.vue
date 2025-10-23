<template>
  <div>
    <!-- ✅ Hero Section -->
    <Hero
      :heroImage="office"
      title="Cloud"
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
          :src="cloud"
          alt="auditing"
          class="w-full h-auto sm:h-80 md:h-auto lg:h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- 📝 Right Text -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h1 class="text-2xl sm:text-3xl lg:text-xl text-center font-bold mb-4 dark:text-white">
          Prepare for the unexpected and recover quickly
        </h1>
        <p class="text-base sm:text-lg lg:text-xl mb-4 dark:text-white leading-relaxed">
          At DefendNet, we understand that unplanned disruptions whether from cyberattacks, system
          failures, or natural disasters can paralyze operations and damage trust. That’s why our
          Business Continuity & Incident Management Advisory services are designed to help your
          organization build resilience and bounce back swiftly.
        </p>
        <h2 class="text-lg sm:text-xl font-semibold mb-3 dark:text-white">
          We partner with your teams to:
        </h2>
        <ul
          v-for="cloudList in cloudLists"
          class="list-disc list-inside space-y-2 text-left mx-auto md:mx-0"
        >
          <li>{{ cloudList.list }}</li>
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

import cloud from '@/assets/cloud.jpg'
import Footer from '@/components/Layouts/Footer.vue'

const cloudLists = [
  {
    list: 'Cloud architecture assessments and security posture reviews',
  },
  {
    list: 'Configuration audits and remediation guidance.',
  },
  {
    list: 'Identity and access management (IAM) strategy.',
  },
]
</script>
