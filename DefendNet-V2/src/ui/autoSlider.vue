<template>
  <div class="bg-[url('@/assets/background.png')] bg-cover bg-center min-h-64 ">
    <container>
      <div class="text-center flex flex-col justify-center items-center py-[100px]">
        <h1 class="text-[#206695] text-">Testimonial</h1>
        <h2 class="text-3xl font-semibold">Clients Feedback & Reviews</h2>
        <div class="bg-[#0BC575] h-[4px] md:h-1 my-4 rounded" style="width: 48px"></div>
      </div>
      <swiper
        :modules="[Autoplay]"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024:{
            slidesPerView: 2,
            spaceBetween: 20
          }
        }"
      >
        <swiper-slide v-for="(detail, index) in details" :key="index">
          <div class="bg-[#FAFAFA] flex flex-col justify-center items-center mb-3 p-3 border-t-2 border-green-400 h-full">
            <span class="rounded-full">
              <img
                :src="detail.image"
                alt="slider image"
                class="rounded-full w-32 text-center"
              />
            </span>
            <h1 class="dark:text-black">{{ detail.title }}</h1>
            <h2 class="dark:text-black font-extrabold">{{ detail.name }}</h2>
            <h3 class="dark:text-black font-bold">{{ detail.postion }}</h3>
          </div>
        </swiper-slide>
      </swiper>
    </container>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import container from "@/components/Layouts/container.vue";
import four from "@/assets/4.jpg";
import ten from "@/assets/10.jpg";
import three from "@/assets/13.jpg";

const details = [
  {
    id: 1,
    image: ten,
    title: "DefendNet transformed the way we handle IT compliance. Their audit team identified critical gaps we didn’t even know existed and helped us strengthen our cybersecurity posture.",
    name: "Sarah M",
    postion: " Compliance Director, Horizon Finance Ltd.",
  },
  {
    id: 2,
    image: four,
    title: "Cybersecurity is a top priority in healthcare, and DefendNet gave us complete confidence. Their team was thorough, transparent, and proactive throughout the audit process.",
    name: "Dr. Daniel O. ",
    postion: "IT Manager, MedSecure Clinics",
  },
  {
    id: 3,
    image: three,
    title: "As a growing tech company, we needed a partner who understood both innovation and security. DefendNet’s experts provided a full IT audit and guided us in building a scalable, secure infrastructure.",
    name: "Lisa A.",
    postion: "CEO, CloudWave Technologies",
  },
];
</script>