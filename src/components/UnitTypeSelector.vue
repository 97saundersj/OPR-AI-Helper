<script>

export default {
  name: 'UnitTypeSelector',
  props: {
    modelValue: String
  },
  data() {
    return {
      hybridTooltip: "Units that have melee weapons which are better than their ranged weapons.",
      shootingTooltip: "Units that have ranged weapons which are better than their melee weapons.",
      meleeTooltip: "Units that don’t have any ranged weapons.",
    }
  },
  methods: {
   selectUnitType(newUnitType) {
     this.$emit('update:modelValue', newUnitType)
   }
  }
}
</script>

<template>
  <div>
    <div class="decision-card card bg-dark">
      <h2 class="card-header">Select a Unit Type</h2>
      <div class="card-body">
        <button 
            class="btn m-2"
            :class="modelValue === 'hybrid' ? 'btn-primary' : 'btn-secondary'"
            :title="hybridTooltip" @click="selectUnitType('hybrid')">
            Hybrid Unit
        </button>
        <button 
          class="btn m-2"
          :class="modelValue === 'shooting' ? 'btn-primary' : 'btn-secondary'"
          :title="shootingTooltip" @click="selectUnitType('shooting')" 
          disabled>
            Shooting Unit
        </button>

        <button
          class="btn m-2"
          :class="modelValue === 'melee' ? 'btn-primary' : 'btn-secondary'"
          :title="meleeTooltip"
          @click="selectUnitType('melee')"
          disabled>
            Melee Unit
        </button>
      </div>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
