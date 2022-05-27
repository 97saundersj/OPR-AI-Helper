<script>
import Arrow from "../Arrow.vue"
import DecisionStep from "../DecisionStep.vue"

export default {
  name: 'MeleeUnit',
  components: {
    Arrow,
    DecisionStep
  },
  data() {
    return {
      objectiveNotUnderControl: null,
      enemiesInWay: null,
      inChargeRange: null,
    }
  }
}
</script>

<template>
  <div>
    <DecisionStep 
      class="objectives-under-control"
      :useArrow="false"
      :requiredStepsMet="true"
      v-model="objectiveNotUnderControl"
      :choiceText="'Are there any objectives not under the AI’s control?'">
    </DecisionStep>

    <DecisionStep 
      class="enemiesInWay"
      :requiredStepsMet="objectiveNotUnderControl"
      v-model="enemiesInWay"
      :choiceText="'Are there any enemies in the way?'"
      :resultYesText="'Charge enemy if possible,<br/>Else Rush toward objective.'"
      :resultNoText="'Rush toward objective.'">
    </DecisionStep>

    <DecisionStep 
      class="objectivesControlled-inShootingRange"
      :requiredStepsMet="objectiveNotUnderControl === false"
      v-model="inChargeRange"
      :choiceText="'Are any enemies in Charge range?'"
      :resultYesText="'Charge enemy.'"
      :resultNoText="'Rush toward enemy.'">
    </DecisionStep>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
