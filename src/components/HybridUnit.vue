<script>
import Arrow from "./Arrow.vue"

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
          <button class="btn btn-primary m-2" :title="Yes" @click="objectiveNotUnderControl = true">Yes</button>
          <button class="btn btn-primary m-2" :title="No" @click="objectiveNotUnderControl = false">No</button>
        </div>
      </div>
    </div>

    <Arrow v-if="objectiveNotUnderControl"></Arrow>

    <div class="decision-card" v-if="objectiveNotUnderControl">
      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">Are there any enemies in the way?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn btn-primary m-2" :title="Yes" @click="enemiesInWay = true">Yes</button>
          <button class="btn btn-primary m-2" :title="No" @click="enemiesInWay = false">No</button>
        </div>

        <div class="card-footer" v-if="enemiesInWay">
          <p>Charge enemy if possible, else Advance toward objective and shoot if possible, else Rush toward objective</p>
        </div>
      </div>
    </div>

    <Arrow v-if="enemiesInWay == false"></Arrow>

    <div class="decision-card" v-if="enemiesInWay == false">
      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">Is the objective in Rush range but not in Advance range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn btn-primary m-2" :title="Yes" @click="inRushRange = true">Yes</button>
          <button class="btn btn-primary m-2" :title="No" @click="inRushRange = false">No</button>
        </div>

        <div v-if="inRushRange">
          <p>Rush toward objective</p>
        </div>
      </div>
    </div>

    <Arrow v-if="inRushRange == false"></Arrow>

    <div class="decision-card" v-if="inRushRange == false">
      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">If you Advance will any enemies be in shooting range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn btn-primary m-2" :title="Yes" @click="inShootingRange = true">Yes</button>
          <button class="btn btn-primary m-2" :title="No" @click="inShootingRange = false">No</button>
        </div>

        <div v-if="inShootingRange">
          <p>Advance toward objective and shoot if possible</p>
        </div>

        <div v-if="inShootingRange == false">
          <p>Rush toward objective</p>
        </div>
      </div>
    </div>

    <Arrow v-if="objectiveNotUnderControl == false"></Arrow>

    <div class="decision-card" v-if="objectiveNotUnderControl == false">
      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">Are any enemies in Charge range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn btn-primary m-2" :title="Yes" @click="inChargeRange = true">Yes</button>
          <button class="btn btn-primary m-2" :title="No" @click="inChargeRange = false">No</button>
        </div>

        <div v-if="inChargeRange">
          <p>Charge enemy</p>
        </div>
      </div>
    </div>

    <Arrow v-if="inChargeRange == false"></Arrow>

    <div class="decision-card" v-if="inChargeRange == false">
      <div class="card bg-dark decision-card enemies-in-way">
        <h2 class="card-header">If you Advance will any enemies be in shooting range?</h2>
        <div class="d-flex p-2 decision-card">
          <button class="btn btn-primary m-2" :title="Yes" @click="inShootingRangeOfEnemy = true">Yes</button>
          <button class="btn btn-primary m-2" :title="No" @click="inShootingRangeOfEnemy = false">No</button>
        </div>

        <div v-if="inShootingRangeOfEnemy">
          <p>Advance toward enemy and shoot if possible</p>
        </div>

        <div v-if="inShootingRangeOfEnemy == false">
          <p>Rush toward enemy</p>
        </div>
      </div>
    </div>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
