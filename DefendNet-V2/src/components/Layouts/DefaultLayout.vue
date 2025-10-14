<template>
  <div>
    <div v-if="heroImage">
      <Navbar />
      <div><img :src="heroImage" alt="Hero image" /></div>
    </div>
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Layouts/Navbar.vue";
import Footer from "./Footer.vue";
defineProps({
  heroImage: {
    type: String,
  },
});
</script>
