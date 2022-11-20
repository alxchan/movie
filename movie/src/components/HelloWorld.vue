      <template>
        <!-- <div id="getform">
          <h1>Welcome to a Movie Searcher!</h1>
        <div>
          <select class="select" v-model = "select" @change = "">
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
        </div> -->
<h1>Welcome to a Movie Searcher!</h1>
<div id = "getform">
  <form class = "form" @submit.prevent = "findMovie()">
    <input type="search" class = "search" placeholder = "Search Movies Here!" ref = "search">
    <input type ="submit" class = "submit"/>
  </form>
    <form class = "get" @submit.prevent = "getMovie()">
        <input type = "submit" value = "GET" class = "getButton"/>
    </form>
    <select class="select" ref = "select" @change = "">
      <option  v-for = "ids in values" :value = "ids.id">{{ids.title}}</option>
    </select>
</div>


      <div class = "movieData" v-if = "loaded">
        <h2 class = "title" v-html = title></h2>
          <div class = "extraDiv" ref = "extraDiv">
            <img :src = "img"/>
            <iframe :src = "traileriframe"></iframe>
          </div>
          <p class = movieInfo v-html= p></p>
          <h2 class = "video">Videos</h2>
          <div class = "videos">
          <div v-for = "items in video">
            <iframe :src = "items"></iframe>
          </div>
        </div>
      </div>
      </template>
<script setup>
import { ref, defineComponent, VueElement} from 'vue'
import axios from 'axios';
const select = ref()
const search = ref();
const values = ref([])
const title = ref(null)
const img = ref()
const traileriframe = ref()
const p = ref()
const video = ref([])
const loaded = ref()

let findMovie = function(){
  let query = this.search.value;
  this.values = [];
  let response = axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "dae84c7eae2f2c63d4bdf1e712d56304",
      query: query,
    },
  });
  response = response.then((moviesData) => {
    for (let movie of moviesData.data.results) {
      this.values.push({
        title: movie.title,
        id: movie.id,
      })
      console.log(values);
    }
  });
}


const getMovie = function() {
      let specific = axios.get(
    `https://api.themoviedb.org/3/movie/${this.select.value}`,
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
      this.title = specificData.data.title
      this.img = `https://image.tmdb.org/t/p/w500${specificData.data.poster_path}`;
      this.p = `Status: ${specificData.data.status}
      <br> Release Date: ${specificData.data.release_date} -- Popularity: ${specificData.data.popularity}
      <br> Overview: ${specificData.data.overview} <br> Vote Average: ${specificData.data.vote_average}  -- Vote Count ${specificData.data.vote_count}
      <br> Genre: ${g} <br> Production Companies: ${pc}  -- Production Countries: ${prod}
      <br> Runtime: ${specificData.data.runtime} minutes
      <br> Homepage: <a href = ${specificData.data.homepage}>${specificData.data.homepage}</a> `;
        this.video = [];
      for (let i = 0; i < specificData.data.videos.results.length; i++) {
        if (specificData.data.videos.results.at(i).type != "Trailer") {
          this.video.push(`https://www.youtube.com/embed/${specificData.data.videos.results.at(i).key}`);
          }
        } 
      });
    }
</script>
 
 
<style scoped>
.title{
  text-align: center;
  width: 100vw;
  font-size: 50px;
  margin: 0;
  font-weight: bold;
  }
.extraDiv{
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
.videos{
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
  
iframe{
    width: 500px;
    aspect-ratio: 16/9;
  }
.get{
  border-radius: 10%;
  background-color: rgb(4,10,24)
}

.getButton{
  height: 30px;
  background-color: rgb(4,10,24);
}

#getform{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 20px solid rgb(255,255,255,0.1);
}
.getButton:hover{
box-shadow: 0px 1px 5px rgb(255 255 255);;
}

.submit{
background-color: rgb(4,10,24);
}

.submit:hover{
box-shadow: 0px 1px 5px rgb(255 255 255);;
}

h1{
  font-size: 50px;
}

.extraDiv{
  box-shadow: 0px 0px 20px 5px black;
  align-self: center;
  justify-self: center;
}

.video{
  margin: 0;
  width: 100vw;
  font-size: 50px;
  text-align: center;
  font-weight: bold
}

.videos{
  padding: 1rem 2rem;
  border-bottom: 5px solid rgb(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  
}

img{
  height: 281.25px;
}

p{
  width: 95vw;
  flex-wrap: wrap;
  font-size: 20px;
}

iframe{
  width: 500px;
  aspect-ratio: 16/9;
}

img{
  height: 281.25px;
}
/* .movieInfo{ */
  /* padding: 1rem 2rem;
  background-color: rgba(43, 43, 43, 0.5);
  border-top: 5px solid rgb(255,255,255,0.1);
  border-bottom: 5px solid rgb(255,255,255,0.1); */
/* } */
</style>

