<script>
import AIDecisionTree from './components/AIDecisionTree.vue'
import NavBar from './components/NavBar.vue'
import UnitTypeSelector from "./components/UnitTypeSelector.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    AIDecisionTree,
    UnitTypeSelector
  }
}
</script>

<template>
  <div>
    <NavBar></NavBar>
    <AIDecisionTree></AIDecisionTree>
  </div>
</template>

<style>
.header {
    padding-left: 1%;
    margin-bottom: 1%;
  }
.decision-card{
  width: auto;
  margin: auto;
  text-align: center;
  max-width: 800px;
  padding: 10px;
}
</style>
