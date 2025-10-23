<template>
  <div class="bg-white text-black">
    <Hero
      :heroImage="DefendNetContact"
      title="Contact"
      titleClass="text-white font-bold text-4xl"
      titleChild="Discover What Drives Business with DefendNet"
      childClass="text-white font-light text-2xl  leading-relaxed"
      heroClass=" md:h-[70vh] min-w-screen overflow-hidden object-cover object-top"
      context="text-center flex flex-col item-center justify-center mx-auto h-64 md:h-99"
    >
      <Navbar />
      <div class="border-b-[.5px] border-slate-100"></div>
    </Hero>
    <div class="flex flex-col justify-center items-center pt-10">
      <h1 class="text-[#206695] py-2 font-semibold">Get In Touch</h1>
      <h2 class="font-bold md:text-3xl py-4 text-center md:w-[400px]">
        Seamless Communication, Global Impact.
      </h2>
      <div
        class="bg-[#0BC575] h-[4px] md:h-1 my-4 rounded"
        style="width: 48px"
      ></div>
    </div>
    <container>
      <div class="flex flex-col md:flex-row gap-7">
        <div class="bg-gray-100 h-auto">
          <Form />
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19868.373358018045!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1756670373089!5m2!1sen!2sus"
            width="350"
            height="650"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
          </container>
    
    <div class="bg-gray-100 mt-10 min-h-screen">
      <container>

        <span>
          <h1 class="text-center font-bold text-2xl py-10">
            Start the conversation to established good relationship and
            business.
          </h1>
        </span>
        <div class="grid grid-cols-1 md:grid-cols-3  ">
          <div
            v-for="detail in contactDetails"
            :key="detail.id"
            class="flex flex-col md:flex-row gap-3 p-3 bg-white mb-2 py-3 border-l-3 border-green-400 mx-3 h-auto"
          >
            <font-awesome-icon
              :icon="detail.icon"
              class="text-red-400 text-xl text-center"
            />
            <div class="">
              <h3 class="font-semibold text-lg">{{ detail.title }}</h3>
              <p class="text-gray-600">{{ detail.content }}</p>
            </div>
          </div>
        </div>
      </container>
      <Footer/>
      </div>
    </div>
</template>

<script setup>
import container from "@/components/Layouts/container.vue";
import DefendNetContact from "@/assets/DefendNetContact.jpg";
import Navbar from "@/components/Layouts/Navbar.vue";
import Hero from "@/components/Layouts/Hero.vue";
import Form from "@/ui/Form.vue";
import { icon } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/Layouts/Footer.vue";

const contactDetails = [
  {
    id: 1,
    title: "Chat To Support",
    content: "peoplesteam@defendnettechnology.com",
    icon: ["fas", "comment-dots"],
  },
  {
    id: 2,
    title: "Call Us",
    content: "Call : +4407349146384",
    icon: ["fas", "phone"],
  },
  {
    id: 2,
    title: "Visit Us",
    content: "Address: 20 Northwood Drive BT15 3QP",
    icon: ["fas", "map-marker-alt"],
  },
];
</script>
