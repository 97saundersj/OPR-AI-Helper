<script>

export default {
  name: 'DecisionOption',
  props: {
    modelValue: null,
    choiceText: String,
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
<div>
  <div class="decision-card">
    <div class="card bg-dark objectives-under-control">
      <h2 class="card-header">{{ choiceText }}</h2>
      <div class="d-flex p-2 decision-card">
        <button class="btn m-2" :class="modelValue ? 'btn-primary' : 'btn-secondary'" @click="setDecision(true)">Yes</button>
        <button class="btn m-2" :class="modelValue === false ? 'btn-primary' : 'btn-secondary'" @click="setDecision(false)">No</button>
      </div>
    </div>
  </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
