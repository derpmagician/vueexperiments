<script setup>
import { ref, computed } from 'vue';
import ChecksList from './ChecksList.vue';

const checkedNames = ref([])
const checkOptions= [
  "Option1", "Option2", "Option3", "Option4"
]
const num = ref(1);
defineProps({
  // msg: {
  //   type: String,
  //   required: true
  // }
})

const classOdd = computed(() => {
  if (num.value === 1) {
    return "primaryCol"
  } else return "secondaryCol"
})

const classcomputed = computed(() => (index) => {
  return index % 2 !== 0 ? 'bg-secondary' : 'bg-warning'
});


</script>

<template>
<div class="container-fluid">
  <section class="row">
    <div class="col">
      <div v-for="(optionCheck, index) in checkOptions" :key=index className="" >
        <input type="checkbox" :id={optionCheck} :value={optionCheck} v-model="checkedNames">
      </div>
    </div>
  </section>
  <!-- <hr> -->
  <ChecksList :checkedNames=checkedNames />

  <section v-for="(item, index) in checkedNames" :key="index" className="row m-0">
    <div :class="classcomputed(index)">
      {{ item.optionCheck }}
    </div>
  </section>
  <hr>
  <section :class="classOdd" >
    qwqwqw
  </section>

</div>

</template>

<style scoped>
.primaryCol {
  background: #7c0541;
  color: gold;
}
.secondaryCol {
  background: #2f0461;
  color: gold;
}
</style>
