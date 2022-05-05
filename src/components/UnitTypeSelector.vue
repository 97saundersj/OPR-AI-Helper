<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hybridTooltip: "Units that have melee weapons which are better than their ranged weapons.",
      shootingTooltip: "Units that have ranged weapons which are better than their melee weapons.",
      meleeTooltip: "Units that don’t have any ranged weapons."
    }
  }
}
</script>

<template>
  <div class="card bg-dark p-2 hello">
  <div class="greetings">
    <h2>Select a Unit Type</h2>
    <div class="d-flex p-2">
      <button class="btn btn-primary m-2" :title="hybridTooltip">Hybrid Unit</button>
      <button class="btn btn-primary m-2" :title="shootingTooltip">Shooting Unit</button>
      <button class="btn btn-primary m-2" :title="meleeTooltip">Melee Unit</button>
    </div>
  </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
