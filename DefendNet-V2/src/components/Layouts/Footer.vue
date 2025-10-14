<template>
  <div>
    <section>
      <div
        class="flex flex-col-reverse md:flex-row items-center justify-center gap-6 px-6 pt-[100px]"
      >
        <div class="text-center md:w-1/3">
          <h1 class="font-mono font-extrabold text-[20px]">
            Let secure Your business Togther
          </h1>
          <button
            class="mb-10 bg-blue-400 hover:bg-blue-800 py-3 px-9 rounded-full text-white font-semibold mt-2"
          >
            Road to success
          </button>
        </div>
        <div class="">
          <img :src="woman" alt="woman image" />
        </div>
        <div class="text-center md:w-1/3">
          <h1 class="font-mono font-extrabold text-[20px]">
            Have any questions ?
          </h1>
          <p class="text-[23px] text-indigo-500 font-mono">{{ phoneNumber }}</p>
        </div>
      </div>
    </section>
    <footer class="bg-[#206695] min-h-auto relative overflow-hidden">
      <section>
        <container>
          <div class="md:flex pt-[50px] md:pt-[60px]">
            <div>
              <span>
                <img class="w-32 pl-5 " :src="defLogo" alt="logo"
              /></span>
              <div class="text-gray-400 w-full md:max-w-[70%] pb-5">
                4200 Hamill Avenue, San Diego, California 92109.
              </div>
            </div>
            <div>
              <div>
                <ul
                  class="grid grid-cols-2 md:grid-cols-4 space-x-0 md:space-x-10 text-white font-bold"
                >
                  <li v-for="(section, index) in footerSections" :key="index">
                    <h3 class="text-lg font-bold mb-2 text-white">
                      {{ section.title }}
                    </h3>
                    <ul>
                      <li
                        v-for="(link, linkIndex) in section.links"
                        :key="linkIndex"
                        class="text-sm  transition-colors duration-300 py-2 text-gray-400 font-light"
                      >
                        <div>
                          <span v-if="link.icon">
                            <FontAwesomeIcon
                              :icon="link.icon"
                              class="text-gray-400 px-2"
                            />
                          </span>
                          <router-link :to="link.url">{{
                            link.text
                          }}</router-link>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </container>
        <container>
            <hr class="text-gray-300 mt-5">
            <div class="flex justify-center items-center min-h-[100px]">
              <span class=" text-white text-center"> © Copyright 2025 DefendNet </span>
      
            </div>
        </container>
      </section>
    </footer>
  </div>
</template>

<script setup>
const phoneNumber = "+4407349146384";
import container from "@/components/Layouts/container.vue"
import woman from "@/assets/woman.png";
import defLogo from "@/assets/defLogo.png";
const footerSections = [
  {
    title: "Company",
    links: [
      { text: "About", url: "/about" },
      { text: "We are hiring", url: "/careers" },
      { text: "Affilliate Program", url: "/careers" },
      { text: "Business Accounts", url: "/careers" },
    ],
  },
  {
    title: "Help",
    links: [
      { text: "Email Us", url: "/contact" },
      { text: "Help & FAQ", url: "/help" },
      { text: "Make a return", url: "/help" },
      { text: "Shipping Policy", url: "/help" },
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
      { text: "+1-202-555-0116", url: "tel:+12025550116" },
      {
        text: "Phello@wecooked.io",
        url: "mailto:Phello@wecooked.io",
        // icon: faEnvelope,
        // icon: faPhone
      },
    ],
  },
];
</script>
