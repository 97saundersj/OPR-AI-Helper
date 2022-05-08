<script>
import HybridUnit from './HybridUnit.vue'

export default {
  name: 'UnitTypeSelector',
  components: {
    HybridUnit
  },
  props: {
    msg: String
  },
  data() {
    return {
      hybridTooltip: "Units that have melee weapons which are better than their ranged weapons.",
      shootingTooltip: "Units that have ranged weapons which are better than their melee weapons.",
      meleeTooltip: "Units that don’t have any ranged weapons.",
      selectedUnit: ""
    }
  }
}
</script>

<template>
  <div class="card bg-dark p-2 border-secondary">
  <div class="decision-card card bg-dark border-secondary">
    <h2>Select a Unit Type</h2>
    <div class="d-flex p-2">
      <button class="btn btn-primary m-2" :title="hybridTooltip" @click="selectedUnit = 'hybrid'">Hybrid Unit</button>
      <button class="btn btn-primary m-2" :title="shootingTooltip" @click="selectedUnit = 'shooting'">Shooting Unit</button>
      <button class="btn btn-primary m-2" :title="meleeTooltip" @click="selectedUnit = 'melee'">Melee Unit</button>
    </div>
  </div>
  <div v-if="selectedUnit" class="decision-card">
      <HybridUnit v-if="selectedUnit === 'hybrid'"></HybridUnit>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
