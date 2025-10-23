<template>
  <div>
    <!-- ✅ Top Section -->
    <section class="px-4 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
      <!-- Left Column -->
      <div class="text-center lg:text-left lg:w-1/3 space-y-3">
        <h1 class="font-mono font-extrabold text-xl sm:text-xl lg:text-2xl leading-snug">
          Let's Secure Your Business Together
        </h1>
        <button
          class="bg-blue-500 hover:bg-blue-800 py-3 px-8 rounded-full text-white font-semibold transition"
        >
          Road to Success
        </button>
      </div>

      <!-- Center Image -->
      <div class="flex justify-center lg:w-1/3">
        <img
          :src="woman"
          alt="woman image"
          class="w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[400px] object-contain"
        />
      </div>

      <!-- Right Column -->
      <div class="text-center lg:text-right lg:w-1/3 space-y-2">
        <h1 class="font-mono font-extrabold text-xl sm:text-2xl lg:text-3xl">
          Have any questions?
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl text-indigo-500 font-mono">
         +4407349146384
        </p>
      </div>
    </section>

    <!-- ✅ Footer Section -->
    <footer class="bg-[#206695] text-white">
      <section class="max-w-7xl mx-auto px-4 py-10">
        <!-- Top Footer Content -->
        <div class="flex flex-col md:flex-row justify-between gap-10">
          <!-- Logo & Address -->
          <div class="md:w-1/3 space-y-3  md:text-left">
            <img class="w-32  md:mx-0" :src="defLogo" alt="logo" />
            <div class="text-gray-300 text-sm leading-relaxed">
              Address: 20 Northwood Drive BT15 3QP
            </div>
          </div>
          <!-- Footer Links -->
          <div class="flex-1">
            <ul
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-sm  md:text-left"
            >
              <li v-for="(section, index) in footerSections" :key="index">
                <h3 class="text-base font-bold mb-2">{{ section.title }}</h3>
                <ul>
                  <li
                    v-for="(link, linkIndex) in section.links"
                    :key="linkIndex"
                    class="py-1 text-gray-300 hover:text-white transition"
                  >
                    <!-- ✅ handle tel/mailto differently -->
                    <template
                      v-if="link.url.startsWith('http') || link.url.startsWith('mailto:') || link.url.startsWith('tel:')"
                    >
                      <a :href="link.url">{{ link.text }}</a>
                    </template>
                    <template v-else>
                      <router-link :to="link.url">{{ link.text }}</router-link>
                    </template>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <hr class="border-gray-400 my-6" />

        <!-- Bottom Footer -->
        <div class="flex justify-center items-center text-center text-sm text-gray-200">
          © Copyright 2025 DefendNet. All rights reserved.
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup>
const phoneNumber = [
  {
    url: "+4407349146384",
    text:"+4407349146384"
  }
];
import woman from "@/assets/woman.png";
import defLogo from "@/assets/defLogo.png";

const footerSections = [
  {
    title: "Services",
    links: [
      { text: "Audit", url: "/audit" },
      { text: "Cloud", url: "/cloud-security" },
      { text: "Cyber Security", url: "/cybersecurity" },
      { text: "Policy", url: "/policy-development" },
      { text: "SOX", url: "/sox-compliance" },
      { text: "IT Support", url: "/it-support" },
      { text: "Third-Party", url: "/third-party-risk" },
      { text: "Business", url: "/business-continuity" },
    ],
  },
  {
    title: "Help",
    links: [
      { text: "Email Us", url: "mailto:Info@defendnettechnology.com" },
      { text: "Call Us", url: "tel:+4407349146384" },
     
    ],
  },
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "/" },
      { text: "About Us", url: "/about" },
      { text: "Services", url: "/services" },
      { text: "Contact Us", url: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "+4407349146384", url: "tel:+4407349146384" },
      { text: "Info@defendnettechnology.com", url: "mailto:Info@defendnettechnology.com" },
    ],
  },
];
</script>