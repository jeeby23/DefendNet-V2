<template>
  <div class="relative block md:hidden" v-if="closeMenu" @click="$emit('isOpen')">
   <div class="bg-white pb-3 absolute  h-auto w-screen z-50 ">
    <span v-for="(menu,index) in HamburgerMenu" :key="index"  :class="[
    'block px-4 py-2', 
    $route.path === menu.name ? 'bg-blue-300' : 'text-gray-700'
  ]">
      <router-link :to="menu.name" class="text-black flex flex-col space-y-4">
       {{ menu.list }}
      </router-link>
    </span>
</div>
  </div>
</template>

<script setup>

  
const HamburgerMenu = [
    {id:1, list:"Home", name:"/"},
    {id:2, list:"About", name:"/about"},
    {id:3, list:"Contact", name:"/contact"},
    {id:4, list:"Services", name:"/services"},
    {id:4, list:"Career", name:"/career"}
]
defineProps({
 closeMenu: {
    type: Boolean,
    default: false,
  },
});
</script>

