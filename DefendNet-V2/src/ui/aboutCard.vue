<template>
   <section>
      <div class="">
        <container>
          <div
            class="flex flex-col md:flex-row justify-center md:space-x-10 mt-[70px]"
          >
            <div class="overflow-hidden w-auto rounded">
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
                 Delivering tailored solutions that support your professional growth. Partnering with you to develop a standout digital presence, credible certifications, and a globally recognized portfolio.
                </p>
                <hr class="py-3"/>
                <h4 class="font-bold text-xl py-5">Audit & Assurance</h4>
                <p class="text-gray-400 py-2">
                  Independent audits for clarity, compliance, and confidence. We conduct thorough internal and external IT audits, identifying control gaps, 
                </p>
                <h5 class="font-bold text-xl py-5">Advisory & Consultations</h5>
                <p class="text-gray-400 py-2">
                  At our firm, we go beyond traditional auditing to provide expert advisory and consultation services that empower businesses to make informed decisions.
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