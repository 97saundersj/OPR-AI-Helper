<script>
import UnitTypeSelector from './UnitTypeSelector.vue'

export default {
  name: 'AIDecisionTree',
  components: {
    UnitTypeSelector
  },
  data() {
    return {
      selectedUnitType: "test"
    }
  },
  methods: {
   unitTypeChanged(newUnitType) {
     this.selectedUnitType = newUnitType
   }
  }
}
</script>

<template>
  <div>
    <UnitTypeSelector v-model="selectedUnitType"></UnitTypeSelector>
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
