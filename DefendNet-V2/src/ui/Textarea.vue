<template>
     <div class="my-4">
    <label :for="id" class="block text-sm mb-1 text-gray-700 dark:text-gray-400 font-medium">
      {{ label }}
    </label>
     <Textarea v-model="value" :placeholder="placeholder" class="resize-none w-full" rows="5" cols="30"/>
  </div>
 
</template>

<script setup>
import Textarea from 'primevue/textarea';
defineProps({
    label:String,
    placeholder:String
})
</script>

<style>

</style>