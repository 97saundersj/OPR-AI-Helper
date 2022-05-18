<script>
import Arrow from "../../DecisionTree/Arrow.vue"
import DecisionStep from "../../DecisionTree/DecisionStep.vue"

export default {
  name: 'HybridUnit',
  components: {
    Arrow,
    DecisionStep
  },
  data() {
    return {
      objectiveNotUnderControl: null,
      enemiesInWay: null,
      inRushRange: null,
      inShootingRange: null,
      inChargeRange: null,
      inShootingRangeOfEnemy: null 
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
      class="objectives-under-control"
      :requiredStepsMet="objectiveNotUnderControl"
      v-model="enemiesInWay"
      :choiceText="'Are there any enemies in the way?'"
      :resultYesText="'Charge enemy if possible,<br/>-else Advance toward objective and shoot if possible,<br/>-else Rush toward objective.'">
    </DecisionStep>

    <DecisionStep 
      class="enemies-in-way"
      :requiredStepsMet="objectiveNotUnderControl && enemiesInWay == false"
      v-model="inRushRange"
      :choiceText="'Is the objective in Rush range but not in Advance range?'"
      :resultYesText="'Rush toward objective.'">
    </DecisionStep>

    <DecisionStep 
      class="in-shooting-range"
      :requiredStepsMet="objectiveNotUnderControl && enemiesInWay == false && inRushRange == false"
      v-model="inShootingRange"
      :choiceText="'If you Advance will any enemies be in shooting range?'"
      :resultYesText="'Advance toward objective and shoot if possible.'"
      :resultNoText="'Rush toward objective.'">
    </DecisionStep>

    <DecisionStep 
      class="enemies-in-charge-range"
      :requiredStepsMet="objectiveNotUnderControl == false"
      v-model="inChargeRange"
      :choiceText="'Are any enemies in Charge range?'"
      :resultYesText="'Charge enemy.'">
    </DecisionStep>

    <DecisionStep 
      class="advance-into-shooting-range"
      :requiredStepsMet="objectiveNotUnderControl == false && inChargeRange == false"
      v-model="inShootingRangeOfEnemy"
      :choiceText="'If you Advance will any enemies be in shooting range?'"
      :resultYesText="'Advance toward enemy and shoot if possible.'"
      :resultNoText="'Rush toward enemy.'">
    </DecisionStep>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
