<script>
import Arrow from "./Arrow.vue"

export default {
  name: 'DecisionOption',
  components: {
    Arrow
  },
  props: {
    useArrow: {
      type: Boolean,
      default: true
    },
    requiredStepsMet: null,
    modelValue: null,
    choiceText: String,
    resultYesText: {
      type: String,
      default: ''
    },
    resultNoText: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      tooltip: "",
    }
  },
  methods: {
   setDecision(decision) {
     this.$emit('update:modelValue', decision)
   }
  }
}
</script>

<template>
<div v-if="requiredStepsMet">

  <div class="decision-card">
    <Arrow v-if="requiredStepsMet && useArrow"></Arrow>

    <div class="card bg-dark objectives-under-control">
      <h2 class="card-header">{{ choiceText }}</h2>

      <div class="d-flex p-2 decision-card">
        <button class="btn m-2" :class="modelValue ? 'btn-primary' : 'btn-secondary'" @click="setDecision(true)">Yes</button>
        <button class="btn m-2" :class="modelValue === false ? 'btn-primary' : 'btn-secondary'" @click="setDecision(false)">No</button>
      </div>

      <div class="card-footer">
        <p v-if="modelValue">{{ resultYesText }}</p>
        <p v-if="modelValue == false">{{ resultNoText }}</p>
      </div>
    </div>
  </div>

</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
