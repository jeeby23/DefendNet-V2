<template>
  <button :type="type">{{ label }}
    <slot/>
  </button>
</template>

<script setup>
 defineProps({
    label:{
        type:String
    },
    type:{
        type:String
    }
 })
</script>

<style>

</style>