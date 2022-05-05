<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<template>
  <div class="card bg-dark p-2 hello">
  <div class="greetings">
    <h2>Select a Unit Type</h2>
    <div class="d-flex p-2">
      <button class="btn btn-primary m-2" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Hybrid Unit</button>
      <button class="btn btn-primary m-2">Shooting Unit</button>
      <button class="btn btn-primary m-2">Melee Unit</button>
    </div>
  </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
