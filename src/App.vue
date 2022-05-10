<script>
import UnitTypeSelector from './components/UnitTypeSelector.vue'

export default {
  name: 'App',
  components: {
    UnitTypeSelector
  }
}
</script>

<template>
  <div>
    <UnitTypeSelector></UnitTypeSelector>
  </div>
</template>

<style>
#app {
  margin: 1%;
}
.decision-card{
  width: auto;
  margin: auto;
  text-align: center;
  max-width: 800px;
  padding: 10px;
}
</style>
