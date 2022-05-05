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
  <UnitTypeSelector></UnitTypeSelector>
</template>

<style>
#app {
  margin: 1%;
}
</style>
