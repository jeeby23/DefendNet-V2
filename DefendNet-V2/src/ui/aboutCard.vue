<template>
   <section>
      <div class="">
        <container>
          <div
            class="flex flex-col md:flex-row justify-center md:space-x-10 mt-[70px]"
          >
            <div class="overflow-hidden md:w-[70vw] rounded">
              <img :src="manageImg" alt="business" class="" />
              <stat />
            </div>
            <div>
              <span>
                <h3 class="text-[#206695] py-5">who we are</h3>
                <h4 class="text-3xl font-bold">
                  Make your business stand out with our personalized accounting
                  services.
                </h4>
                <p class="text-gray-400 py-5">
                  Sapien ad hendrerit duis euismod ipsum nostra sodales et ante.
                  Pretium nam lectus magna phasellus mi commodo odio.
                </p>
                <hr class="py-3" />
                <h4 class="font-bold text-xl py-5">Audit & Assurance</h4>
                <p class="text-gray-400 py-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <h5 class="font-bold text-xl py-5">Advisory & Consultations</h5>
                <p class="text-gray-400 py-2">
                  Varius ullamcorper sodales platea vulputate diam habitant,
                  litora quam facilisi proin dui lacinia, pulvinar nullam
                  natoque sociosqu ante
                </p>
              </span>
            </div>
          </div>
        </container>
      </div>
    </section>
</template>

<script setup>
import container from "@/components/Layouts/container.vue";
import stat from "@/components/Layouts/stat.vue";
import manageImg from "@/assets/manage.jpg";
</script>

<style>

</style>