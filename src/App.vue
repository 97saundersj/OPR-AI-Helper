<script>
import AIDecisionTree from './components/DecisionTree/AIDecisionTree.vue'
import NavBar from './components/NavBar.vue'
import UnitTypeSelector from "./components/DecisionTree/UnitTypeSelector.vue"
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
  name: 'App',
  components: {
    NavBar,
    AIDecisionTree,
    UnitTypeSelector
  },
  mounted() {
    // Initialize Bootstrap tooltip
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(tooltipNode => new Tooltip(tooltipNode))
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
