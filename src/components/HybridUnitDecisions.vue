<script>
import Arrow from "./Arrow.vue"
import DecisionStep from "./DecisionStep.vue"
export default {
  name: 'HybridUnit',
  components: {
    Arrow
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
    <div class="decision-card">
      <div class="card bg-dark objectives-under-control">
        <h2 class="card-header">Are there any objectives not under the AI’s control?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn m-2" :class="objectiveNotUnderControl ? 'btn-primary' : 'btn-secondary'" @click="objectiveNotUnderControl = true">Yes</button>
          <button class="btn m-2" :class="objectiveNotUnderControl === false ? 'btn-primary' : 'btn-secondary'" @click="objectiveNotUnderControl = false">No</button>
        </div>
      </div>
    </div>

    <div class="decision-card" v-if="objectiveNotUnderControl">
      <Arrow></Arrow>

      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">Are there any enemies in the way?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn m-2" :class="enemiesInWay === true ? 'btn-primary' : 'btn-secondary'" @click="enemiesInWay = true">Yes</button>
          <button class="btn m-2" :class="enemiesInWay === false ? 'btn-primary' : 'btn-secondary'" @click="enemiesInWay = false">No</button>
        </div>

        <div class="card-footer" v-if="enemiesInWay">
          <p>Charge enemy if possible, else Advance toward objective and shoot if possible, else Rush toward objective.</p>
        </div>
      </div>
    </div>

    <div class="decision-card" v-if="objectiveNotUnderControl && enemiesInWay == false">
      <Arrow></Arrow>

      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">Is the objective in Rush range but not in Advance range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn m-2" :class="inRushRange ? 'btn-primary' : 'btn-secondary'" @click="inRushRange = true">Yes</button>
          <button class="btn m-2" :class="inRushRange === false ? 'btn-primary' : 'btn-secondary'" @click="inRushRange = false">No</button>
        </div>

        <div v-if="inRushRange">
          <p>Rush toward objective.</p>
        </div>
      </div>
    </div>

    <div class="decision-card" v-if="objectiveNotUnderControl && enemiesInWay == false && inRushRange == false">
      <Arrow></Arrow>

      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">If you Advance will any enemies be in shooting range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn m-2" :class="inShootingRange ? 'btn-primary' : 'btn-secondary'" @click="inShootingRange = true">Yes</button>
          <button class="btn m-2" :class="inShootingRange === false ? 'btn-primary' : 'btn-secondary'" @click="inShootingRange = false">No</button>
        </div>

        <div v-if="inShootingRange">
          <p>Advance toward objective and shoot if possible.</p>
        </div>

        <div v-if="inShootingRange == false">
          <p>Rush toward objective.</p>
        </div>
      </div>
    </div>

    <div class="decision-card" v-if="objectiveNotUnderControl == false">
      <Arrow></Arrow>

      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">Are any enemies in Charge range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn m-2" :class="inChargeRange ? 'btn-primary' : 'btn-secondary'" @click="inChargeRange = true">Yes</button>
          <button class="btn m-2" :class="inChargeRange === false ? 'btn-primary' : 'btn-secondary'" @click="inChargeRange = false">No</button>
        </div>

        <div v-if="inChargeRange">
          <p>Charge enemy.</p>
        </div>
      </div>
    </div>

    <div class="decision-card" v-if="objectiveNotUnderControl == false && inChargeRange == false">
      <Arrow></Arrow>

      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">If you Advance will any enemies be in shooting range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn m-2" :class="inShootingRangeOfEnemy ? 'btn-primary' : 'btn-secondary'" @click="inShootingRangeOfEnemy = true">Yes</button>
          <button class="btn m-2" :class="inShootingRangeOfEnemy === false ? 'btn-primary' : 'btn-secondary'" @click="inShootingRangeOfEnemy = false">No</button>
        </div>

        <div v-if="inShootingRangeOfEnemy">
          <p>Advance toward enemy and shoot if possible.</p>
        </div>

        <div v-if="inShootingRangeOfEnemy == false">
          <p>Rush toward enemy.</p>
        </div>
      </div>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
