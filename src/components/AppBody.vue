<template>
  <div class="row text-center pl-5">
  
  <div class="p-1" v-for="Ach in LifeAch" v-bind:key="Ach.No" @click="Ach.show = !Ach.show">
    <div  class="card text-white bg-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">Achievement {{Ach.No}} </div>
      <div class="card-body">
        <h6 v-show="Ach.show" class="card-title">{{Ach.Ach}}</h6>
      </div>
    </div>
  </div>

  </div>
</template>

<script>

export default {
  props: {
    LifeAch: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
