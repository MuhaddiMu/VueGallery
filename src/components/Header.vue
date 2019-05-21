<template>
    <body id="body" class="text-center">
      
    <div class="d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto text-center">
        <div class="inner">
          <h3 class="">Image Gallery Vue.Js</h3>
        </div>
      </header>

  <div class="container mt-4">
    <div class="row">
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img1.jpg" /></a></div>
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img2.jpg" /></a></div>
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img3.jpg" /></a></div>
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img4.jpg" /></a></div>
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img5.jpg" /></a></div>
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img6.jpg" /></a></div>
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img7.jpg" /></a></div>
      <div class="col-md-3 col-sm-4 col-6 Zoom"><a href="#"><img class="img-fluid" src="https://vuejsbook.com/img/vuejs/img8.jpg" /></a></div>
    </div>
  </div>

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

img {
    -webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    margin-bottom:20px;
  }

  img:hover {
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  }

  .Zoom img{
  cursor: pointer;
  transition: transform 2s, filter 1.2s ease-in-out;
  transform-origin: center center;
  filter: brightness(50%);
  }

  .Zoom img:hover {
    filter: brightness(100%);
    transform: scale(1.05);
  }
</style>
