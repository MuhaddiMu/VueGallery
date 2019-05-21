<template>
    <div class="text-center">
      
    <div class="d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto text-center">
        <div class="inner">
          <h3 class="">Image Gallery Vue.Js</h3>
        </div>
      </header>

  <div class="container mt-4">
    <div class="row">
      <div v-for="(Image, index) in Images" :key="index" class="col-md-3 col-sm-4 col-6 Zoom"><a><img class="img-fluid" :src="Image.Thumbnail" /></a></div>
    </div>
  </div>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Learning base project Vue Gallery, by <a href="https://muhaddis.info">Muhaddis</a>.</p>
        </div>
      </footer>
    </div>

    <script2 src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script2>
    <script2 src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script2>
    <script2 src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script2>
  </div>
</template>

<script>



export default {
  name: 'Header',
  components: {

  },
  data(){
    return {
      Images: [
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img1.jpg'},
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img2.jpg'},
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img3.jpg'},
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img4.jpg'},
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img5.jpg'},
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img6.jpg'},
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img7.jpg'},
          {Thumbnail: 'https://vuejsbook.com/img/vuejs/img8.jpg'}
      ]
    }
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
