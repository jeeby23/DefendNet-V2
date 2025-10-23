<template>
  <div>
    <!-- ✅ Hero Section -->
     <Hero
      :heroImage="office"
      title="Aduiting"
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
    <div id="go" class="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-10 space-y-10 md:space-y-0 md:space-x-10">
      
      <!-- 🖼️ Left Image -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img 
          :src="changeIt" 
          alt="auditing"
          class="w-full h-auto sm:h-80 md:h-auto lg:h-[500px] object-cover rounded-lg shadow-md"
        >
      </div>

      <!-- 📝 Right Text -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h1 class="text-2xl sm:text-3xl lg:text-xl text-center font-bold mb-4 dark:text-white">
          Strengthen Your Digital Foundation with Proactive Oversight.
        </h1>
        <p class="text-base sm:text-lg lg:text-xl mb-4 dark:text-white leading-relaxed">
          At DefendNet, our IT Auditing services provide a thorough evaluation of your organization's technology 
          infrastructure, policies, and operations to ensure alignment with industry standards, regulatory 
          requirements, and best practices. We don't just identify gaps—we empower you to close them.
        </p>
        <h2 class="text-lg sm:text-xl font-semibold mb-3 dark:text-white">Our auditing approach focuses on:</h2>
        <ul class="list-disc list-inside space-y-2 text-left mx-auto md:mx-0">
          <li>Assessing the effectiveness of IT controls and governance</li>
          <li>Evaluating data security, system integrity, and access management</li>
          <li>Identifying compliance risks with frameworks like ISO 27001, NIST, and GDPR</li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import Navbar from "@/components/Layouts/Navbar.vue";
import Hero from "@/components/Layouts/Hero.vue";
import office from "@/assets/office.jpg";
import changeIt from "@/assets/changeIt.jpg";
import Footer from "@/components/Layouts/Footer.vue";
</script>