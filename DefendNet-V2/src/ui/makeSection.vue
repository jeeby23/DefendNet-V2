<template>
  <section class="mt-10">
        <Hero
          :heroImage="image"
          :heroClass="heroClass"
          titleChild="Make your business stand out with our personalized accounting services."
          subChild="Mauris leo eleifend adipiscing inceptos finibus faucibus sem dolor hendrerit posuere augue. Morbi est torquent himenaeos scelerisque sed."
          Buttonlabel="Discover More"
          buttonClass="text-white bg-[#206695] p-3 mt-3 md:mr-3 rounded min-w-auto "
          childClass=" text-[20px] md:text-[40px] text-center md:w-[700px] break-words font-bold text-white"
          SubchildClass="text-white md:w-[550px] text-center"
        >
        </Hero>
       
      </section>
</template>

<script setup>
import Hero from '@/components/Layouts/Hero.vue';
import image from "@/assets/time.jpg";



defineProps({
  image: {
    type: String,
   
  },
 heroClass: {
    type: String,
   default: 'min-w-full h-auto md:h-[60vh] object-cover',
  },
})
</script>
