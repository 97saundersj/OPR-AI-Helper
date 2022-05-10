<script>
import UnitTypeSelector from './UnitTypeSelector.vue'
import HybridUnit from './HybridUnit.vue'
export default {
  name: 'AIDecisionTree',
  components: {
    UnitTypeSelector,
    HybridUnit
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
      <HybridUnit v-if="selectedUnitType === 'hybrid'"></HybridUnit>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>