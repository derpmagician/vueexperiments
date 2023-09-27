<script setup>
const props = defineProps({
  // toggleDark: {
  //   type: Function,
  // },
  isDark: {
    type: Boolean,
  },
})

defineEmits(['toggleDark'])
</script>

<template>
  <header >
    <nav class="row ">
      <div class="" >
        <router-link to="/" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary  bd-dark ' : 'btn-primary'">Home
        </router-link>
        <router-link to="/cssexperiment" class="btn col me-2"
          :class="isDark ? 'btn-outline-primary bd-dark' : 'btn-primary'">Css Experiment
        </router-link>
        <label for="light">Cambiar luz</label>
        <input id="light" type="checkbox" class="me-2" :checked="isDark"
          @change="$emit('toggleDark')" />


        <!-- <button class="btn btn-primary me-2" @click="$emit('toggleDark(), isDark')">Cambiar tema</button> {{ isDark }} -->
      </div>
    </nav>

  </header>
</template>

<style>

</style>