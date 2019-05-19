<template>

  <div id="app">
    <AppHeader></AppHeader>
    <AppBody v-bind:LifeAch="LifeAch"></AppBody>
    <AppFooter></AppFooter>

    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Sketchy</h1>
    <div>
        <a href="#" class="btn btn-primary">Primary</a>
        <a href="#" class="btn btn-secondary">Secondary</a>
        <a href="#" class="btn btn-success">Success</a>
        <a href="#" class="btn btn-info">Info</a>
        <a href="#" class="btn btn-warning">Warning</a>
        <a href="#" class="btn btn-danger">Danger</a>
    </div>


  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      LifeAch: [
        {No: 1, Ach: "Cyber Security", show: true},
        {No: 2, Ach: "Perguidex", show: true},
        {No: 3, Ach: "Developer of The Year", show: true},
        {No: 4, Ach: "Best Software Company", show: true},
        {No: 5, Ach: "Billionaire", show: true},
        {No: 6, Ach: "Technology Reformer", show: true},
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
