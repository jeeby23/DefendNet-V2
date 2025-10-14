<template>
  <div>
    <container class="">
      <nav>
        <div
          class="relative w-full flex items-center max-w-screen justify-between"
        >
          <div class="flex-shrink-0">
            <div
              @click="toggleMenu"
              class="text-white text-2xl absolute z-20 right-1 top-5 block md:hidden cursor-pointer"
            >
              <span class="mr-5">
                <font-awesome-icon :icon="['fas', 'bars']" />
              </span>
            </div>
            <router-link :to="{ name: 'home' }">
              <img
                class="w-40 h-20 text-[10rem] object-cover"
                :src="defLogo"
                alt="logo"
              />
            </router-link>
          </div>
          <div class="hidden md:block">
            <div class="absolute left-1/2 flex space-x-10 text-white font-bold">
              <ul class="flex space-x-10">
                <li
                  v-for="(header, index) in headerList"
                  :key="index"
                  class="relative hover:text-blue-300"
                >
                  <router-link
                    :to="header.routes"
                    :class="{
                      'text-blue-300': $route.path === `${header.routes}`,
                    }"
                  >
                    {{ header.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </container>
    <HamburgerMenu :closeMenu="closeMenu" @is-open="toggleMenu" />
  </div>
</template>

<script setup>
import HamburgerMenu from "./HamburgerMenu.vue";
import container from "@/components/Layouts/container.vue";
import defLogo from "@/assets/defLogo.png";
import useVisibilityToggle from "@/composables/useVisibilityToggle";
const { Visible: closeMenu, toggle: toggleMenu } = useVisibilityToggle(false);

const headerList = [
  { name: "Home", routes: "/" },
  { name: "About Us", routes: "/about" },
  { name: "Services", routes: "/services" },
  { name: "Career", routes: "/career" },
  { name: "Contact", routes: "/contact" },
];
</script>
