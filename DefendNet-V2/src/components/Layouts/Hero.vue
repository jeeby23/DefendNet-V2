<template>
  <div>
    <div class="relative w-full">
      <img :src="heroImage" alt="hero image" :class="heroClass" />
      <div class="absolute inset-0 bg-[rgba(0,0,0,.5)]"></div>
      <div class="absolute top-0 left-0 w-full">
        <slot/>
        <div >
          <container>
            <div :class="context">
              <h1 :class="titleClass">{{ title }}</h1>
              <h2 :class="childClass">
                {{ titleChild }}
              </h2>
              <p :class="SubchildClass">{{ subChild }}</p>
              <container>
              <div class="flex flex-col md:flex-row "> 
               <BaseButton :label="Buttonlabel" :class="buttonClass"/>
               <BaseButton :label="Buttonlabel2" :class="buttonClass2"/>
              </div> 
              </container>
            </div>
          </container>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import BaseButton from "@/ui/button.vue"
import container from "@/components/Layouts/container.vue";
defineProps({
  heroImage: {
    type: String,
  },
  heroClass: {
    type: String,
    default:"h-[500px] md:max-w-screen object-cover md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
  },
  titleChild: {
    type: String,
  },
  title: {
    type: String,
  },
  childClass: {
    type: String,
  },
  titleClass: {
    type: String,
  },
  SubchildClass: {
    type: String,
  },
  subChild: {
    type: String,
  },
  Buttonlabel: {
    type: String,
  },
  Buttonlabel2: {
    type: String,
  },
  buttonClass: {
    type: String,
  },
  buttonClass2: {
    type: String,
  },
  context: {
    type: String,
    default: "flex flex-col justify-center items-center  h-[50vh] md:h-[70vh]"
  },
});
</script>
