<template>
	<div class="text-center">
		<div class="d-flex h-100 p-3 mx-auto flex-column">
			<header class="masthead mb-auto text-center">
				<div class="inner">
					<h3 class="">Unsplash Image Gallery</h3>
					<div class="d-flex justify-content-center h-100">
						<div class="searchbar">
							<input v-model="query" @keyup.enter="updateQuery" class="search_input" type="text" autofocus name="" placeholder="Search Image">
								<a href="#" @click="updateQuery" class="search_icon">
									<i class="fas fa-search"></i>
								</a>
							</div>
						</div>
					</div>
				</header>
				<div class="container mt-4">
					<div class="row">
						<div v-cloak v-for="(image, index) in images" :key="index" @click="() => show(index)" class="col-md-3 col-sm-4 col-6 Zoom">
							<a>
								<img class="img-fluid" :src="image.urls.small" />
							</a>
						</div>
					</div>
				</div>

      <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="LBox"
        @hide="handleHide"
        class="Display">
      </vue-easy-lightbox>

				<footer class="mastfoot mt-auto">
					<div class="inner">
						<p>Learning base project Vue Gallery, by 
							<a href="https://muhaddis.info">Muhaddis</a>.
						</p>
					</div>
				</footer>
			</div>
			<script2 src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script2>
			<script2 src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script2>
			<script2 src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script2>
		</div>
	</template>
	<script>

var CLIENT_ID = "4ef3bf5b74026ce2dce008a076cbd52763f6b3c6b4583920ac70ebe462bf0bc1";
function makeQuery(query) {
  return "https://api.unsplash.com/photos/search/?query=" + query +  "&client_id=" + CLIENT_ID + "&per_page=8&orientation=landscape";
}

function doQuery(self) {
  window.fetch(makeQuery(self.query))
  .then(function(res){
    return res.json();
  })
  .then(function(res){
    self.images = res;
    var LBox = res;
    var LBoxImgs = [];
    for(var i = 0; i < LBox.length; i++){
      LBoxImgs[i] = LBox[i].urls.full;
      self.LBox = LBoxImgs;
    }
    
  }); 
}

export default {
  data(){
    return {
      images: [],
      LBox: [],
      query: 'Landscape',
      visible: false,
      index: 0,
    }
  },
    ready: function() {
      doQuery(this);
    },
  methods: {
   updateQuery() {
    doQuery(this); 
    this.LBox = [];
  },
    show (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.visible = false
    }
  },
  computed: {
    lightboxImageList() {
      const images = [...this.images];
      return images.map(imgObj => {
        return imgObj.urls.full || ''
      })
    }
  }
}
</script>
	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped>
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

.searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.3s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 250px;
    caret-color:red;
    transition: width 0.3s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    }
</style>
