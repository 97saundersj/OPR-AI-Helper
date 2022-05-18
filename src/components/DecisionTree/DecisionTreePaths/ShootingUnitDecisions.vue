<script>
import Arrow from "../Arrow.vue"
import DecisionStep from "../DecisionStep.vue"

export default {
  name: 'ShootingUnit',
  components: {
    Arrow,
    DecisionStep
  },
  data() {
    return {
      objectiveNotUnderControl: null,
      objectivesNotControlled_inShootingRange: null,
      objectivesControlled_inShootingRange: null,
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
      class="objectivesNotControlled-inShootingRange"
      :requiredStepsMet="objectiveNotUnderControl"
      v-model="objectivesNotControlled_inShootingRange"
      :choiceText="'If you Advance will any enemies be in shooting range?'"
      :resultYesText="'Advance toward objective and shoot if possible.'"
      :resultNoText="'Rush toward objective.'">
    </DecisionStep>

    <DecisionStep 
      class="objectivesControlled-inShootingRange"
      :requiredStepsMet="objectiveNotUnderControl === false"
      v-model="objectivesControlled_inShootingRange"
      :choiceText="'If you Advance will any enemies be in shooting range?'"
      :resultYesText="'Advance toward enemy and shoot if possible.'"
      :resultNoText="'Rush toward enemy.'">
    </DecisionStep>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
