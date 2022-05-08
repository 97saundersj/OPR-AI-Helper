<script>
export default {
  name: 'ArrowImage',
}
</script>

<template>
  <div class="arrow-container" style="">
    <svg  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" float="left" >
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="3" 
        refX="0" refY="1.5" orient="auto" fill="lightgray">
          <polygon points="0 0, 5 1.5, 0 3" />
        </marker>
      </defs>
      <line x1="0" y1="50" x2="50" y2="50" stroke="lightgray" 
      stroke-width="8" marker-end="url(#arrowhead)" />
    </svg>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrow-container {
  width: 50px;
  margin: auto;
  margin-top: -10px;
  transform: rotate(90deg);
}
</style>
