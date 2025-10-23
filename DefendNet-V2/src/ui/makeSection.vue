<template>
  <section class="mt-10">
    <Hero
    :heroImage="heroImage"
      :heroClass="heroClass"
      :titleChild="titleChild"
      :subChild="subChild"
      Buttonlabel="Discover More"
      buttonClass="text-white bg-[#206695] px-5 py-3 mt-4 md:mr-3 rounded w-full sm:w-auto text-center"
      childClass="text-[22px] sm:text-[28px] md:text-xl lg:text-[42px] text-center max-w-[90%] md:max-w-[700px] mx-auto font-bold text-white leading-tight"
      SubchildClass="text-white md:w-[550px] text-center"
    >
    </Hero>
  </section>
</template>

<script setup>
import Hero from '@/components/Layouts/Hero.vue'
import image from '@/assets/time.jpg'

defineProps({
  heroClass: {
    type: String,
    default: 'min-w-full h-auto md:h-[60vh] object-cover',
  },
 heroImage: {
    type: String,
    default: '',
  },
  titleChild: {
    type: String,
    default: 'Make your business stand out with our personalized accounting services',
  },
  subChild: {
    type: String,
    default: 'We provide tailored financial solutions designed to support your company’s unique goals. From accurate bookkeeping to strategic financial advice, our team ensures your business stays compliant, efficient, and ready for growth.',
  },
})
</script>
