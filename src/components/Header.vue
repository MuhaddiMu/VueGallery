<template>
    <div class="text-center">
      
    <div class="d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto text-center">
        <div class="inner">
          <h3 class="">Image Gallery Vue.Js</h3>
          <center><div class="col-md-3 form-inline">
              <input class="ml-3 form-control-sm form-control" type="text" name="Search" placeholder="Search Image"><button class="ml-2 btn btn-primary btn-sm"><i class="fas fa-search"></i></button>
          </div></center>
        </div>
      </header>
  <div class="container mt-4">
    <div class="row">
      <div v-for="(Image, index) in Images" :key="index" @click="() => show(index)" class="col-md-3 col-sm-4 col-6 Zoom"><a><img class="img-fluid" :src="Image" /></a></div>
    </div>
  </div>
  
   <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="Images"
        @hide="handleHide"
        class="Display"
      ></vue-easy-lightbox>

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
  data(){
    return {
      Images: [
        'https://vuejsbook.com/img/vuejs/img1.jpg',
        'https://vuejsbook.com/img/vuejs/img2.jpg',
        'https://vuejsbook.com/img/vuejs/img3.jpg',
        'https://vuejsbook.com/img/vuejs/img4.jpg',
        'https://vuejsbook.com/img/vuejs/img5.jpg',
        'https://vuejsbook.com/img/vuejs/img6.jpg',
        'https://vuejsbook.com/img/vuejs/img7.jpg',
        'https://vuejsbook.com/img/vuejs/img8.jpg'
      ],
      visible: false,
      index: 0
    }
  }, 

  methods: {
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
@import 'https://getbootstrap.com/docs/4.0/examples/cover/cover.css';
@import 'https://use.fontawesome.com/releases/v5.8.2/css/all.css';

img {
    -webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.2);
    margin-bottom:20px;
  }
  
  .Zoom img{
  cursor: pointer;
  transition: transform 1s, filter 1s ease-in-out;
  transform-origin: center center;
  filter: brightness(50%);
  }

  .Zoom img:hover {
    filter: brightness(100%);
    transform: scale(1.05);
  }

  .Display{ display:block!important; }
</style>
