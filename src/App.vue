<script>
import HelloWorld from './components/HelloWorld.vue'
import UnitTypeSelector from './components/UnitTypeSelector.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UnitTypeSelector
  }
}
</script>

<template>
  <HelloWorld v-if="false" msg="Welcome to Your Vue.js App"/>
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
  max-width: 500px;
  padding: 10px;
}
</style>
