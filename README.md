![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg) ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)

# Vue Gallery
Vue Gallery is minimal design photo search one-page app developed using Vue.js which uses Unsplash JSON APIs for photo search and [Lightbox](https://github.com/XiongAmao/vue-easy-lightbox).
See [Live](https://muhaddimu.github.io/VueGallery/) here: [https://muhaddimu.github.io/VueGallery/](https://muhaddimu.github.io/VueGallery/)
## Project setup
Compiles and hot-reloads for development
```
git clone https://github.com/MuhaddiMu/VueGallery
```
```
npm install
```
```
npm run serve
```

## API Usage
To access the Unsplash API, first [register](https://unsplash.com/developers) as a developer.
Create an Application and get get your Access Key.
Update your Unsplash ACCESS_KEY in [Header.vue](https://github.com/MuhaddiMu/VueGallery/blob/master/src/components/Header.vue#L47)
```
  var CLIENT_ID = "YOUR_UNSPLASH_ACCESS_KEY";
   function makeQuery(query) {
     return "https://api.unsplash.com/photos/search/?query=" + query +  "&client_id=" + CLIENT_ID + "&per_page=8&orientation=landscape";
   }
```

## Contributions
Any suggestions, questions & feedbacks are welcome. Feel free to contribute the more functionality :)
