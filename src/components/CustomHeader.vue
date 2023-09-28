<script setup>
const props = defineProps({
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
        <label for="lightChck">Cambiar luz</label>
        <input id="lightChck" type="checkbox" name="ligh_check" class="me-2" :checked="isDark"
          @change="$emit('toggleDark')" />
        
      </div>
    </nav>

  </header>
</template>

<style>

</style>