<template>
  <div class="h-auto">
    <form>
      <div class="p-5">
        <h1>Send us a message</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ab
          iste porro, veniam ipsa possimus?
        </p>
        <div
          class="bg-[#0BC575] h-[4px] md:h-1 my-4 rounded"
          style="width: 48px"
        ></div>
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <span>
              <BaseInput label="Name" placeholder="Name" />
            </span>
            <span>
              <BaseInput label="company" placeholder="Company" />
            </span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <span>
              <BaseInput label="Phone" placeholder="Phone" />
            </span>
            <span>
              <BaseInput label="Email" placeholer="Email" />
            </span>
          </div>
          <div>
            <BaseInput label="Subject" placeholder="Subject" />
            <Textarea label="Message" placeholder="Message" class="" />
          </div>
        </div>
      </div>
    </form>
   
  </div>
</template>

<script setup>
import BaseInput from "@/ui/Input.vue";
import Textarea from "@/ui/Textarea.vue";
</script>

<style></style>
