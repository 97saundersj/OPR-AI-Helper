<script>
import UnitTypeSelector from './UnitTypeSelector.vue'
import HybridUnitDecisions from './DecisionTreePaths/HybridUnitDecisions.vue'
import ShootingUnitDecisions from './DecisionTreePaths/ShootingUnitDecisions.vue'

export default {
  name: 'AIDecisionTree',
  components: {
    UnitTypeSelector,
    HybridUnitDecisions,
    ShootingUnitDecisions
  },
  data() {
    return {
      selectedUnitType: ""
    }
  },
  methods: {
  }
}
</script>

<template>
  <div>
    <UnitTypeSelector v-model="selectedUnitType"></UnitTypeSelector>

    <div v-if="selectedUnitType">
      <HybridUnitDecisions v-if="selectedUnitType === 'hybrid'"></HybridUnitDecisions>
      <ShootingUnitDecisions v-if="selectedUnitType === 'shooting'"></ShootingUnitDecisions>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>