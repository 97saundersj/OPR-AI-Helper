<script>
import UnitTypeSelector from './UnitTypeSelector.vue'
import HybridDecisionTree from './DecisionTreePaths/HybridDecisionTree.vue'
import ShootingDecisionTree from './DecisionTreePaths/ShootingDecisionTree.vue'
import MeleeDecisionTree from './DecisionTreePaths/MeleeDecisionTree.vue'

export default {
  name: 'AIDecisionTree',
  components: {
    UnitTypeSelector,
    HybridDecisionTree,
    ShootingDecisionTree,
    MeleeDecisionTree
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
      <HybridDecisionTree v-if="selectedUnitType === 'hybrid'"></HybridDecisionTree>
      <ShootingDecisionTree v-if="selectedUnitType === 'shooting'"></ShootingDecisionTree>
      <MeleeDecisionTree v-if="selectedUnitType === 'melee'"></MeleeDecisionTree>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>