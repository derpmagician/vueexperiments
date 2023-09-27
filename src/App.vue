<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import CustomHeader from './components/CustomHeader.vue';

const isDark = useDark(
  {
    selector: 'body',
    // attribute: 'b-dark',
    valueDark: 'bd-dark',
    valueLight: 'bd-light',
  },
  {
    selector: 'a',
    // attribute: 'b-dark',
    valueDark: 'bd-dark',
    valueLight: 'bd-light',
  },

  )
const toggleDark = useToggle(isDark)

</script>

<template>

<div class="container-fluid">
  <CustomHeader :isDark="isDark" @toggleDark="toggleDark"
    class="container my-2 p-4" :class="isDark ? 'bg-dark' : 'bg-light'"/>

  <main class="container my-2 p-4" :class="isDark ? 'bg-dark' : 'bg-light'">
    <RouterView />
  </main>
</div>

</template>

<style>

.bd-dark  {
  background: rgb(4, 21, 95);
  color: white;
}

.bd-light  {
  background: rgb(210, 212, 193);
}




</style>
