<script type= "text/javascript">
import { ref, defineComponent, VueElement} from 'vue'
import axios from 'axios';
 
 export default {
    element: '#app',
    data() {
        return {
          title: '', 
          img: '',
          traileriframe: '',
          p: '',
          video: [],
          loaded: false,
        }
  },
  methods:{
    getMovie: function() {
      let select = parseInt(this.$refs.select.value);
 
      let specific = axios.get(
    `https://api.themoviedb.org/3/movie/${select}`,
    {
      params: {
        api_key: "dae84c7eae2f2c63d4bdf1e712d56304",
        append_to_response: "videos",
      },
    }
  )
  specific = specific.then((specificData) => {
    this.loaded = true
      var g = "";
      for (let i in specificData.data.genres) {
        g += specificData.data.genres[i].name + ", ";
      }
 
      var pc = "";
      for (let i in specificData.data.production_companies) {
        pc += specificData.data.production_companies[i].name + ", ";
      }
 
      var prod = "";
      for (let i in specificData.data.production_countries) {
        prod += specificData.data.production_countries[i].name + ", ";
      }
      const title = this.title;
  
      const traileriframe = this.traileriframe;
      if (
        specificData.data.videos.results.filter(
          (trailer) => trailer.type === "Trailer"
        ).length > 0
      ) {
        this.traileriframe = `https://www.youtube.com/embed/${
          specificData.data.videos.results
            .filter((trailer) => trailer.type === "Trailer")
            .at(0).key
        }`;
      }
 
      this.img = `https://image.tmdb.org/t/p/w500${specificData.data.poster_path}`;
      this.title = `${specificData.data.title}`;
      this.p = `Status: ${specificData.data.status}
      <br> Release Date: ${specificData.data.release_date} -- Popularity: ${specificData.data.popularity}
      <br> Overview: ${specificData.data.overview} <br> Vote Average: ${specificData.data.vote_average}  -- Vote Count ${specificData.data.vote_count}
      <br> Genre: ${g} <br> Production Companies: ${pc}  -- Production Countries: ${prod}
      <br> Runtime: ${specificData.data.runtime} minutes
      <br> Homepage: <a href = ${specificData.data.homepage}>${specificData.data.homepage}</a> `;
      for (let i = 0; i < specificData.data.videos.results.length; i++) {
        if (specificData.data.videos.results.at(i).type != "Trailer") {
          this.video.push(`https://www.youtube.com/embed/${specificData.data.videos.results.at(i).key}`);
          }
        } 
      });
    }
  }
}
</script>
 
<template>
  <div id="getform">
    <h1>Welcome to a Movie Searcher!</h1>
  <div>
    <select class="select" ref = "select">
      <option value="829280">Enola Holmes 2</option>
      <option value="505642">Black Panther: Wakanda Forever</option>
      <option value="269149">Zootopia</option>
      <option value="616037">Thor: Love and Thunder</option>
      <option value="1037858">The Soccer Football Movie</option>
      <option value="985939">Fall</option>
      <option value="14160">Up</option>
      <option value="436270">Black Adam</option>
      <option value="766475">See How They Run</option>
      <option value="771">Home Alone</option>
      <option value="772">Home Alone 2</option>
    </select>
    <form class="get" @submit.prevent = "getMovie()">
      <input type="submit" value="GET" class="getButton"/>
    </form>
    </div>
  </div>
<div class = "movieData" v-if = "loaded">
  <h2 class = "title" ref = "title">{{title}}</h2>
    <div ref = "extraDiv">
      <img :src = "img"/>
      <iframe :src = "traileriframe"></iframe>
    </div>
    <p v-html= p></p>
    <div v-for = "items in video" :key = items>
      <iframe :src = "items"></iframe>
    </div>
</div>
</template>
 
<style scoped>
  .title{
    width: 100vw
  }
</style>

