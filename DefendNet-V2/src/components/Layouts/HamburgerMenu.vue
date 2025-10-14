<template>
  <div class="relative block md:hidden" v-if="closeMenu" @click="$emit('isOpen')">
   <div class="bg-white pb-3 absolute  h-auto w-screen z-50 ">
    <!-- <span :class=" {'bg-blue-300' : $route.path == '/'}">
    <router-link :to="{name:'home'}" class="text-black">
        Home
    </router-link>
    </span> -->
    <span v-for="(menu,index) in HamburgerMenu" :key="index" :class="[
    'block px-4 py-2',
    $route.path.startsWith(menu.name) ? 'bg-blue-300' : ''
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
    {id:2, list:"about", name:"/about"},
    {id:3, list:"contact", name:"/contact"},
    {id:4, list:"services", name:"/services"}
]
defineProps({
 closeMenu: {
    type: Boolean,
    default: false,
  },
});
</script>

