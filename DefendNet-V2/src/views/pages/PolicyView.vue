<template>
  <div>
    <!-- ✅ Hero Section -->
    <Hero
      :heroImage="office"
      title="Policy"
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
          :src="policy"
          alt="Cyber-security"
          class="w-full h-auto sm:h-80 md:h-auto lg:h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- 📝 Right Text -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h1 class="text-2xl sm:text-3xl lg:text-xl text-center font-bold mb-4 dark:text-white">
       Build a Strong Security Foundation with DefendNet
        </h1>
        <p class="text-base sm:text-lg lg:text-xl mb-4 dark:text-white leading-relaxed">
        Clear, enforceable policies are the backbone of a
            resilient cybersecurity and compliance program. At DefendNet, our Policy Development & Governance Advisory
            services help organizations define, implement, and maintain effective governance structures and security
            policies aligned with industry standards and business goals.
        </p>
        <h2 class="text-lg sm:text-xl font-semibold mb-3 dark:text-white">What We Provide:</h2>
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
import policy from '@/assets/policy.jpg'
import Footer from '@/components/Layouts/Footer.vue'

const PolicyLists = [
  {
    list: 'Policy Implementation Support Assist with rollout, staff communication, and change management to drive adoption across teams..',
  },
  {
    list: 'Ongoing Review & Lifecycle Management Set up policy review schedules and version control to ensure documents remain current and effective. ',
  },
  {
    list: 'Custom Policy & Procedure Development Create clear, role-based policies covering areas such as information security, data privacy, acceptable use, access control, incident response, and more.',
  },
]
</script>
