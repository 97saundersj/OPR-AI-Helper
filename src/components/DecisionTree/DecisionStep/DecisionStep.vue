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

  <div class="decision-step">
    <Arrow class="arrow" v-if="requiredStepsMet && useArrow"></Arrow>

    <div class="card bg-dark decision-card">
      <h2 class="card-header" v-html="choiceText"></h2>

      <div class="d-flex p-2 decision-options">
        <button class="btn m-2" data-cy="btn-yes" :class="modelValue ? 'btn-primary' : 'btn-secondary'" @click="setDecision(true)">Yes</button>
        <button class="btn m-2" data-cy="btn-no" :class="modelValue === false ? 'btn-primary' : 'btn-secondary'" @click="setDecision(false)">No</button>
      </div>

      <div class="card-footer">
        <p v-if="modelValue" v-html="resultYesText"></p>
        <p v-if="modelValue == false" v-html="resultNoText"></p>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>
.decision-options{
  width: auto;
  margin: auto;
  text-align: center;
  max-width: 800px;
  padding: 10px;
}
</style>
