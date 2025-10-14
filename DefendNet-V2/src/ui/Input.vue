<!-- <template>
  <div class="flex flex-col gap-2 w-full">
    <label class="text-sm font-medium text-gray-700">{{ label }}</label>
    <InputText 
      type="text" 
     
      class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
    />
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';

defineProps({
  label: String,
 
})
</script> -->
<template>
  <div class="my-4">
    <label :for="id" class="block text-sm mb-1 text-gray-700 dark:text-gray-400 font-medium">
      {{ label }}
    </label>
    <InputText
      :id="id"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      class="w-full px-3 py-3 placeholder:text-sm border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(25,152,131)] "
    />
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
const props = defineProps({
  label: { type: String },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  id: { type: String, default: () => `input-${Math.random().toString(36).substring(2, 9)}` },
})

const model = defineModel()
</script>
