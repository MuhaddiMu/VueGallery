<template>
    <body id="body" class="text-center">
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto text-center">
        <div class="inner">
          <h3 class="">Image Gallery Vue.Js</h3>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Learning base project Vue Gallery, by <a href="https://muhaddis.info">Muhaddis</a>.</p>
        </div>
      </footer>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

@import 'https://getbootstrap.com/docs/4.0/examples/cover/cover.css';

</style>
